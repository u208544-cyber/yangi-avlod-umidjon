// ORBITA MOBILE — Pure Vanilla ES6+ JavaScript
// 3D Smartphone Showcase, Interactive Catalog, Cart & Automatic Telegram Order Delivery

const TELEGRAM_BOT_TOKEN = '9192827226:AAEIaAct_c-YlZgXQIkKXVQ3RjoAAqhOvTo';
const TELEGRAM_CHANNEL_ID = '-1003878917898';

const PHONES = [
  {
    id: 'titan-16-pro',
    brand: 'Aether',
    name: 'Aether 16 Pro Titanium',
    category: 'flagship',
    categoryLabel: 'Flagman',
    basePrice: 14950000,
    stockLabel: 'Omborda mavjud',
    image: '/src/assets/images/phone_iphone_16_pro_1795172091067.jpg',
    summary: '5-darajali titan korpus, 120Hz LTPO OLED ekran va 5x periskop kamera tizimi.',
    description:
      'Aerokosmik titan qotishmasidan ishlangan korpus, 3nm flagman protsessor va 4K 120 kadr/s ProRes video suratga olish imkoniyati.',
    storages: [
      { label: '256 GB', delta: 0 },
      { label: '512 GB', delta: 2400000 },
      { label: '1 TB', delta: 4800000 },
    ],
    colors: [
      { name: 'Qumli Titan', hex: '#C6A87C', edge: '#E5CFA8' },
      { name: 'Qora Titan', hex: '#23262D', edge: '#464C59' },
      { name: 'Tabiiy Titan', hex: '#7D7B76', edge: '#A4A19B' },
    ],
    specs: [
      { k: 'Ekran', v: '6.9" OLED 120Hz' },
      { k: 'Protsessor', v: 'A18 Pro 3nm' },
      { k: 'Kamera', v: '48MP + 48MP + 12MP' },
      { k: 'Batareya', v: '4685 mAs · 45W' },
    ],
  },
  {
    id: 'apex-s25-ultra',
    brand: 'Apex',
    name: 'Apex Titan X Ultra',
    category: 'flagship',
    categoryLabel: 'Flagman',
    basePrice: 14200000,
    stockLabel: 'Omborda mavjud',
    image: '/src/assets/images/phone_galaxy_s25_ultra_1795172089964.jpg',
    summary: 'O‘rnatilgan S-Pen qalami, 200MP asosiy sensor va porlashga qarshi Gorilla Armor oynasi.',
    description:
      'Aniq geometrik qirralar, S-Pen bilan tezkor eslatmalar va 100x kosmik zum imkoniyatiga ega biznes-klass flagmani.',
    storages: [
      { label: '256 GB', delta: 0 },
      { label: '512 GB', delta: 1950000 },
      { label: '1 TB', delta: 4100000 },
    ],
    colors: [
      { name: 'Obsidian Qora', hex: '#1B1E24', edge: '#3B414D' },
      { name: 'Kumush Titan', hex: '#88909C', edge: '#B0B8C4' },
      { name: 'Kobalt Ko‘k', hex: '#2B4268', edge: '#4B6FA8' },
    ],
    specs: [
      { k: 'Ekran', v: '6.8" AMOLED 2X' },
      { k: 'Protsessor', v: 'Snapdragon 8 Elite' },
      { k: 'Kamera', v: '200MP Quad OIS' },
      { k: 'Batareya', v: '5000 mAs · S-Pen' },
    ],
  },
  {
    id: 'prism-9-pro',
    brand: 'Prism',
    name: 'Prism 9 Pro Platinum',
    category: 'camera',
    categoryLabel: 'Kamera Pro',
    basePrice: 11850000,
    stockLabel: 'Cheklangan partiya',
    image: '/src/assets/images/phone_pixel_9_pro_1795172090881.jpg',
    summary: 'Platina kamera paneli, tabiiy rang uzatish algoritmi va 7 yillik tizim yangilanishlari.',
    description:
      'Tungi portretlar va HDR video uchun maxsus yaratilgan hisoblash fotografiyasi yetakchisi.',
    storages: [
      { label: '256 GB', delta: 0 },
      { label: '512 GB', delta: 1750000 },
    ],
    colors: [
      { name: 'Platina Kulrang', hex: '#8F959E', edge: '#BCC2CC' },
      { name: 'Obsidian', hex: '#1D2026', edge: '#3E434F' },
    ],
    specs: [
      { k: 'Ekran', v: '6.7" Super Actua' },
      { k: 'Protsessor', v: 'Tensor G4 Titan' },
      { k: 'Kamera', v: '50MP + 48MP 5x' },
      { k: 'Batareya', v: '5060 mAs · 37W' },
    ],
  },
  {
    id: 'aura-15-ultra',
    brand: 'Aura',
    name: 'Aura 15 Ultra Optics',
    category: 'camera',
    categoryLabel: 'Kamera Pro',
    basePrice: 13400000,
    stockLabel: 'Omborda mavjud',
    image: '/src/assets/images/phone_xiaomi_15_ultra_1795172091062.jpg',
    summary: '1 dyuymli Summicron optik linza, teksturaviy charm orqa panel va 90W tezkor quvvatlash.',
    description:
      'Professional fotoapparat hissini beruvchi aylanma linza halqasi va ikki bosqichli suratga olish tugmasi bilan.',
    storages: [
      { label: '256 GB', delta: 0 },
      { label: '512 GB', delta: 1800000 },
      { label: '1 TB', delta: 3600000 },
    ],
    colors: [
      { name: 'Qora Charm', hex: '#1E1F22', edge: '#636873' },
      { name: 'Kumush Xrom', hex: '#6F7580', edge: '#A4ABB8' },
    ],
    specs: [
      { k: 'Ekran', v: '6.73" 2K AMOLED' },
      { k: 'Protsessor', v: 'Snapdragon 8 Elite' },
      { k: 'Kamera', v: '1" 50MP + 200MP' },
      { k: 'Batareya', v: '5410 mAs · 90W' },
    ],
  },
  {
    id: 'fold-z6-cobalt',
    brand: 'Vertex',
    name: 'Vertex Fold Z6 Cobalt',
    category: 'foldable',
    categoryLabel: 'Buklanadigan',
    basePrice: 18900000,
    stockLabel: 'Omborda mavjud',
    image: '/src/assets/images/phone_fold_z6_1795172090057.jpg',
    summary: '7.6 dyuymli buklanadigan ichki AMOLED ekran, suvdan IP48 himoya va ko‘p oynali ish rejimi.',
    description:
      'Cho‘ntakda smartfon, ochilganda esa planshet vazifasini bajaruvchi eng yupqa titan sharnirli buklanadigan flagman.',
    storages: [
      { label: '512 GB', delta: 0 },
      { label: '1 TB', delta: 2900000 },
    ],
    colors: [
      { name: 'Kobalt Ko‘k', hex: '#273E63', edge: '#4B71AD' },
      { name: 'Kumush Soyali', hex: '#767D8A', edge: '#A7B0C0' },
    ],
    specs: [
      { k: 'Ekran', v: '7.6" Fold AMOLED' },
      { k: 'Protsessor', v: 'Snapdragon 8 Gen 3' },
      { k: 'Qalinlik', v: '5.6 mm ochilganda' },
      { k: 'Batareya', v: '4400 mAs · Dual' },
    ],
  },
  {
    id: 'aeterna-glass-3',
    brand: 'Aeterna',
    name: 'Aeterna Transparent 3',
    category: 'camera',
    categoryLabel: 'Kamera Pro',
    basePrice: 8650000,
    stockLabel: 'Omborda mavjud',
    image: '/src/assets/images/phone_nothing_3_1795172090332.jpg',
    summary: 'Shaffof tutunli shisha korpus, mis simsiz quvvatlash g‘altagi va toza minimalist tizim.',
    description:
      'Ichki alyuminiy komponentlar va yorug‘lik chiziqlari ko‘rinib turadigan noyob sanoat dizayni.',
    storages: [
      { label: '256 GB', delta: 0 },
      { label: '512 GB', delta: 1300000 },
    ],
    colors: [
      { name: 'Tutunli Qora', hex: '#21252D', edge: '#5A6170' },
      { name: 'Oq Shaffof', hex: '#C6CBD4', edge: '#E5E8EE' },
    ],
    specs: [
      { k: 'Ekran', v: '6.7" LTPO OLED' },
      { k: 'Protsessor', v: 'Snapdragon 8s Gen 3' },
      { k: 'Kamera', v: '50MP Dual OIS' },
      { k: 'Batareya', v: '5000 mAs · 50W' },
    ],
  },
];

