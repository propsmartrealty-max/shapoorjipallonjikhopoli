#!/usr/bin/env python3
"""
IndexNow Instant Search Engine Indexing Submitter for shapoorjitownship.in
Notifies Bing, Yandex, Seznam, and partner engines instantly of all URL updates.
"""
import urllib.request
import json
import ssl

ctx = ssl._create_unverified_context()
HOST = "shapoorjitownship.in"
KEY = "e8f4a7c1b29d435e9821034f71a6bc89"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"

URLS = [
    f"https://{HOST}/",
    f"https://{HOST}/shapoorji-pallonji-khopoli-plots-near-lonavala",
    f"https://{HOST}/shapoorji-pallonji-khopoli-plots-masterplan",
    f"https://{HOST}/shapoorji-pallonji-khopoli-plots-amenities",
    f"https://{HOST}/shapoorji-pallonji-khopoli-plots-infographics",
    f"https://{HOST}/shapoorji-pallonji-khopoli-plots-near-lonavala-gallery",
    f"https://{HOST}/shapoorji-pallonji-khopoli-plots-wellness-pillars",
    f"https://{HOST}/shapoorji-pallonji-khopoli-bungalow-plots-near-lonavala",
    f"https://{HOST}/shapoorji-pallonji-khopoli-plots-connectivity-lonavala",
    f"https://{HOST}/shapoorji-pallonji-khopoli-plots-near-lonavala-faq",
    f"https://{HOST}/shapoorji-pallonji-legacy-khopoli-plots"
]

payload = {
    "host": HOST,
    "key": KEY,
    "keyLocation": KEY_LOCATION,
    "urlList": URLS
}

endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow"
]

for endpoint in endpoints:
    req = urllib.request.Request(
        endpoint,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            print(f"[{endpoint}] Status: {resp.status} - IndexNow notification sent successfully!")
    except urllib.error.HTTPError as e:
        print(f"[{endpoint}] Response: {e.code} - {e.read().decode()}")
    except Exception as ex:
        print(f"[{endpoint}] Failed: {ex}")
