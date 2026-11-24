#!/usr/bin/env python3
"""
Generate physical static directory pages for each clean SEO URL
targeting 'Shapoorji Pallonji Khopoli Plots near Lonavala'.
Each page is an exact pre-rendered copy with dedicated canonical,
title, and auto-scroll target.
"""

import os
import shutil

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX_PATH = os.path.join(BASE_DIR, 'index.html')

PAGES = [
    {
        'slug': 'shapoorji-pallonji-khopoli-plots-near-lonavala',
        'section_id': 'home',
        'title': "Shapoorji Pallonji Khopoli Plots near Lonavala | 100% N.A. Freehold Plots from ₹95L*",
        'description': "Shapoorji Pallonji Khopoli Plots near Lonavala: 100% Collector Sanctioned N.A. Freehold Bungalow Plots (Min 2,000 sq.ft) from ₹95 Lacs* with 380-acre private bio-forest. MahaRERA PP1270002602610."
    },
    {
        'slug': 'shapoorji-pallonji-khopoli-plots-masterplan',
        'section_id': 'masterplan',
        'title': "Masterplan | Shapoorji Pallonji Khopoli Plots near Lonavala | 900+ Acres",
        'description': "Interactive Masterplan for Shapoorji Pallonji Khopoli plots near Lonavala: Explore Delphi Ridge Estates, Cascade Meadows, Sanctuary Forest plots, and 40+ curated amenities."
    },
    {
        'slug': 'shapoorji-pallonji-khopoli-plots-amenities',
        'section_id': 'amenities',
        'title': "40+ Curated Amenities | Shapoorji Pallonji Khopoli Plots near Lonavala",
        'description': "Discover 40+ luxury lifestyle amenities at Shapoorji Pallonji Khopoli plots near Lonavala: 50,000 sq.ft Delphi clubhouse, heated lap pools, hydrotherapy spa, and nature trails."
    },
    {
        'slug': 'shapoorji-pallonji-khopoli-plots-infographics',
        'section_id': 'infographics',
        'title': "Engineering & Infrastructure Infographics | Shapoorji Pallonji Khopoli Plots",
        'description': "Master township engineering benchmarks for Shapoorji Pallonji Khopoli plots near Lonavala: 100% underground cabling, zero-discharge STP, RFID biometric gates, and 75% green cover."
    },
    {
        'slug': 'shapoorji-pallonji-khopoli-plots-near-lonavala-gallery',
        'section_id': 'gallery',
        'title': "Sahyadri Nature Gallery | Shapoorji Pallonji Khopoli Plots near Lonavala",
        'description': "High-resolution photo gallery of Sahyadri mountain ridges, 380-acre bio-forest reserve, waterfalls, and private villa estates at Shapoorji Pallonji Khopoli plots near Lonavala."
    },
    {
        'slug': 'shapoorji-pallonji-khopoli-plots-wellness-pillars',
        'section_id': 'pillars',
        'title': "5 Pillars of Living | Shapoorji Pallonji Khopoli Plots near Lonavala",
        'description': "The 5 holistic wellness pillars of India's Wellness Capital: Physical vitality, mental tranquility shalas, private bio-reserve forest, curated clubhouse living, and Vedic organic food."
    },
    {
        'slug': 'shapoorji-pallonji-khopoli-bungalow-plots-near-lonavala',
        'section_id': 'villas',
        'title': "Bungalow & Villa Archetypes | Shapoorji Pallonji Khopoli Plots near Lonavala",
        'description': "Turnkey luxury villa architectural concepts for Shapoorji Pallonji Khopoli bungalow plots near Lonavala: The Glass Pavilion, Sahyadri Courtyard Estate, and Horizon Cascade Chalet."
    },
    {
        'slug': 'shapoorji-pallonji-khopoli-plots-connectivity-lonavala',
        'section_id': 'connectivity',
        'title': "Connectivity & Travel Times | Shapoorji Pallonji Khopoli Plots near Lonavala",
        'description': "Prime strategic connectivity for Shapoorji Pallonji Khopoli plots: 15 mins to Lonavala, 45 mins to upcoming NMIA Airport, 60 mins to Pune, and 70 mins to Mumbai via Expressway."
    },
    {
        'slug': 'shapoorji-pallonji-khopoli-plots-near-lonavala-faq',
        'section_id': 'regional-faq',
        'title': "Buyer FAQ & Land Title Guide | Shapoorji Pallonji Khopoli Plots near Lonavala",
        'description': "Comprehensive buyer guide and statutory FAQs for Shapoorji Pallonji Khopoli plots near Lonavala: Collector N.A. sanctions, 7/12 extract conveyance, MahaRERA PP1270002602610, and pricing."
    },
    {
        'slug': 'shapoorji-pallonji-legacy-khopoli-plots',
        'section_id': 'legacy',
        'title': "158+ Years Engineering Legacy | Shapoorji Pallonji Khopoli Plots",
        'description': "158+ years of trust, engineering excellence, and nation-building heritage behind Shapoorji Pallonji Real Estate's landmark plotted sanctuary in Khopoli near Lonavala."
    }
]

def build_pages():
    with open(INDEX_PATH, 'r', encoding='utf-8') as f:
        master_html = f.read()

    for page in PAGES:
        slug_dir = os.path.join(BASE_DIR, page['slug'])
        os.makedirs(slug_dir, exist_ok=True)
        page_html = master_html
        
        # Update canonical URL
        old_canonical = '<link rel="canonical" href="https://shapoorjitownship.in/">'
        new_canonical = f'<link rel="canonical" href="https://shapoorjitownship.in/{page["slug"]}">'
        page_html = page_html.replace(old_canonical, new_canonical)
        
        # Update Title & Description
        import re
        page_html = re.sub(r'<title>.*?</title>', f'<title>{page["title"]}</title>', page_html)
        page_html = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{page["description"]}">', page_html, count=1)
        
        out_file = os.path.join(slug_dir, 'index.html')
        with open(out_file, 'w', encoding='utf-8') as f:
            f.write(page_html)
        print(f"Generated: {page['slug']}/index.html (section: {page['section_id']})")

if __name__ == '__main__':
    build_pages()