// ==========================================================================
// Application State
// ==========================================================================

const state = {
  filterCategory: 'all',
  searchQuery: '',
  heroPhoneId: PHONES[0].id,
  modalPhoneId: null,
  modalColorIdx: 0,
  modalStorageIdx: 0,
  cart: loadCartFromStorage(),
};

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem('orbita_cart_v1');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('orbita_cart_v1', JSON.stringify(state.cart));
  } catch {
    // Storage unavailable
  }
}

function formatUZS(amount) {
  const formatted = String(Math.round(amount)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${formatted} so'm`;
}

function handleImgError(imgEl) {
  imgEl.style.opacity = '0';
  if (imgEl.parentElement) {
    imgEl.parentElement.style.background =
      'radial-gradient(circle at 30% 25%, rgba(59,130,246,0.28), #0d1017 70%)';
  }
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ==========================================================================
// Reusable 3D Drag & Angle Rig Controller
// ==========================================================================

function attach3DRigController(stageEl, rigEl, glareEl, initialRot = { x: 7, y: -24 }) {
  const rot = { x: initialRot.x, y: initialRot.y };
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let baseX = rot.x;
  let baseY = rot.y;

  function applyTransform() {
    rigEl.style.transform = `rotateX(${rot.x.toFixed(2)}deg) rotateY(${rot.y.toFixed(2)}deg)`;
    if (glareEl) {
      const shiftX = Math.max(-35, Math.min(35, rot.y * 0.45));
      const shiftY = Math.max(-25, Math.min(25, rot.x * 0.45));
      glareEl.style.transform = `translateX(${shiftX}%) translateY(${shiftY}%)`;
    }
  }

  function stopAutoSpin() {
    rigEl.classList.remove('is-auto-spinning');
  }

  stageEl.addEventListener('pointerdown', (e) => {
    dragging = true;
    stopAutoSpin();
    rigEl.classList.add('is-dragging');
    startX = e.clientX;
    startY = e.clientY;
    baseX = rot.x;
    baseY = rot.y;
    stageEl.setPointerCapture(e.pointerId);
  });

  stageEl.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    rot.y = baseY + dx * 0.55;
    rot.x = Math.max(-42, Math.min(42, baseX - dy * 0.35));
    applyTransform();
  });

  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    rigEl.classList.remove('is-dragging');
    try {
      stageEl.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer already released
    }
  }

  stageEl.addEventListener('pointerup', endDrag);
  stageEl.addEventListener('pointercancel', endDrag);

  applyTransform();

  return {
    setAngle(preset) {
      if (preset === 'auto') {
        rigEl.style.transform = '';
        rigEl.classList.add('is-auto-spinning');
        return;
      }
      stopAutoSpin();
      if (preset === 'front') {
        rot.x = 2;
        rot.y = 0;
      } else if (preset === 'iso') {
        rot.x = 7;
        rot.y = -24;
      } else if (preset === 'back') {
        rot.x = 4;
        rot.y = 180;
      }
      applyTransform();
    },
    setColor(colorObj) {
      rigEl.style.setProperty('--phone-frame-color', colorObj.hex);
      rigEl.style.setProperty('--phone-frame-edge', colorObj.edge);
      rigEl.style.setProperty(
        '--phone-back-bg',
        `linear-gradient(155deg, ${colorObj.hex} 0%, #0d1016 100%)`
      );
    },
  };
}

