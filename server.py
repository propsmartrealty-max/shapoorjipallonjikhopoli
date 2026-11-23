#!/usr/bin/env python3
"""
Simple HTTP server to serve the Shapoorji Pallonji India's Wellness Capital website.
Run with: python3 server.py
"""

import http.server
import socketserver
import os
import sys

PORT = 8080 if len(sys.argv) < 2 else int(sys.argv[1])
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"================================================================")
        print(f" INDIA'S WELLNESS CAPITAL | SHAPOORJI PALLONJI (DELPHI PLOTS)")
        print(f" Serving live at: http://localhost:{PORT}")
        print(f" Press Ctrl+C to stop.")
        print(f"================================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped gracefully.")

if __name__ == '__main__':
    run()
