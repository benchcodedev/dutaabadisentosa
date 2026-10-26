/**
 * DUTA ABADI SENTOSA (DUTATEX BALI) - TEXTILE RAW MATERIALS ATELIER
 * Raw Materials Lineup:
 * 1. Kapas (Cotton)
 * 2. Polyester
 * 3. Rayon / Viscose
 * 4. Linen
 * 5. Nylon dan Spandex
 * 6. Benang (Yarn)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. Header Scrolled State
  // ==========================================
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 2. Mobile Drawer Navigation
  // ==========================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));
  }

  // ==========================================
  // 3. Parallax effect on Hero Swirl (Desktop)
  // ==========================================
  const heroSwirl = document.querySelector('.hero-swirl-interactive');
  if (heroSwirl && window.innerWidth > 1024) {
    window.addEventListener('mousemove', (e) => {
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 15;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 15;
      heroSwirl.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
    });
  }

  // ==========================================
  // 4. Exact 6 Raw Material Categories Data
  // ==========================================
  const rawMaterialData = {
    'cotton': {
      title: 'Kapas (Cotton) • 100% Combed & Carded Knits',
      category: 'Kapas (Cotton)',
      tag: 'Pure Natural Fiber',
      stock: 'Ready Stock Rolls (±25 kg/roll)',
      gsm: '140 - 240 GSM (20s, 24s, 30s)',
      width: '42" Tubular (84" Circ.) / 60" Open',
      composition: '100% Long-Staple Ring-Spun Cotton',
      yarnCount: 'Ne 20s/1, Ne 24s/1, Ne 30s/1, Ne 40s/1',
      knitStructure: 'Single Jersey, Interlock, Rib 1x1 & 2x1',
      finish: 'Bio-Polish Enzyme Soft, Reactive Eco-Dyed',
      shrinkage: '< 3.5% (Pre-Shrunk Stenter Dried)',
      linearYield: '~3.0 - 3.3 Linear Meters / Kg',
      desc: 'Bahan baku kapas murni berkualitas tinggi yang melalui proses penyisiran mekanis (combing) untuk membersihkan kotoran serat dan menyeleksi serat kapas terpanjang. Hasil kain memiliki permukaan sangat halus, tidak berbulu (anti-pilling), sirkulasi udara optimal, daya serap keringat maksimal, dan kestabilan dimensi terbaik untuk industri tekstil.',
      shadesCount: '36+ Solid & Pastel Reactive Shades',
      image: 'assets/images/cotton_raw.jpg'
    },
    'polyester': {
      title: 'Polyester • Microfiber & Textured Technical Knits',
      category: 'Polyester',
      tag: 'High Tensile Polymer',
      stock: 'Ready Stock Rolls (±25 kg/roll)',
      gsm: '130 - 260 GSM',
      width: '60" - 72" Open Width (152 - 183 cm)',
      composition: '100% Micro Polyester DTY / Recycled Eco-Poly',
      yarnCount: '75D/72F, 100D/144F, 150D/288F Filaments',
      knitStructure: 'Dry-Fit Interlock, Mesh, Pique, Fleece',
      finish: 'Hydrophilic Capillary Wicking, Quick-Dry',
      shrinkage: '< 1.5% (Heat-Set Thermofixed)',
      linearYield: '~3.2 - 3.6 Linear Meters / Kg',
      desc: 'Material kain sintetis poliester filamen mikro dengan kekuatan tarik mekanis yang sangat kuat dan tahan aus. Memiliki sifat cepat kering (quick-dry), tidak mudah kusut, anti-susut, serta stabilitas cetak sublimasi warna beresolusi tinggi dengan ketahanan luntur cuci maksimal.',
      shadesCount: '24+ Performance & Sport Shades',
      image: 'assets/images/polyester_raw.jpg'
    },
    'rayon': {
      title: 'Rayon / Viscose • Natural Wood Cellulose Knits',
      category: 'Rayon / Viscose',
      tag: 'Ultra Fluid Drape',
      stock: 'Ready Stock Rolls (±25 kg/roll)',
      gsm: '160 - 210 GSM',
      width: '60" Open Width (152 cm Finish)',
      composition: '100% Pure Rayon Viscose / Modal Blend',
      yarnCount: 'Ne 30s/1, Ne 40s/1 Fine Ring-Spun',
      knitStructure: 'Fluid Single Jersey & Slub Drape',
      finish: 'Silky Soft Luster, Enzyme Washed',
      shrinkage: '< 4.0%',
      linearYield: '~3.2 - 3.5 Linear Meters / Kg',
      desc: 'Bahan baku tekstil selulosa kayu alami yang diregenerasi menjadi serat filamen halus. Memiliki daya jatuh (drape) yang sangat anggun dan mengalir laksana sutra, penyerapan kelembapan 50% lebih tinggi dari katun standar, serta sensasi dingin lembut yang sangat diminati pasar tekstil tropis.',
      shadesCount: '28+ Jewel & Tropical Earth Tones',
      image: 'assets/images/rayon_viscose.jpg'
    },
    'linen': {
      title: 'Linen • Natural Flax Fiber & Cotton-Linen Knits',
      category: 'Linen',
      tag: 'Bast Natural Fiber',
      stock: 'Ready Stock & Custom Batch',
      gsm: '170 - 280 GSM',
      width: '54" - 58" Open Width',
      composition: '100% Flax Linen / 70% Linen - 30% Cotton Blend',
      yarnCount: '14s, 21s, 28s Lea Natural Bast Yarn',
      knitStructure: 'Textured Slub Knit & Open Weave',
      finish: 'Aero Soft Washed, Natural Slub Appearance',
      shrinkage: '< 3.8%',
      linearYield: '~2.8 - 3.1 Linear Meters / Kg',
      desc: 'Material serat bast tertua di dunia yang dipintal dari tanaman rami flax alami. Memiliki serat berongga alami yang memberikan sirkulasi udara luar biasa dingin, kekuatan tarik 3x lebih kuat dibanding katun, tekstur slub alami yang khas, dan semakin lembut seiring proses pencucian berulang.',
      shadesCount: '16+ Muted Raw & Natural Earth Colors',
      image: 'assets/images/linen_raw.jpg'
    },
    'nylon-spandex': {
      title: 'Nylon dan Spandex • High-Tenacity Elastic Stretch',
      category: 'Nylon dan Spandex',
      tag: '360° Elastic Recovery',
      stock: 'Ready Stock Rolls (±25 kg/roll)',
      gsm: '180 - 260 GSM',
      width: '60" Open Width (152 cm)',
      composition: '82% Polyamide Nylon 6.6, 18% DuPont Spandex',
      yarnCount: '40D/34F Nylon + 40D/70D High-Tension Spandex',
      knitStructure: '4-Way Stretch Warp/Circular Knit Interlock',
      finish: 'Anti-Chlorine, UV Sun-Block 50+, Silky Soft Touch',
      shrinkage: '< 2.0% (Stabilized Memory Heat-Set)',
      linearYield: '~2.8 - 3.1 Linear Meters / Kg',
      desc: 'Bahan baku komposit rajut poliamida nilon berserat mikro dipadu benang elastane spandex berdensitas tinggi. Memberikan elastisitas 4-arah dengan daya pulih elastis instan (zero sagging), ketahanan gesek abrasif superior, perlindungan sinar UV, dan daya tahan terhadap klorin air kolam/laut.',
      shadesCount: '22+ Deep Matte & Vibrant Colors',
      image: 'assets/images/nylon_spandex.jpg'
    },
    'yarn': {
      title: 'Benang (Yarn) • Knitting & Weaving Cones',
      category: 'Benang (Yarn)',
      tag: 'Spun Yarn Cones & Bales',
      stock: 'Ready Stock Cones (±1.89 kg/cone)',
      gsm: 'Ne 20s/1 s.d. Ne 40s/2 (TFO)',
      width: 'Standard Paper Cones (24 Cones / Box)',
      composition: '100% Combed Cotton, Bamboo, Rayon & DTY Poly',
      yarnCount: 'Ne 20s/1, 24s/1, 30s/1, 40s/1, 40s/2, DTY 75D',
      knitStructure: 'Ring-Spun, Compact Spun, Open-End & Filament',
      finish: 'Knitting Waxed, Electronic Yarn Cleared, Low Hairiness',
      shrinkage: 'Standard Mill Specification',
      linearYield: '~50,800 Meters / Cone (Ne 30s/1)',
      desc: 'Pasokan benang pintal berkualitas tinggi pada kelongsong cone untuk pabrik rajut (knitting) dan tenun (weaving). Diproses dengan teknologi pemintalan modern berbulu minim (low hairiness), tensi benang seragam, bebas sambungan knot kasar, dan telah di-waxing untuk kelancaran jalur mesin rajut kecepatan tinggi.',
      shadesCount: 'Raw White (Greige) & Reactive Dyed Cones',
      image: 'assets/images/yarn_cones.jpg'
    }
  };

  // Filter Tabs Handler
  const tabButtons = document.querySelectorAll('.tab-btn');
  const fabricCards = document.querySelectorAll('.fabric-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      fabricCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filter === 'all' || cardCategory === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // ==========================================
  // 5. Technical Spec Sheet Modal
  // ==========================================
  const modalOverlay = document.getElementById('fabricModal');
  const modalClose = document.getElementById('modalClose');
  const modalImg = document.getElementById('modalImg');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalGsm = document.getElementById('modalGsm');
  const modalWidth = document.getElementById('modalWidth');
  const modalComposition = document.getElementById('modalComposition');
  const modalShrinkage = document.getElementById('modalShrinkage');
  const modalKnitStructure = document.getElementById('modalKnitStructure');
  const modalLinearYield = document.getElementById('modalLinearYield');
  const modalWaBtn = document.getElementById('modalWaBtn');

  const openFabricModal = (key) => {
    const data = rawMaterialData[key];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalBadge.textContent = `${data.category} • ${data.stock}`;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalGsm.textContent = data.gsm;
    modalWidth.textContent = data.width;
    modalComposition.textContent = data.composition;
    modalShrinkage.textContent = data.shrinkage;
    if (modalKnitStructure) modalKnitStructure.textContent = data.knitStructure;
    if (modalLinearYield) modalLinearYield.textContent = `${data.knitStructure} (${data.linearYield})`;

    // Prefill WhatsApp link with exact raw material specs
    const waText = encodeURIComponent(
      `Halo PT Duta Abadi Sentosa (Dutatex Bali),\nSaya ingin menanyakan informasi teknis bahan baku tekstil:\n• Kategori Bahan: *${data.title}*\n• Gramasi/Nomor: ${data.gsm}\n• Lebar/Format: ${data.width}\n• Komposisi: ${data.composition}\n\nMohon info ketersediaan stock roll/cone di gudang Denpasar, kartu warna, dan penawaran harga grosir per kg. Terima kasih!`
    );
    modalWaBtn.href = `https://wa.me/62881037546829?text=${waText}`;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Bind click on cards
  document.querySelectorAll('.btn-inspect-spec').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-fabric-key');
      openFabricModal(key);
    });
  });

  // ==========================================
  // 6. Professional Textile Raw Material Converter
  // ==========================================
  const rawPills = document.querySelectorAll('.raw-pill');
  const weightSlider = document.getElementById('weightSlider');
  const weightDisplay = document.getElementById('weightDisplay');
  const resKg = document.getElementById('calcResKg');
  const resRolls = document.getElementById('calcResRolls');
  const resMeters = document.getElementById('calcResMeters');
  const resYards = document.getElementById('calcResYards');
  const resLinearYield = document.getElementById('calcResYield');
  const resMaterialName = document.getElementById('calcMaterialName');
  const calcWaBtn = document.getElementById('calcWaBtn');

  // Exact technical specs for linear length formula:
  const rawMaterialSpecs = {
    'cotton': {
      name: 'Kapas (Cotton) • Combed 30s Single Jersey',
      gsm: 155,
      yieldPerKg: 3.12,
      format: '42" Tubular (±25 kg/roll)',
      unitType: 'Roll Kain'
    },
    'polyester': {
      name: 'Polyester • Micro-Interlock (75D/72F)',
      gsm: 180,
      yieldPerKg: 3.45,
      format: '60" Open Width (±25 kg/roll)',
      unitType: 'Roll Kain'
    },
    'rayon': {
      name: 'Rayon / Viscose • Natural Wood Cellulose',
      gsm: 190,
      yieldPerKg: 3.37,
      format: '60" Open Width (±25 kg/roll)',
      unitType: 'Roll Kain'
    },
    'linen': {
      name: 'Linen • Natural Flax Fiber / Blend',
      gsm: 210,
      yieldPerKg: 2.95,
      format: '56" Open Width (±25 kg/roll)',
      unitType: 'Roll Kain'
    },
    'nylon-spandex': {
      name: 'Nylon dan Spandex • 4-Way Technical Stretch',
      gsm: 220,
      yieldPerKg: 2.98,
      format: '60" Open Width (±25 kg/roll)',
      unitType: 'Roll Kain'
    },
    'yarn': {
      name: 'Benang (Yarn) • Cones Ne 30s/1 Knitting Cones',
      gsm: 0,
      yieldPerKg: 50.8, // km per kg equivalent
      format: 'Cones (±1.89 kg/cone / 24 cones per box)',
      unitType: 'Box Benang'
    }
  };

  let activeMaterial = 'cotton';
  let activeWeightKg = 100; // default 100 kg

  const updateRawCalculator = () => {
    if (!weightDisplay || !resMaterialName || !resKg || !resRolls || !calcWaBtn) return;
    weightDisplay.textContent = `${activeWeightKg} Kg`;

    const spec = rawMaterialSpecs[activeMaterial] || rawMaterialSpecs['cotton'];
    resMaterialName.textContent = spec.name;

    if (activeMaterial === 'yarn') {
      const boxes = (activeWeightKg / 45.36).toFixed(1); // 24 cones x 1.89 kg = ~45.36 kg
      const totalCones = Math.round(activeWeightKg / 1.89);
      resKg.textContent = activeWeightKg;
      resRolls.textContent = `${boxes} Box (${totalCones} Cones)`;
      if (resMeters) resMeters.textContent = `± ${(activeWeightKg * 50800).toLocaleString()} m`;
      if (resYards) resYards.textContent = `Ne 30s/1 Knitting Waxed`;
      if (resLinearYield) resLinearYield.textContent = `~50,800 m / kg`;
    } else {
      const rolls = (activeWeightKg / 25).toFixed(1);
      const totalMeters = Math.round(activeWeightKg * spec.yieldPerKg);
      const totalYards = Math.round(totalMeters * 1.09361);

      resKg.textContent = activeWeightKg;
      resRolls.textContent = `${rolls} Roll (±25kg/roll)`;
      if (resMeters) resMeters.textContent = `± ${totalMeters.toLocaleString()} m`;
      if (resYards) resYards.textContent = `± ${totalYards.toLocaleString()} yd`;
      if (resLinearYield) resLinearYield.textContent = `~${spec.yieldPerKg.toFixed(2)} meter / kg`;
    }

    // WhatsApp Direct Raw Material Link
    const waMessage = encodeURIComponent(
      `Halo PT Duta Abadi Sentosa (Dutatex Bali),\nSaya menggunakan Kalkulator Bahan Baku Tekstil di website:\n• Kategori Material: ${spec.name}\n• Kebutuhan Berat: ${activeWeightKg} kg\n• Format Pasokan: ${spec.format}\n\nMohon info ketersediaan stock di gudang Denpasar, kartu warna fisik, dan penawaran harga grosir. Terima kasih!`
    );
    calcWaBtn.href = `https://wa.me/62881037546829?text=${waMessage}`;
  };

  rawPills.forEach(pill => {
    pill.addEventListener('click', () => {
      rawPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeMaterial = pill.getAttribute('data-material');
      updateRawCalculator();
    });
  });

  if (weightSlider) {
    weightSlider.addEventListener('input', (e) => {
      activeWeightKg = parseInt(e.target.value, 10);
      updateRawCalculator();
    });
  }

  // Initialize on load if calculator exists
  if (weightSlider && weightDisplay) {
    updateRawCalculator();
  }

  // ==========================================
  // 7. Raw Material Sourcing Consultation Form
  // ==========================================
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const company = document.getElementById('formName').value;
      const phone = document.getElementById('formPhone').value;
      const materialType = document.getElementById('formCategory').value;
      const orderVolume = document.getElementById('formVolume').value;
      const notes = document.getElementById('formNotes').value;

      const waMsg = encodeURIComponent(
        `Halo PT Duta Abadi Sentosa (Dutatex Bali),\nSaya ingin konsultasi pengadaan bahan baku tekstil:\n• Perusahaan / Sourcing: ${company}\n• No. WhatsApp: ${phone}\n• Jenis Bahan Baku: ${materialType}\n• Estimasi Volume: ${orderVolume}\n• Catatan Spesifikasi: ${notes}\n\nMohon info ketersediaan stock, katalog swatch roll, dan pricelist. Terima kasih!`
      );

      window.open(`https://wa.me/62881037546829?text=${waMsg}`, '_blank');
      inquiryForm.reset();
      alert('Terima kasih! Permintaan bahan baku telah diarahkan ke WhatsApp official Duta Abadi Sentosa.');
    });
  }

  // ==========================================
  // 8. Smooth Scrolling
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