// ==========================================================================
// Hero 3D Stage Initialization
// ==========================================================================

const heroStageEl = document.getElementById('hero-3d-stage');
const heroRigEl = document.getElementById('hero-phone-rig');
const heroGlareEl = document.getElementById('hero-glass-glare');
const heroRigController = attach3DRigController(heroStageEl, heroRigEl, heroGlareEl, { x: 7, y: -24 });

function updateHeroPhone(phoneId) {
  const phone = PHONES.find((p) => p.id === phoneId) || PHONES[0];
  state.heroPhoneId = phone.id;

  const img = document.getElementById('hero-phone-img');
  const label = document.getElementById('hero-phone-label');
  const backBrand = document.getElementById('hero-back-brand');

  img.onerror = () => handleImgError(img);
  img.style.opacity = '1';
  img.src = phone.image;
  img.alt = phone.name;
  label.textContent = phone.name;
  backBrand.textContent = phone.brand.toUpperCase();
  heroRigController.setColor(phone.colors[0]);

  document.querySelectorAll('.model-switch-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.phoneId === phone.id);
  });
}

function renderHeroSwitcher() {
  const switcher = document.getElementById('hero-model-switcher');
  const featured = PHONES.slice(0, 3);
  switcher.innerHTML = featured
    .map(
      (p) => `
      <button type="button" class="model-switch-btn ${p.id === state.heroPhoneId ? 'active' : ''}" data-phone-id="${p.id}">
        ${escapeHTML(p.name)}
      </button>
    `
    )
    .join('');

  switcher.querySelectorAll('.model-switch-btn').forEach((btn) => {
    btn.addEventListener('click', () => updateHeroPhone(btn.dataset.phoneId));
  });
}

