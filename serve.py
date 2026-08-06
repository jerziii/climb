#!/usr/bin/env python3
"""Serve this folder on the local network so a phone can open it.

    python3 serve.py            # http, fine for aligning topos
    python3 serve.py --https    # self-signed TLS, needed for the locate button
    python3 serve.py --port 9000

Plain http over a LAN IP is not a "secure context", so browsers refuse
geolocation and clipboard writes there. --https makes a throwaway certificate
for your current LAN address, which costs you one "proceed anyway" tap on the
phone and buys back the blue you-are-here dot. Nothing here is meant to face
the public internet.

Standard library only. No install step.
"""

import argparse
import http.server
import os
import socket
import ssl
import subprocess
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
CERT_DIR = os.path.join(ROOT, ".certs")


def lan_ip() -> str:
    """Best-effort LAN address. No packets are actually sent."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        s.close()


def free_port(preferred: int) -> int:
    """Return `preferred` if bindable, else let the OS pick one."""
    for port in (preferred, 0):
        s = socket.socket()
        try:
            s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            s.bind(("0.0.0.0", port))
            return s.getsockname()[1]
        except OSError:
            continue
        finally:
            s.close()
    return preferred


def make_cert(ip: str):
    """Self-signed cert valid for this IP. Regenerated when the IP changes."""
    os.makedirs(CERT_DIR, exist_ok=True)
    key = os.path.join(CERT_DIR, f"{ip}.key")
    crt = os.path.join(CERT_DIR, f"{ip}.crt")
    if os.path.exists(key) and os.path.exists(crt):
        return key, crt
    try:
        subprocess.run(
            ["openssl", "req", "-x509", "-newkey", "rsa:2048", "-nodes",
             "-keyout", key, "-out", crt, "-days", "365",
             "-subj", f"/CN={ip}", "-addext", f"subjectAltName=IP:{ip}"],
            check=True, capture_output=True,
        )
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        detail = e.stderr.decode(errors="replace").strip() if hasattr(e, "stderr") and e.stderr else e
        sys.exit(f"Could not create a certificate ({detail}).\nRun without --https instead.")
    return key, crt


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def end_headers(self):
        # always re-fetch, so editing index.html and pulling to refresh is enough
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write(f"  {self.address_string()}  {fmt % args}\n")


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--port", type=int, default=8080)
    ap.add_argument("--https", action="store_true",
                    help="serve over TLS so geolocation works on the phone")
    args = ap.parse_args()

    if not os.path.exists(os.path.join(ROOT, "index.html")):
        sys.exit(f"No index.html in {ROOT} — run this from inside the repo.")

    port = free_port(args.port)
    if port != args.port:
        print(f"Port {args.port} was busy, using {port} instead.")

    httpd = http.server.ThreadingHTTPServer(("0.0.0.0", port), Handler)
    scheme = "http"

    if args.https:
        ip = lan_ip()
        key, crt = make_cert(ip)
        ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        ctx.load_cert_chain(crt, key)
        httpd.socket = ctx.wrap_socket(httpd.socket, server_side=True)
        scheme = "https"

    ip = lan_ip()
    url = f"{scheme}://{ip}:{port}/"
    bar = "─" * (len(url) + 8)
    print(f"\n┌{bar}┐")
    print(f"│    {url}    │")
    print(f"└{bar}┘")
    print("  Open that on your phone — same Wi-Fi network.")
    print(f"  On this machine: {scheme}://localhost:{port}/")
    if args.https:
        print("\n  The certificate is self-signed, so the phone will warn once.")
        print("  Tap Advanced → Proceed. That is what unlocks the ◎ locate button.")
    else:
        print("\n  Plain http: the ◎ locate button and Copy coords stay blocked")
        print("  by the browser. Re-run with --https if you want them.")
    print("\n  Ctrl+C to stop.\n")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
