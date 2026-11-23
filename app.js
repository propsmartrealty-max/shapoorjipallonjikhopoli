/**
 * INDIA'S WELLNESS CAPITAL | SHAPOORJI PALLONJI (DELPHI PLOTS, KHOPOLI)
 * Masterpiece Interactive Engine
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Data Store: Masterplan Zones
  // -------------------------------------------------------------------------
  const ZONES_DATA = {
    ridge: {
      id: 'ridge',
      name: 'Delphi Ridge Estates',
      category: 'Signature Luxury',
      status: 'fast-filling',
      statusText: 'Limited Release (8 Plots Remaining)',
      sizeRange: '3,500 – 5,500 sq.ft.',
      elevation: '440m Above Sea Level',
      facing: 'Panoramic North-East / Sahyadri Valley',
      price: '₹ 1.85 Cr*',
      priceSub: 'Starting at',
      image: 'assets/spre/india-wellness-capital-hill-land.webp',
      imgTag: 'Elevation 440m • Ridge Hill Panorama',
      description: 'Crowning the highest ridge of the township, Delphi Ridge Estates offer unhindered panoramic views of the Sahyadri mountains and morning mist valleys. Custom luxury villa footprint with private infinity pool provisions.',
      perks: [
        'Unobstructed 270° Sahyadri valley views',
        'Vastu-aligned North & East plot entries',
        'Dedicated 12m wide avenues with underground utilities',
        'Direct access to Private Ridge Walkway & Sunrise Deck'
      ]
    },
    forest: {
      id: 'forest',
      name: 'The Sanctuary Forest Plots',
      category: 'Biophilic Seclusion',
      status: 'available',
      statusText: 'Available for Selection',
      sizeRange: '2,200 – 3,200 sq.ft.',
      elevation: '415m Above Sea Level',
      facing: 'Forest Canopy / Ancient Woods',
      price: '₹ 1.25 Cr*',
      priceSub: 'Starting at',
      image: 'assets/spre/gallery_photogallery_2.webp',
      imgTag: 'Elevation 415m • 380-Acre Bio-Forest Canopy',
      description: 'Enveloped by the 380-acre private bio-forest reserve. Designed for nature enthusiasts seeking complete tranquility, native birdsong, and Shinrin-yoku forest bathing at their doorstep.',
      perks: [
        'Enveloped by dense evergreen trees & teak canopy',
        'Natural tree retention guidelines for organic villa architecture',
        'Micro-climate advantage: 3-4°C cooler than Mumbai plains',
        'Proximity to Zen Meditation Pavilions & Walking Trails'
      ]
    },
    meadows: {
      id: 'meadows',
      name: 'Cascade Meadows NA Plots',
      category: 'Waterfront & Valley NA Plots',
      status: 'available',
      statusText: 'New Phase Launch',
      sizeRange: '2,000 – 2,500 sq.ft.',
      elevation: '395m Above Sea Level',
      facing: 'Perennial Stream & Waterfall',
      price: 'from ₹95 Lacs*',
      priceSub: 'All-inclusive starting at (Min 2,000 sq.ft)',
      image: 'assets/spre/gallery_photogallery_3.webp',
      imgTag: 'Elevation 395m • Natural Cascades & Meadows',
      description: 'Nestled along natural seasonal waterfalls and the perennial rainwater check-dam basin. 100% N.A. sanctioned flat, easily buildable land parcels ideal for weekend wellness retreats and custom family bungalow estates.',
      perks: [
        '100% Collector approved N.A. bungalow land with 7/12 extract',
        'Generous 2,000+ sq.ft minimum plot footprint for custom villas',
        'Waterfront promenade & riparian nature buffer',
        'High rental yield potential for luxury weekend getaways'
      ]
    },
    clubhouse: {
      id: 'clubhouse',
      name: 'The Delphi Sanctuary & Resort',
      category: 'Lifestyle & Spa Epicenter',
      status: 'available',
      statusText: 'Township Central Core',
      sizeRange: '50,000+ sq.ft. Built Clubhouse',
      elevation: '410m Above Sea Level',
      facing: 'Lakeside & Central Greens',
      price: 'Exclusive to Owners',
      priceSub: 'Resident Privilege',
      image: 'assets/spre/popup.webp',
      imgTag: '50,000 Sq.Ft • Delphi Wellness Pavilion',
      description: 'A 50,000 sq.ft world-class wellness sanctuary curated in partnership with renowned global spa and wellness practitioners. Features Olympic lap pools, thermal hydrotherapy, and organic farm-to-fork dining.',
      perks: [
        'Heated indoor & open-air infinity lap pools',
        'Ayurvedic healing chambers & Turkish hammam',
        'Artisanal organic café & sunset lounge',
        'Squash, tennis courts, and high-tech wellness gym'
      ]
    },
    orchard: {
      id: 'orchard',
      name: 'Vedic Organic Orchards',
      category: 'Sustenance & Harvest',
      status: 'available',
      statusText: 'Community Agriscaping',
      sizeRange: '25+ Acres Dedicated Land',
      elevation: '405m Above Sea Level',
      facing: 'Central Meadow Sunbelt',
      price: 'Community Shared Farm',
      priceSub: 'Harvest Allocation for All Estates',
      image: 'assets/spre/gallery_photogallery_4.webp',
      imgTag: '25+ Acres • Vedic Agriscaping Trails',
      description: 'Every resident enjoys a dedicated allotment in our permaculture and organic farm managed by expert agronomists. Relish pesticide-free seasonal vegetables, herbs, and exotic fruits delivered directly to your doorstep.',
      perks: [
        'Over 40 indigenous herbal and fruit-bearing species',
        'Weekend community farming & hydroponic workshops',
        'On-site honeybee apiary and Vedic cow sanctuary',
        'Farm-to-table weekend harvest baskets for owners'
      ]
    },
    skydeck: {
      id: 'skydeck',
      name: 'Sahyadri Observatory & Trails',
      category: 'Adventure & Astronomy',
      status: 'available',
      statusText: 'Township Ridge Point',
      sizeRange: '15 km Mountain Trail Network',
      elevation: '455m Peak Point',
      facing: 'North-West Constellations & Valley',
      price: 'Open to Residents',
      priceSub: 'Private Township Access',
      image: 'assets/spre/gallery_photogallery_5.webp',
      imgTag: 'Elevation 455m • Sahyadri Stargazing Apex',
      description: 'Sitting at the apex elevation of the Delphi township, the Stargazing Observatory and High-Altitude Trail Hub offer zero-light-pollution views of deep night skies and thrilling downhill cycling circuits.',
      perks: [
        'High-powered astronomical telescope viewing dome',
        '15 kilometers of curated hiking and gravel biking trails',
        'Open-air cliff amphitheatre for acoustic performances',
        'Observation decks overlooking Lonavala ghat cliffs'
      ]
    }
  };

  // -------------------------------------------------------------------------
  // 2. Data Store: Villa Archetypes
  // -------------------------------------------------------------------------
  const VILLA_ARCHETYPES = [
    {
      id: 'glass-pavilion',
      name: 'The Glass Pavilion Villa',
      type: 'Modernist Hillside Sanctuary',
      plotRequirement: '3,000 – 5,500 sq.ft.',
      builtUp: '3,800 sq.ft. (4 BHK + Plunge Pool)',
      image: 'assets/spre/gallery_photogallery_1.webp',
      summary: 'Minimalist floor-to-ceiling glass cantilevers seamlessly merging internal luxury with the dramatic Sahyadri peaks. Features double-height living areas, basalt stone accents, and a suspended infinity pool.'
    },
    {
      id: 'courtyard-villa',
      name: 'The Sahyadri Courtyard Estate',
      type: 'Biophilic Vernacular Villa',
      plotRequirement: '2,200 – 3,500 sq.ft.',
      builtUp: '2,900 sq.ft. (3.5 BHK + Zen Court)',
      image: 'assets/spre/gallery_photogallery_2.webp',
      summary: 'Organized around a central micro-climate courtyard with reflecting lotus pool and native frangipani trees. Deep overhangs protect against monsoon rains while inviting continuous mountain cross-ventilation.'
    },
    {
      id: 'horizon-ridge',
      name: 'The Horizon Cascade Chalet',
      type: 'Alpine Timber & Basalt Villa',
      plotRequirement: '2,000 – 2,800 sq.ft.',
      builtUp: '2,350 sq.ft. (3 BHK + Sky Terrace)',
      image: 'assets/spre/gallery_photogallery_3.webp',
      summary: 'An elegant split-level chalet optimized for contoured land. Features rooftop stargazing solarium, bespoke cedarwood decks, and open-plan kitchen flowing toward private garden greens.'
    }
  ];

  // -------------------------------------------------------------------------
  // 3. Audio Ambience Synthesizer (Web Audio API)
  // -------------------------------------------------------------------------
  class AmbienceEngine {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.masterGain = null;
      this.windGain = null;
      this.streamGain = null;
      this.birdTimer = null;
    }

    init() {
      if (this.ctx) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Pink Noise Wind Generator
      this.createWindGenerator();
      // Flowing Stream Generator
      this.createStreamGenerator();
    }

    createWindGenerator() {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      this.windSource = this.ctx.createBufferSource();
      this.windSource.buffer = noiseBuffer;
      this.windSource.loop = true;

      // Filter for gentle mountain wind
      this.windFilter = this.ctx.createBiquadFilter();
      this.windFilter.type = 'lowpass';
      this.windFilter.frequency.setValueAtTime(260, this.ctx.currentTime);
      this.windFilter.Q.setValueAtTime(3.0, this.ctx.currentTime);

      this.windGain = this.ctx.createGain();
      this.windGain.gain.setValueAtTime(0.001, this.ctx.currentTime);

      this.windSource.connect(this.windFilter);
      this.windFilter.connect(this.windGain);
      this.windGain.connect(this.masterGain);
      this.windSource.start();

      // Slow dynamic wind lfo
      this.animateWind();
    }

    animateWind() {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const freq = 200 + Math.sin(now * 0.2) * 120 + Math.sin(now * 0.05) * 60;
      if (this.windFilter) {
        this.windFilter.frequency.setTargetAtTime(freq, now, 1.5);
      }
      setTimeout(() => this.animateWind(), 1000);
    }

    createStreamGenerator() {
      // Gentle bubbling water resonance
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.03;
      }

      this.streamSource = this.ctx.createBufferSource();
      this.streamSource.buffer = noiseBuffer;
      this.streamSource.loop = true;

      this.streamFilter = this.ctx.createBiquadFilter();
      this.streamFilter.type = 'bandpass';
      this.streamFilter.frequency.setValueAtTime(800, this.ctx.currentTime);
      this.streamFilter.Q.setValueAtTime(4.0, this.ctx.currentTime);

      this.streamGain = this.ctx.createGain();
      this.streamGain.gain.setValueAtTime(0.001, this.ctx.currentTime);

      this.streamSource.connect(this.streamFilter);
      this.streamFilter.connect(this.streamGain);
      this.streamGain.connect(this.masterGain);
      this.streamSource.start();
    }

    triggerBirdChime() {
      if (!this.isPlaying || !this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const chimeGain = this.ctx.createGain();

        // High crystal tone like morning mountain thrush
        const startFreq = 2200 + Math.random() * 800;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(startFreq, now);
        osc.frequency.exponentialRampToValueAtTime(startFreq * 1.3, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(startFreq * 0.9, now + 0.22);

        chimeGain.gain.setValueAtTime(0.0001, now);
        chimeGain.gain.linearRampToValueAtTime(0.03, now + 0.04);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

        osc.connect(chimeGain);
        chimeGain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 0.3);
      } catch (e) {
        // Audio suspended
      }

      // Schedule next organic chirp
      const nextDelay = 3500 + Math.random() * 7000;
      this.birdTimer = setTimeout(() => this.triggerBirdChime(), nextDelay);
    }

    toggle() {
      this.init();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.isPlaying = !this.isPlaying;
      const now = this.ctx.currentTime;

      if (this.isPlaying) {
        this.windGain.gain.linearRampToValueAtTime(0.35, now + 2);
        this.streamGain.gain.linearRampToValueAtTime(0.2, now + 2);
        this.triggerBirdChime();
      } else {
        this.windGain.gain.linearRampToValueAtTime(0.0001, now + 1);
        this.streamGain.gain.linearRampToValueAtTime(0.0001, now + 1);
        if (this.birdTimer) clearTimeout(this.birdTimer);
      }

      return this.isPlaying;
    }
  }

  // -------------------------------------------------------------------------
  // 4. Canvas Particle Mist & Firefly System
  // -------------------------------------------------------------------------
  function initParticleCanvas() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor((width * height) / 18000), 70);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.4 - 0.1, // Gently float upwards like mountain mist
        alpha: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.4 ? '22, 163, 74' : (Math.random() > 0.5 ? '34, 197, 94' : '179, 138, 56'), // Emerald Spores, Leaf Green & Gold Sun Dust
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function render() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Subtle attraction/deflection to cursor
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= (dx / dist) * 0.4;
          p.y -= (dy / dist) * 0.4;
        }

        // Wrap around bounds
        if (p.y < 0) p.y = height + 10;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        p.alpha += Math.sin(Date.now() * p.pulseSpeed * 0.05) * 0.005;
        p.alpha = Math.max(0.1, Math.min(0.7, p.alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(render);
    }

    render();
  }

  // -------------------------------------------------------------------------
  // 5. Cursor Glow Follower
  // -------------------------------------------------------------------------
  function initCursorGlow() {
    const cursor = document.querySelector('.cursor-glow');
    if (!cursor) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function update() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      requestAnimationFrame(update);
    }
    update();
  }

  // -------------------------------------------------------------------------
  // 6. Masterplan & Plot Inspector Component
  // -------------------------------------------------------------------------
  function initMasterplanExplorer() {
    const zonePolygons = document.querySelectorAll('.map-zone-polygon');
    const zoneTabs = document.querySelectorAll('.zone-tab');
    const sizeSelect = document.getElementById('plot-size-filter-select');

    // Inspector elements
    const tagBadge = document.getElementById('inspector-status-badge');
    const categoryText = document.getElementById('inspector-category');
    const titleText = document.getElementById('inspector-title');
    const subText = document.getElementById('inspector-subtitle');
    const specArea = document.getElementById('inspector-spec-area');
    const specElevation = document.getElementById('inspector-spec-elevation');
    const specFacing = document.getElementById('inspector-spec-facing');
    const perkList = document.getElementById('inspector-perks-list');
    const priceAmount = document.getElementById('inspector-price');
    const priceSub = document.getElementById('inspector-price-sub');
    const inspectorImg = document.getElementById('inspector-image');
    const inspectorImgTag = document.getElementById('inspector-img-tag');

    function updateInspector(zoneKey) {
      const data = ZONES_DATA[zoneKey];
      if (!data) return;

      // Update image & photo tag
      if (inspectorImg && data.image) {
        inspectorImg.src = data.image;
        inspectorImg.alt = data.name;
      }
      if (inspectorImgTag && data.imgTag) {
        inspectorImgTag.textContent = data.imgTag;
      }

      // Update badge
      if (tagBadge) {
        tagBadge.className = `zone-status-badge ${data.status}`;
        tagBadge.textContent = data.statusText;
      }
      if (categoryText) categoryText.textContent = data.category;
      if (titleText) titleText.textContent = data.name;
      if (subText) subText.textContent = data.description;
      if (specArea) specArea.textContent = data.sizeRange;
      if (specElevation) specElevation.textContent = data.elevation;
      if (specFacing) specFacing.textContent = data.facing;
      if (priceAmount) priceAmount.textContent = data.price;
      if (priceSub) priceSub.textContent = data.priceSub;

      // Update perks
      if (perkList) {
        perkList.innerHTML = '';
        data.perks.forEach((p) => {
          const li = document.createElement('li');
          li.className = 'inspector-perk-item';
          li.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${p}</span>
          `;
          perkList.appendChild(li);
        });
      }

      // Sync active state in tabs & SVG map
      zoneTabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.zone === zoneKey);
      });
      zonePolygons.forEach((poly) => {
        poly.classList.toggle('active', poly.dataset.zone === zoneKey);
      });
    }

    // SVG Polygon Click & Hover
    zonePolygons.forEach((poly) => {
      poly.addEventListener('click', () => {
        const zone = poly.dataset.zone;
        updateInspector(zone);
      });
    });

    // Tab Clicks
    zoneTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const zone = tab.dataset.zone;
        updateInspector(zone);
      });
    });

    // Size Filter
    if (sizeSelect) {
      sizeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'all') {
          updateInspector('ridge');
        } else if (val === 'compact') {
          updateInspector('meadows');
        } else if (val === 'medium') {
          updateInspector('forest');
        } else if (val === 'large') {
          updateInspector('ridge');
        }
      });
    }

    // Default select Ridge
    updateInspector('ridge');
  }

  // -------------------------------------------------------------------------
  // 7. Villa Archetypes Interactive Gallery
  // -------------------------------------------------------------------------
  function initVillaArchetypes() {
    const selectorCards = document.querySelectorAll('.archetype-selector-card');
    const displayImg = document.getElementById('archetype-display-image');
    const overlayTitle = document.getElementById('archetype-overlay-title');
    const overlayType = document.getElementById('archetype-overlay-type');
    const overlayPlot = document.getElementById('archetype-overlay-plot');
    const overlayBuilt = document.getElementById('archetype-overlay-built');

    selectorCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        selectorCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');

        const item = VILLA_ARCHETYPES[index];
        if (item && displayImg) {
          displayImg.style.opacity = '0.3';
          setTimeout(() => {
            displayImg.src = item.image;
            displayImg.style.opacity = '1';
          }, 200);

          if (overlayTitle) overlayTitle.textContent = item.name;
          if (overlayType) overlayType.textContent = item.type;
          if (overlayPlot) overlayPlot.textContent = item.plotRequirement;
          if (overlayBuilt) overlayBuilt.textContent = item.builtUp;
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 8. Financial ROI & EMI Calculator
  // -------------------------------------------------------------------------
  function initRoiCalculator() {
    const areaSlider = document.getElementById('calc-slider-area');
    const downPaymentSlider = document.getElementById('calc-slider-dp');
    const tenureSlider = document.getElementById('calc-slider-tenure');

    const areaValDisplay = document.getElementById('calc-display-area');
    const dpValDisplay = document.getElementById('calc-display-dp');
    const tenureValDisplay = document.getElementById('calc-display-tenure');

    const totalPlotDisplay = document.getElementById('calc-res-total');
    const dpAmountDisplay = document.getElementById('calc-res-dp-amount');
    const loanAmountDisplay = document.getElementById('calc-res-loan-amount');
    const emiDisplay = document.getElementById('calc-res-emi');
    const projectedValDisplay = document.getElementById('calc-res-projected-val');

    // Base rate per sq.ft in pre-launch (2,000 sq.ft minimum at from ₹95 Lacs*)
    const BASE_RATE_PER_SQFT = 4750; // ₹95 Lacs for 2,000 sq.ft plot
    const ANNUAL_INTEREST_RATE = 0.085; // 8.5% p.a.
    const PROJECTED_5YR_CAGR = 0.14; // 14% CAGR due to MTHL/NMIA

    function calculate() {
      const area = parseInt(areaSlider.value, 10);
      const dpPercent = parseInt(downPaymentSlider.value, 10);
      const tenureYears = parseInt(tenureSlider.value, 10);

      // Display labels
      if (areaValDisplay) areaValDisplay.textContent = `${area.toLocaleString()} sq.ft.`;
      if (dpValDisplay) dpValDisplay.textContent = `${dpPercent}%`;
      if (tenureValDisplay) tenureValDisplay.textContent = `${tenureYears} Years`;

      const totalPlotCost = area * BASE_RATE_PER_SQFT;
      const downPaymentAmt = totalPlotCost * (dpPercent / 100);
      const loanPrincipal = totalPlotCost - downPaymentAmt;

      // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
      const monthlyRate = ANNUAL_INTEREST_RATE / 12;
      const totalMonths = tenureYears * 12;
      const emi =
        (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

      // 5-Year Capital Appreciation (Compound interest)
      const projected5YrVal = totalPlotCost * Math.pow(1 + PROJECTED_5YR_CAGR, 5);

      function formatINR(val) {
        if (val >= 10000000) {
          return `₹ ${(val / 10000000).toFixed(2)} Cr`;
        } else if (val >= 100000) {
          return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
        }
        return `₹ ${Math.round(val).toLocaleString()}`;
      }

      if (totalPlotDisplay) totalPlotDisplay.textContent = formatINR(totalPlotCost);
      if (dpAmountDisplay) dpAmountDisplay.textContent = formatINR(downPaymentAmt);
      if (loanAmountDisplay) loanAmountDisplay.textContent = formatINR(loanPrincipal);
      if (emiDisplay) emiDisplay.textContent = `${formatINR(emi)} / mo`;
      if (projectedValDisplay) projectedValDisplay.textContent = formatINR(projected5YrVal);
    }

    if (areaSlider && downPaymentSlider && tenureSlider) {
      areaSlider.addEventListener('input', calculate);
      downPaymentSlider.addEventListener('input', calculate);
      tenureSlider.addEventListener('input', calculate);
      calculate();
    }
  }

  // -------------------------------------------------------------------------
  // 9. Live Micro-Climate Dashboard Simulation
  // -------------------------------------------------------------------------
  function initClimateWidget() {
    const tempEl = document.getElementById('climate-temp-val');
    const aqiEl = document.getElementById('climate-aqi-val');

    setInterval(() => {
      if (tempEl) {
        const baseTemp = 21.2;
        const delta = (Math.random() * 0.6 - 0.3).toFixed(1);
        tempEl.innerHTML = `${(parseFloat(baseTemp) + parseFloat(delta)).toFixed(1)}<small>°C</small>`;
      }
      if (aqiEl) {
        const baseAqi = 26;
        const delta = Math.floor(Math.random() * 5 - 2);
        aqiEl.innerHTML = `${baseAqi + delta}<small>AQI</small>`;
      }
    }, 4000);
  }

  // -------------------------------------------------------------------------
  // 10. VIP Booking & Lead Modal System
  // -------------------------------------------------------------------------
  function initVipModal() {
    const backdrop = document.getElementById('vip-modal-backdrop');
    const openBtns = document.querySelectorAll('[data-open-modal]');
    const closeBtn = document.getElementById('modal-close-btn');
    const form = document.getElementById('vip-booking-form');
    const formContainer = document.getElementById('modal-form-container');
    const confirmationContainer = document.getElementById('modal-confirmation-container');
    const vipPassCodeEl = document.getElementById('generated-vip-code');
    const clientNameEl = document.getElementById('vip-client-name');

    function openModal(defaultType = 'General') {
      if (backdrop) {
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      if (backdrop) {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    openBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const type = btn.dataset.openModal;
        openModal(type);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop && backdrop.classList.contains('active')) {
        closeModal();
      }
    });

    // Form submission
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('input-name');
        const phoneInput = document.getElementById('input-phone');
        const plotChoice = document.getElementById('select-plot-pref');

        const clientName = nameInput ? nameInput.value.trim() : 'Esteemed Guest';
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const passCode = `SP-DELPHI-${randomNum}`;

        if (vipPassCodeEl) vipPassCodeEl.textContent = passCode;
        if (clientNameEl) clientNameEl.textContent = clientName;

        if (formContainer && confirmationContainer) {
          formContainer.style.display = 'none';
          confirmationContainer.style.display = 'block';
        }

        showToast(`VIP Pass Generated: ${passCode}. Our Delphi Concierge will contact you.`);
      });
    }

    const resetBtn = document.getElementById('vip-pass-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (formContainer && confirmationContainer) {
          formContainer.style.display = 'block';
          confirmationContainer.style.display = 'none';
          if (form) form.reset();
        }
        closeModal();
      });
    }
  }

  // -------------------------------------------------------------------------
  // 11. Toast Notifications
  // -------------------------------------------------------------------------
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  // -------------------------------------------------------------------------
  // 12. Navbar Scroll State, Scrollspy & Home Navigation
  // -------------------------------------------------------------------------
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const brandLogo = document.getElementById('nav-brand-logo');
    const links = document.querySelectorAll('.nav-link');

    // Attach logo directly to Home
    if (brandLogo) {
      brandLogo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        links.forEach((l) => l.classList.remove('active'));
        const homeLink = document.querySelector('.nav-link[data-nav="home"]');
        if (homeLink) homeLink.classList.add('active');
      });
    }

    // Scroll state & Scrollspy
    const sections = ['masterplan', 'amenities', 'infographics', 'gallery', 'pillars', 'villas', 'connectivity', 'legacy'];
    
    window.addEventListener('scroll', () => {
      if (!navbar) return;
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Dynamic Active Link Highlighting
      if (window.scrollY < 300) {
        links.forEach((l) => l.classList.remove('active'));
        const homeLink = document.querySelector('.nav-link[data-nav="home"]');
        if (homeLink) homeLink.classList.add('active');
        return;
      }

      const scrollPos = window.scrollY + 180;
      let currentSection = null;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = id;
          }
        }
      });

      if (currentSection) {
        links.forEach((l) => l.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[data-nav="${currentSection}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });

    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        const isShown = navLinks.style.display === 'flex';
        navLinks.style.display = isShown ? 'none' : 'flex';
        if (!isShown) {
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '100%';
          navLinks.style.left = '0';
          navLinks.style.width = '100%';
          navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
          navLinks.style.padding = '1.5rem';
          navLinks.style.border = '1px solid var(--emerald-border)';
          navLinks.style.borderRadius = '16px';
          navLinks.style.boxShadow = '0 15px 40px rgba(12, 35, 64, 0.15)';
        }
      });
    }
  }

  // -------------------------------------------------------------------------
  // 13. Ambience Button Hookup
  // -------------------------------------------------------------------------
  function initAudioButton() {
    const engine = new AmbienceEngine();
    const btn = document.getElementById('audio-toggle-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const playing = engine.toggle();
      btn.classList.toggle('playing', playing);
      btn.setAttribute('title', playing ? 'Mute Mountain Ambience' : 'Play Sahyadri Nature Ambience');

      if (playing) {
        showToast('Mountain soundscape active: Sahyadri breeze & birdsong.');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 14. 3D Kinetic Tilt & Specular Light Interactions
  // -------------------------------------------------------------------------
  function init3DTiltCards() {
    const targets = document.querySelectorAll(
      '.amenity-cluster-card, .infra-card, .metric-card, .pillar-card, .spec-category-box, .stat-item, .catalyst-card, .sp-trust-badge-card'
    );

    targets.forEach((card) => {
      card.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease';
      card.style.transformStyle = 'preserve-3d';

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  // -------------------------------------------------------------------------
  // Hero Gallery Switcher
  // -------------------------------------------------------------------------
  function initHeroGallery() {
    const thumbButtons = document.querySelectorAll('.hero-thumb-btn');
    const heroImg = document.getElementById('hero-active-img');
    const heroTitle = document.getElementById('hero-active-title');
    const heroSub = document.getElementById('hero-active-sub');
    const heroTag = document.getElementById('hero-active-tag');

    if (!thumbButtons.length || !heroImg) return;

    thumbButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        thumbButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const src = btn.getAttribute('data-src');
        const title = btn.getAttribute('data-title');
        const sub = btn.getAttribute('data-sub');
        const tag = btn.getAttribute('data-tag');

        heroImg.style.opacity = '0.3';
        heroImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          if (src) heroImg.src = src;
          heroImg.style.opacity = '1';
          heroImg.style.transform = 'scale(1)';
        }, 180);

        if (heroTitle && title) heroTitle.textContent = title;
        if (heroTag && tag) heroTag.textContent = tag;
        if (heroSub && sub) {
          heroSub.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${sub}
          `;
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // Initialize Everything on DOM Ready
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initParticleCanvas();
    initCursorGlow();
    initNavbar();
    initHeroGallery();
    initMasterplanExplorer();
    initVillaArchetypes();
    initRoiCalculator();
    initClimateWidget();
    initVipModal();
    initAudioButton();
    init3DTiltCards();
  });
})();