document.querySelectorAll('[data-angle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-angle]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    heroRigController.setAngle(btn.dataset.angle);
  });
});

document.getElementById('hero-inspect-btn').addEventListener('click', () => {
  openProductModal(state.heroPhoneId);
});

function updateHeroClock() {
  const clockEl = document.getElementById('hero-phone-clock');
  if (!clockEl) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  clockEl.textContent = `${hh}:${mm}`;
}

// ==========================================================================
// Catalog Rendering & 3D Card Tilt Physics
// ==========================================================================

function renderCatalog() {
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('catalog-empty');
  const query = state.searchQuery.trim().toLowerCase();

  const filtered = PHONES.filter((phone) => {
    const matchesCat = state.filterCategory === 'all' || phone.category === state.filterCategory;
    const matchesQuery =
      !query ||
      phone.name.toLowerCase().includes(query) ||
      phone.brand.toLowerCase().includes(query) ||
      phone.summary.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  grid.innerHTML = filtered
    .map(
      (phone) => `
      <article class="product-card" data-phone-id="${phone.id}">
        <div class="card-3d-media-wrap" data-open-modal="${phone.id}">
          <img
            src="${phone.image}"
            alt="${escapeHTML(phone.name)}"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
          <div class="card-glare"></div>
          <span class="card-3d-trigger-overlay">3D Ko'rish</span>
        </div>

        <div class="card-meta-line">
          <span>${escapeHTML(phone.brand)}</span>
          <span aria-hidden="true">·</span>
          <span>${escapeHTML(phone.categoryLabel)}</span>
          <span aria-hidden="true">·</span>
          <span>${escapeHTML(phone.storages[0].label)}</span>
        </div>

        <h3 class="card-title">${escapeHTML(phone.name)}</h3>
        <p class="card-summary">${escapeHTML(phone.summary)}</p>

        <div class="card-price-row">
          <span class="card-price tabular-nums">${formatUZS(phone.basePrice)}</span>
          <span class="card-stock-text">${escapeHTML(phone.stockLabel)}</span>
        </div>

        <div class="card-actions">
          <button type="button" class="btn-secondary" data-open-modal="${phone.id}">3D Ko'rish</button>
          <button type="button" class="btn-primary" data-quick-add="${phone.id}">Savatga</button>
        </div>
      </article>
    `
    )
    .join('');

  // Attach 3D tilt + light glare on every product card
  grid.querySelectorAll('.card-3d-media-wrap').forEach((mediaBox) => {
    const glare = mediaBox.querySelector('.card-glare');
    mediaBox.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const rect = mediaBox.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      const tiltY = ((xPct - 50) / 50) * 9;
      const tiltX = ((50 - yPct) / 50) * 9;
      mediaBox.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(14px)`;
      if (glare) {
        glare.style.setProperty('--glare-x', `${xPct.toFixed(1)}%`);
        glare.style.setProperty('--glare-y', `${yPct.toFixed(1)}%`);
      }
    });

    mediaBox.addEventListener('pointerleave', () => {
      mediaBox.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });

  grid.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => handleImgError(img));
  });

  grid.querySelectorAll('[data-open-modal]').forEach((el) => {
    el.addEventListener('click', () => openProductModal(el.dataset.openModal));
  });

  grid.querySelectorAll('[data-quick-add]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const phone = PHONES.find((p) => p.id === btn.dataset.quickAdd);
      if (phone) {
        addToCart(phone, 0, 0);
        showToast(`${phone.name} savatga qo'shildi`);
      }
    });
  });
}

