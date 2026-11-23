#!/usr/bin/env python3
"""
Google Indexing API & Google Search Console Automation Script
Domain: https://shapoorjitownship.in/

How to use with Google Service Account:
1. Enable 'Webmaster / Search Console API' & 'Indexing API' in Google Cloud Console.
2. Download service account JSON key file as 'service_account.json'.
3. In Google Search Console, add the service account email as an 'Owner' or 'Full User' to https://shapoorjitownship.in/.
4. Run: python3 scripts/google_indexing_api.py service_account.json
"""

import sys
import os
import json
import urllib.request
import ssl

HOST = "shapoorjitownship.in"
TARGET_URLS = [
    f"https://{HOST}/",
    f"https://{HOST}/#masterplan",
    f"https://{HOST}/#amenities",
    f"https://{HOST}/#villas",
    f"https://{HOST}/#connectivity",
    f"https://{HOST}/#regional-faq",
    f"https://{HOST}/#pillars",
    f"https://{HOST}/#investment",
    f"https://{HOST}/#legacy",
    f"https://{HOST}/sitemap.xml",
    f"https://{HOST}/robots.txt"
]

def main():
    print("=" * 65)
    print(" GOOGLE ENTERPRISE SEO INDEXING ENGINE | SHAPOORJITOWNSHIP.IN")
    print(" Target Keywords:")
    print("  • Shapoorji Pallonji Khopoli Bungalow Plots")
    print("  • India's Wellness Capital (Delphi Plots, Khopoli)")
    print("  • Indian Wellness Center Plots")
    print("  • Luxury NA Freehold Plots near Lonavala (From ₹95 Lacs*)")
    print("  • Second Home Villa Plots Mumbai & Pune Region")
    print("=" * 65)

    if len(sys.argv) < 2:
        print("\n[NOTE] No Google Service Account JSON provided.")
        print("To submit live publish notifications via Google Indexing API:")
        print("  python3 scripts/google_indexing_api.py <path_to_service_account.json>\n")
        print("Generated URL Inventory for Googlebot & GSC:")
        for u in TARGET_URLS:
            print(f"  ✓ {u}")
        return

    key_file = sys.argv[1]
    if not os.path.exists(key_file):
        print(f"Error: {key_file} not found.")
        return

    print(f"Using Service Account: {key_file}")
    # Integration logic for google-auth / oauth2client
    try:
        from google.oauth2 import service_account
        import google.auth.transport.requests

        SCOPES = ["https://www.googleapis.com/auth/indexing"]
        credentials = service_account.Credentials.from_service_account_file(key_file, scopes=SCOPES)
        auth_req = google.auth.transport.requests.Request()
        credentials.refresh(auth_req)
        token = credentials.token

        ctx = ssl._create_unverified_context()
        endpoint = "https://indexing.googleapis.com/v3/urlNotifications:publish"

        for url in TARGET_URLS:
            data = json.dumps({"url": url, "type": "URL_UPDATED"}).encode("utf-8")
            req = urllib.request.Request(
                endpoint,
                data=data,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {token}"
                },
                method="POST"
            )
            with urllib.request.urlopen(req, context=ctx) as resp:
                print(f"[Google Indexing API] {url} -> Status {resp.status}")

    except ImportError:
        print("Install google-auth: pip install google-auth")

if __name__ == '__main__':
    main()