document.querySelectorAll('#category-filters .filter-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    state.filterCategory = tab.dataset.category;
    document.querySelectorAll('#category-filters .filter-tab').forEach((t) => {
      const active = t === tab;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
    });
    renderCatalog();
  });
});

document.getElementById('catalog-search').addEventListener('input', (e) => {
  state.searchQuery = e.target.value;
  renderCatalog();
});

document.getElementById('reset-filters-btn').addEventListener('click', () => {
  state.filterCategory = 'all';
  state.searchQuery = '';
  document.getElementById('catalog-search').value = '';
  document.querySelectorAll('#category-filters .filter-tab').forEach((t) => {
    const active = t.dataset.category === 'all';
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', String(active));
  });
  renderCatalog();
});

// ==========================================================================
// 3D Product Configurator Modal
// ==========================================================================

const productModalEl = document.getElementById('product-modal');
const modalStageEl = document.getElementById('modal-3d-stage');
const modalRigEl = document.getElementById('modal-phone-rig');
const modalGlareEl = document.getElementById('modal-glass-glare');
const modalRigController = attach3DRigController(modalStageEl, modalRigEl, modalGlareEl, { x: 7, y: -24 });

function openProductModal(phoneId) {
  const phone = PHONES.find((p) => p.id === phoneId);
  if (!phone) return;

  state.modalPhoneId = phone.id;
  state.modalColorIdx = 0;
  state.modalStorageIdx = 0;

  renderModalContent();

  document.querySelectorAll('[data-modal-angle]').forEach((b) => {
    b.classList.toggle('active', b.dataset.modalAngle === 'iso');
  });
  modalRigController.setAngle('iso');

  productModalEl.hidden = false;
  productModalEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  productModalEl.hidden = true;
  productModalEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderModalContent() {
  const phone = PHONES.find((p) => p.id === state.modalPhoneId);
  if (!phone) return;

  const selectedColor = phone.colors[state.modalColorIdx] || phone.colors[0];
  const selectedStorage = phone.storages[state.modalStorageIdx] || phone.storages[0];
  const finalPrice = phone.basePrice + selectedStorage.delta;

  document.getElementById('modal-phone-img').src = phone.image;
  document.getElementById('modal-phone-img').alt = phone.name;
  document.getElementById('modal-back-brand').textContent = phone.brand.toUpperCase();
  document.getElementById('modal-phone-meta').textContent = `${phone.brand} · ${phone.categoryLabel} · ${phone.stockLabel}`;
  document.getElementById('modal-phone-title').textContent = phone.name;
  document.getElementById('modal-phone-price').textContent = formatUZS(finalPrice);
  document.getElementById('modal-phone-desc').textContent = phone.description;
  document.getElementById('modal-selected-color-name').textContent = selectedColor.name;

  modalRigController.setColor(selectedColor);

  const swatchesEl = document.getElementById('modal-color-swatches');
  swatchesEl.innerHTML = phone.colors
    .map(
      (c, idx) => `
      <button
        type="button"
        class="color-swatch-btn ${idx === state.modalColorIdx ? 'active' : ''}"
        aria-label="${escapeHTML(c.name)}"
        data-color-idx="${idx}"
      >
        <span style="background: ${c.hex};"></span>
      </button>
    `
    )
    .join('');

  swatchesEl.querySelectorAll('[data-color-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.modalColorIdx = Number(btn.dataset.colorIdx);
      renderModalContent();
    });
  });

  const storagesEl = document.getElementById('modal-storage-options');
  storagesEl.innerHTML = phone.storages
    .map(
      (s, idx) => `
      <button
        type="button"
        class="storage-btn ${idx === state.modalStorageIdx ? 'active' : ''}"
        data-storage-idx="${idx}"
      >
        ${escapeHTML(s.label)}
      </button>
    `
    )
    .join('');

  storagesEl.querySelectorAll('[data-storage-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.modalStorageIdx = Number(btn.dataset.storageIdx);
      renderModalContent();
    });
  });

  const specsGrid = document.getElementById('modal-specs-grid');
  specsGrid.innerHTML = phone.specs
    .map(
      (sp) => `
      <div class="spec-cell">
        <span class="spec-cell-k">${escapeHTML(sp.k)}</span>
        <span class="spec-cell-v">${escapeHTML(sp.v)}</span>
      </div>
    `
    )
    .join('');
}

document.querySelectorAll('[data-modal-angle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-modal-angle]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    modalRigController.setAngle(btn.dataset.modalAngle);
  });
});

document.getElementById('close-product-modal').addEventListener('click', closeProductModal);
productModalEl.addEventListener('click', (e) => {
  if (e.target === productModalEl) closeProductModal();
});

document.getElementById('modal-add-cart-btn').addEventListener('click', () => {
  const phone = PHONES.find((p) => p.id === state.modalPhoneId);
  if (!phone) return;
  addToCart(phone, state.modalColorIdx, state.modalStorageIdx);
  closeProductModal();
  showToast(`${phone.name} savatga qo'shildi`);
});

document.getElementById('modal-buy-now-btn').addEventListener('click', () => {
  const phone = PHONES.find((p) => p.id === state.modalPhoneId);
  if (!phone) return;
  addToCart(phone, state.modalColorIdx, state.modalStorageIdx);
  closeProductModal();
  openCartDrawer(true);
});

// ==========================================================================
// Shopping Cart & Slide-Over Drawer
// ==========================================================================

const cartDrawerEl = document.getElementById('cart-drawer');
const cartViewEl = document.getElementById('cart-view');
const checkoutFormEl = document.getElementById('checkout-form');
const orderSuccessEl = document.getElementById('order-success-view');
const drawerFooterEl = document.getElementById('cart-drawer-footer');

function addToCart(phone, colorIdx, storageIdx) {
  const color = phone.colors[colorIdx] || phone.colors[0];
  const storage = phone.storages[storageIdx] || phone.storages[0];
  const unitPrice = phone.basePrice + storage.delta;
  const key = `${phone.id}__${color.name}__${storage.label}`;

  const existing = state.cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key,
      id: phone.id,
      name: phone.name,
      image: phone.image,
      color: color.name,
      storage: storage.label,
      price: unitPrice,
      qty: 1,
    });
  }
  saveCartToStorage();
  renderCartUI();
}

function updateCartQty(key, delta) {
  const idx = state.cart.findIndex((item) => item.key === key);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  saveCartToStorage();
  renderCartUI();
}

function getCartTotals() {
  return state.cart.reduce(
    (acc, item) => {
      acc.count += item.qty;
      acc.total += item.price * item.qty;
      return acc;
    },
    { count: 0, total: 0 }
  );
}

function renderCartUI() {
  const { count, total } = getCartTotals();
  document.getElementById('header-cart-count').textContent = String(count);
  document.getElementById('cart-total-price').textContent = formatUZS(total);
  document.getElementById('checkout-items-count').textContent = String(count);
  document.getElementById('checkout-summary-total').textContent = formatUZS(total);

  const listEl = document.getElementById('cart-items-list');
  const emptyEl = document.getElementById('cart-empty-state');
  const proceedBtn = document.getElementById('proceed-checkout-btn');

  if (state.cart.length === 0) {
    listEl.innerHTML = '';
    emptyEl.hidden = false;
    proceedBtn.disabled = true;
    proceedBtn.style.opacity = '0.5';
    return;
  }

  emptyEl.hidden = true;
  proceedBtn.disabled = false;
  proceedBtn.style.opacity = '1';

  listEl.innerHTML = state.cart
    .map(
      (item) => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${escapeHTML(item.name)}" referrerpolicy="no-referrer" />
        <div class="cart-item-info">
          <h4 class="cart-item-name">${escapeHTML(item.name)}</h4>
          <span class="cart-item-variant">${escapeHTML(item.color)} · ${escapeHTML(item.storage)}</span>
          <div class="cart-item-bottom">
            <span class="cart-item-price tabular-nums">${formatUZS(item.price * item.qty)}</span>
            <div class="qty-stepper">
              <button type="button" class="qty-btn" data-qty-dec="${escapeHTML(item.key)}" aria-label="Kamaytirish">−</button>
              <span class="qty-val tabular-nums">${item.qty}</span>
              <button type="button" class="qty-btn" data-qty-inc="${escapeHTML(item.key)}" aria-label="Ko'paytirish">+</button>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  listEl.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => handleImgError(img));
  });
  listEl.querySelectorAll('[data-qty-dec]').forEach((btn) => {
    btn.addEventListener('click', () => updateCartQty(btn.dataset.qtyDec, -1));
  });
  listEl.querySelectorAll('[data-qty-inc]').forEach((btn) => {
    btn.addEventListener('click', () => updateCartQty(btn.dataset.qtyInc, 1));
  });
}

function showDrawerView(mode) {
  const titleEl = document.getElementById('drawer-title');
  cartViewEl.hidden = mode !== 'cart';
  drawerFooterEl.hidden = mode !== 'cart';
  checkoutFormEl.hidden = mode !== 'checkout';
  orderSuccessEl.hidden = mode !== 'success';

  if (mode === 'cart') titleEl.textContent = 'Savatingiz';
  else if (mode === 'checkout') titleEl.textContent = 'Buyurtmani rasmiylashtirish';
  else titleEl.textContent = 'Buyurtma tasdiqlandi';
}

function openCartDrawer(goDirectlyToCheckout = false) {
  renderCartUI();
  if (goDirectlyToCheckout && state.cart.length > 0) {
    showDrawerView('checkout');
  } else {
    showDrawerView('cart');
  }
  cartDrawerEl.hidden = false;
  cartDrawerEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawerEl.hidden = true;
  cartDrawerEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('open-cart-btn').addEventListener('click', () => openCartDrawer(false));
document.getElementById('close-cart-drawer').addEventListener('click', closeCartDrawer);
cartDrawerEl.addEventListener('click', (e) => {
  if (e.target === cartDrawerEl) closeCartDrawer();
});

document.getElementById('proceed-checkout-btn').addEventListener('click', () => {
  if (state.cart.length === 0) return;
  showDrawerView('checkout');
});

document.getElementById('back-to-cart-btn').addEventListener('click', () => {
  showDrawerView('cart');
});

document.getElementById('continue-shopping-btn').addEventListener('click', () => {
  closeCartDrawer();
  showDrawerView('cart');
});

// ==========================================================================
// Automatic Telegram Bot Order Delivery
// ==========================================================================

async function postTelegramMessage(chatId, htmlText) {
  const endpoint = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: htmlText,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });
  return response.json();
}

async function sendOrderToTelegram(orderPayload) {
  const itemsText = orderPayload.items
    .map(
      (item, idx) =>
        `${idx + 1}. <b>${escapeHTML(item.name)}</b>\n   • Rang: ${escapeHTML(item.color)} | Xotira: ${escapeHTML(
          item.storage
        )}\n   • Soni: ${item.qty} dona × ${formatUZS(item.price)} = <b>${formatUZS(item.price * item.qty)}</b>`
    )
    .join('\n\n');

  const message = [
    `<b>YANGI BUYURTMA #${escapeHTML(orderPayload.orderId)}</b>`,
    `Sana: ${escapeHTML(orderPayload.createdAt)}`,
    ``,
    `<b>Mijoz ma'lumotlari:</b>`,
    `• Ism: ${escapeHTML(orderPayload.customer.name)}`,
    `• Telefon: ${escapeHTML(orderPayload.customer.phone)}`,
    `• Hudud: ${escapeHTML(orderPayload.customer.region)}`,
    `• Manzil: ${escapeHTML(orderPayload.customer.address)}`,
    `• To'lov turi: ${escapeHTML(orderPayload.customer.payment)}`,
    orderPayload.customer.note ? `• Izoh: ${escapeHTML(orderPayload.customer.note)}` : '',
    ``,
    `<b>Buyurtma tarkibi:</b>`,
    itemsText,
    ``,
    `<b>UMUMIY SUMMA: ${formatUZS(orderPayload.total)}</b>`,
  ]
    .filter((line) => line !== '')
    .join('\n');

  let result = await postTelegramMessage(TELEGRAM_CHANNEL_ID, message);

  // If Telegram expects -100 channel prefix for numeric channel ID, retry automatically
  if (!result.ok && !String(TELEGRAM_CHANNEL_ID).startsWith('-')) {
    const prefixedResult = await postTelegramMessage(`-100${TELEGRAM_CHANNEL_ID}`, message);
    if (prefixedResult.ok) {
      return prefixedResult;
    }
  }

  if (!result.ok) {
    throw new Error(result.description || 'Telegram API xatosi yuz berdi.');
  }

  return result;
}

checkoutFormEl.addEventListener('submit', async (e) => {
  e.preventDefault();

  const feedbackEl = document.getElementById('checkout-feedback');
  const submitBtn = document.getElementById('submit-order-btn');
  feedbackEl.hidden = true;

  const name = document.getElementById('customer-name').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const region = document.getElementById('customer-region').value;
  const address = document.getElementById('customer-address').value.trim();
  const payment = document.getElementById('payment-method').value;
  const note = document.getElementById('customer-note').value.trim();

  if (name.length < 2 || phone.length < 7 || address.length < 4) {
    feedbackEl.textContent = "Iltimos, ism, telefon raqami va yetkazib berish manzilini to'liq kiriting.";
    feedbackEl.hidden = false;
    return;
  }

  if (state.cart.length === 0) {
    feedbackEl.textContent = "Savatingiz bo'sh. Avval smartfon tanlang.";
    feedbackEl.hidden = false;
    return;
  }

  const { total } = getCartTotals();
  const orderId = `UZ-${Math.floor(100000 + Math.random() * 900000)}`;
  const now = new Date();
  const createdAt = `${now.toLocaleDateString('uz-UZ')} ${now.toLocaleTimeString('uz-UZ', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;

  const orderPayload = {
    orderId,
    createdAt,
    customer: { name, phone, region, address, payment, note },
    items: state.cart.map((item) => ({ ...item })),
    total,
  };

  submitBtn.disabled = true;
  submitBtn.textContent = 'Telegramga yuborilmoqda...';

  try {
    await sendOrderToTelegram(orderPayload);

    document.getElementById('confirmed-order-id').textContent = `Buyurtma raqami: #${orderId}`;
    document.getElementById('confirmed-receipt-summary').innerHTML = `
      <div><strong>Mijoz:</strong> ${escapeHTML(name)} (${escapeHTML(phone)})</div>
      <div><strong>Manzil:</strong> ${escapeHTML(region)}, ${escapeHTML(address)}</div>
      <div><strong>To'lov turi:</strong> ${escapeHTML(payment)}</div>
      <div><strong>Mahsulotlar:</strong> ${orderPayload.items
        .map((i) => `${escapeHTML(i.name)} (${escapeHTML(i.storage)}, ${i.qty} ta)`)
        .join(', ')}</div>
      <div><strong>Jami:</strong> ${formatUZS(total)}</div>
    `;

    state.cart = [];
    saveCartToStorage();
    renderCartUI();
    checkoutFormEl.reset();
    showDrawerView('success');
  } catch (err) {
    feedbackEl.textContent = `Buyurtmani Telegramga yuborishda xatolik: ${err.message}. Bot kanalga admin qilib qo'shilganini tekshiring.`;
    feedbackEl.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Buyurtmani tasdiqlash';
  }
});

// ==========================================================================
// Mobile Menu, Keyboard Escape & Toast Helper
// ==========================================================================

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNavPanel = document.getElementById('mobile-nav-panel');

mobileMenuBtn.addEventListener('click', () => {
  const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
  mobileMenuBtn.setAttribute('aria-expanded', String(!expanded));
  mobileNavPanel.hidden = expanded;
});

mobileNavPanel.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileNavPanel.hidden = true;
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!productModalEl.hidden) closeProductModal();
    if (!cartDrawerEl.hidden) closeCartDrawer();
  }
});

let toastTimer = null;
function showToast(message) {
  const toastEl = document.getElementById('toast-banner');
  toastEl.textContent = message;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.hidden = true;
  }, 2600);
}

// ==========================================================================
// Boot Application
// ==========================================================================

renderHeroSwitcher();
updateHeroPhone(PHONES[0].id);
updateHeroClock();
setInterval(updateHeroClock, 30000);
renderCatalog();
renderCartUI();
