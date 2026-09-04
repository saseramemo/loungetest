// ============================================================
// LOUNGE MOTION — Main JavaScript
// Semua konfigurasi ada di sini, mudah diedit
// ============================================================

// ============================================================
// 1.  KONFIGURASI NAVBAR
//     Edit di sini untuk menambah/mengubah menu
// ============================================================
const navConfig = [
    { label: 'Motion', href: 'index.html', active: true },
    { label: 'Thumbnail', href: 'thumbnail.html', active: false },
    { label: 'Discord', href: 'https://discord.gg/ya3xwGt7pb', active: false, external: true }
];

// ============================================================
// 2.  KONFIGURASI FOOTER LINKS
//     Report, Feedback, Request
// ============================================================
const footerLinksConfig = [
    { label: 'Report', href: '#' },
    { label: 'Feedback', href: '#' },
    { label: 'Request', href: '#' }
];

// ============================================================
// 3.  KONFIGURASI DATA MOTION (EDIT DI SINI)
//     Tambah / hapus / ubah motion sesuai kebutuhan.
//     Path video: assets/motion/MOTION-1.mp4
// ============================================================
const motionData = [
    { 
        id: 1, 
        name: "3 Slot Inventory", 
        tier: "basic    ", 
        price: 5000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "3 slot inventory pop up berurutan.", 
        tags: ["UI", "INVENTORY"] 
    },
    { 
         id: 2,                                      // ← ubah ID (harus unik)
        name: "Crafting Table Basic",               // ← ubah nama
        tier: "basic",                              // ← free / basic / plus / premium
        price: 7000,                                // ← ubah harga (0 untuk FREE)
        preview: "assets/motion/MOTION-2.mp4",      // ← path file video
        description: "Recipe untuk item apapun di crafting table.", // ← deskripsi
        tags: ["UI", "CRAFTING TABLE"]              // ← ubah tags (bebas) 
    },
    { 
          id: 3, 
        name: "Furnace Smelting", 
        tier: "basic", 
        price: 5000, 
        preview: "assets/motion/MOTION-3.mp4", 
        description: "Smelting apa saja dengan bahan bakar apa saja.", 
        tags: ["UI", "FURNACE"] 
    },
    { 
         id: 4, 
        name: "Enchanting Table", 
        tier: "basic", 
        price: 10000, 
        preview: "assets/motion/MOTION-4.mp4", 
        description: "Max-level (level 30) enchanting.", 
        tags: ["UI", "ENCHANTING TABLE"] 
    },
    { 
        id: 5, 
        name: "Team Victory", 
        tier: "premium", 
        price: 75000, 
        preview: "assets/motion/MOTION-5.mp4", 
        description: "Motion team victory dengan efek konfeti.", 
        tags: ["TEAM", "HAND"] 
    },
    { 
        id: 6, 
        name: "Acacia Theme", 
        tier: "free", 
        price: 0, 
        preview: "assets/motion/MOTION-6.mp4", 
        description: "Tema acacia dengan nuansa hangat.", 
        tags: ["UI", "CRAFTING TABLE"] 
    },
    { 
        id: 7, 
        name: "Nether Portal", 
        tier: "premium", 
        price: 95000, 
        preview: "assets/motion/MOTION-7.mp4", 
        description: "Portal nether dengan efek mistis.", 
        tags: ["UI", "FURNACE"] 
    },
    { 
        id: 8, 
        name: "Enchant Table", 
        tier: "plus", 
        price: 50000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Animasi enchant table dengan glyphs.", 
        tags: ["CHEST", "TEAM"] 
    },
    { 
        id: 9, 
        name: "Potion Brew", 
        tier: "basic", 
        price: 25000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Proses pembuatan potion dengan gelembung.", 
        tags: ["HAND", "UI"] 
    },
    { 
        id: 10, 
        name: "Dragon Fight", 
        tier: "premium", 
        price: 120000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Pertarungan epik melawan Ender Dragon.", 
        tags: ["TEAM", "CRAFTING TABLE"] 
    },
    { 
        id: 11, 
        name: "Village Life", 
        tier: "free", 
        price: 0, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Suasana desa dengan animasi warga.", 
        tags: ["UI", "FURNACE"] 
    },
    { 
        id: 12, 
        name: "Underwater Ruin", 
        tier: "plus", 
        price: 48000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Eksplorasi reruntuhan bawah air.", 
        tags: ["CHEST", "HAND"] 
    },
    { 
        id: 13, 
        name: "Skyblock Start", 
        tier: "basic", 
        price: 18000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Animasi awal di pulau skyblock.", 
        tags: ["CRAFTING TABLE", "TEAM"] 
    },
    { 
        id: 14, 
        name: "Minecart Ride", 
        tier: "plus", 
        price: 38000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Perjalanan minecart dengan pemandangan.", 
        tags: ["UI", "FURNACE"] 
    },
    { 
        id: 15, 
        name: "Elytra Flight", 
        tier: "premium", 
        price: 85000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Terbang dengan elytra melintasi dunia.", 
        tags: ["HAND", "CHEST"] 
    },
    { 
        id: 16, 
        name: "Beacon Light", 
        tier: "basic", 
        price: 22000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Sinar beacon yang menjulang ke langit.", 
        tags: ["TEAM", "UI"] 
    },
    { 
        id: 17, 
        name: "Redstone Contraption", 
        tier: "plus", 
        price: 55000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Kontrapsi redstone dengan gerakan kompleks.", 
        tags: ["CRAFTING TABLE", "FURNACE"] 
    },
    { 
        id: 18, 
        name: "End Poem", 
        tier: "premium", 
        price: 150000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Puisi akhir dengan visual yang mendalam.", 
        tags: ["CHEST", "HAND"] 
    },
    { 
        id: 19, 
        name: "Snowy Tundra", 
        tier: "free", 
        price: 0, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Suasana tundra bersalju yang tenang.", 
        tags: ["UI", "TEAM"] 
    },
    { 
        id: 20, 
        name: "Jungle Temple", 
        tier: "plus", 
        price: 42000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Eksplorasi kuil di dalam hutan.", 
        tags: ["FURNACE", "CRAFTING TABLE"] 
    },
    { 
        id: 21, 
        name: "Ocean Monument", 
        tier: "premium", 
        price: 110000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Monumen bawah laut dengan guardian.", 
        tags: ["HAND", "CHEST"] 
    },
    { 
        id: 22, 
        name: "Bastion Remnant", 
        tier: "basic", 
        price: 30000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Sisa-sisa bastion di nether.", 
        tags: ["TEAM", "UI"] 
    },
    { 
        id: 23, 
        name: "Piglin Trade", 
        tier: "plus", 
        price: 46000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Interaksi trading dengan piglin.", 
        tags: ["CRAFTING TABLE", "FURNACE"] 
    },
    { 
        id: 24, 
        name: "Wither Storm", 
        tier: "premium", 
        price: 200000, 
        preview: "assets/motion/MOTION-1.mp4", 
        description: "Badai wither yang dahsyat.", 
        tags: ["CHEST", "HAND"] 
    }
];

// ============================================================
// 4.  KATEGORI HARGA (mudah diedit)
// ============================================================
const tierConfig = {
    free: { label: 'FREE', min: 0, max: 0 },
    basic: { label: 'BASIC', min: 1000, max: 35000 },
    plus: { label: 'PLUS', min: 36000, max: 50000 },
    premium: { label: 'PREMIUM', min: 50001, max: Infinity }
};

// ============================================================
// 5.  RENDER FUNCTIONS
// ============================================================

// Render Navbar
function renderNav() {
    const container = document.getElementById('navLinks');
    if (!container) return;
    let html = '';
    navConfig.forEach(item => {
        const isActive = item.active ? 'active' : '';
        const target = item.external ? 'target="_blank" rel="noopener"' : '';
        html += `<li><a href="${item.href}" class="${isActive}" ${target}>${item.label}</a></li>`;
    });
    container.innerHTML = html;
}

// Render Footer Links
function renderFooter() {
    const container = document.getElementById('footerLinks');
    if (!container) return;
    let html = '';
    footerLinksConfig.forEach(item => {
        html += `<a href="${item.href}">${item.label}</a>`;
    });
    container.innerHTML = html;
}

// Get all unique tags
function getAllTags(data) {
    const set = new Set();
    data.forEach(m => m.tags.forEach(t => set.add(t)));
    return Array.from(set).sort();
}

// Format price
function formatPrice(price) {
    if (price === 0) return 'FREE';
    return 'Rp' + price.toLocaleString('id-ID');
}

// Render pills
function renderPills(data, activeTag) {
    const wrap = document.getElementById('pillsWrap');
    if (!wrap) return;
    const allTags = getAllTags(data);
    let html = `<button class="pill ${!activeTag ? 'active' : ''}" data-tag="">Semua</button>`;
    allTags.forEach(tag => {
        const isActive = activeTag === tag;
        html += `<button class="pill ${isActive ? 'active' : ''}" data-tag="${tag}">${tag}</button>`;
    });
    wrap.innerHTML = html;

    wrap.querySelectorAll('.pill').forEach(btn => {
        btn.addEventListener('click', function() {
            const tag = this.dataset.tag;
            const params = new URLSearchParams(window.location.search);
            if (tag) params.set('tag', tag);
            else params.delete('tag');
            window.history.replaceState({}, '', '?' + params.toString());
            applyFilters();
        });
    });
}

// Render grid
function renderGrid(data) {
    const grid = document.getElementById('gridMotion');
    if (!grid) return;
    if (data.length === 0) {
        grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#7a7a84; padding:3rem 0;">Tidak ada motion yang ditemukan.</p>`;
        return;
    }

    let html = '';
    data.forEach(m => {
        const tierLabel = tierConfig[m.tier]?.label || m.tier.toUpperCase();
        const priceStr = formatPrice(m.price);

        html += `
            <div class="card-motion" data-id="${m.id}">
                <div class="preview-wrap" onclick="openPreviewModal(${m.id})">
                    <video muted loop playsinline autoplay preload="metadata">
                        <source src="${m.preview}" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <span class="badge-tier ${m.tier}">${tierLabel}</span>
                </div>
                <div class="body-card">
                    <div class="title">${m.name}</div>
                    <div class="desc">${m.description}</div>
                    <div class="tags">
                        ${m.tags.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <div class="price-row">
                        <span class="price">${priceStr}</span>
                        <button class="btn-order" onclick="openPreviewModal(${m.id})">Order</button>
                    </div>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;

    // Video autoplay dengan IntersectionObserver (optimasi performa)
    const videos = grid.querySelectorAll('.preview-wrap video');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.3 });
        
        videos.forEach(vid => {
            observer.observe(vid);
        });
    } else {
        videos.forEach(vid => {
            vid.play().catch(() => {});
        });
    }

    // Klik video untuk play/pause
    grid.querySelectorAll('.preview-wrap video').forEach(vid => {
        vid.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.paused) {
                this.play().catch(() => {});
            } else {
                this.pause();
            }
        });
    });
}

// Pagination
function renderPagination(currentPage, totalPages) {
    const wrap = document.getElementById('pagination');
    if (!wrap) return;
    if (totalPages <= 1) {
        wrap.innerHTML = '';
        return;
    }
    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    wrap.innerHTML = html;
    wrap.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = parseInt(this.dataset.page);
            const params = new URLSearchParams(window.location.search);
            params.set('page', page);
            window.history.replaceState({}, '', '?' + params.toString());
            applyFilters();
        });
    });
}

// ============================================================
// 6.  FILTER, SEARCH, SORT, PAGINATION
// ============================================================

function applyFilters() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('search') || '';
    const tag = params.get('tag') || '';
    const tier = params.get('tier') || 'all';
    const sort = params.get('sort') || 'default';
    const page = parseInt(params.get('page')) || 1;
    const perPage = 24;

    const searchInput = document.getElementById('searchInput');
    const tierFilter = document.getElementById('tierFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (searchInput) searchInput.value = search;
    if (tierFilter) tierFilter.value = tier;
    if (sortFilter) sortFilter.value = sort;

    let filtered = [...motionData];

    if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(m =>
            m.name.toLowerCase().includes(s) ||
            m.description.toLowerCase().includes(s) ||
            m.tags.some(t => t.toLowerCase().includes(s))
        );
    }

    if (tag) {
        filtered = filtered.filter(m => m.tags.includes(tag));
    }

    if (tier !== 'all') {
        filtered = filtered.filter(m => m.tier === tier);
    }

    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / perPage) || 1;
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const pageData = filtered.slice(start, end);

    renderPills(motionData, tag);
    renderGrid(pageData);
    renderPagination(currentPage, totalPages);

    if (currentPage > 1) params.set('page', currentPage);
    else params.delete('page');
    window.history.replaceState({}, '', '?' + params.toString());
}

// ============================================================
// 7.  EVENT LISTENER FILTER
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const tierFilter = document.getElementById('tierFilter');
    const sortFilter = document.getElementById('sortFilter');
    const clearBtn = document.getElementById('clearFilters');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const params = new URLSearchParams(window.location.search);
            if (this.value) params.set('search', this.value);
            else params.delete('search');
            params.delete('page');
            window.history.replaceState({}, '', '?' + params.toString());
            applyFilters();
        });
    }

    if (tierFilter) {
        tierFilter.addEventListener('change', function() {
            const params = new URLSearchParams(window.location.search);
            if (this.value !== 'all') params.set('tier', this.value);
            else params.delete('tier');
            params.delete('page');
            window.history.replaceState({}, '', '?' + params.toString());
            applyFilters();
        });
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            const params = new URLSearchParams(window.location.search);
            if (this.value !== 'default') params.set('sort', this.value);
            else params.delete('sort');
            params.delete('page');
            window.history.replaceState({}, '', '?' + params.toString());
            applyFilters();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            window.history.replaceState({}, '', window.location.pathname);
            if (searchInput) searchInput.value = '';
            if (tierFilter) tierFilter.value = 'all';
            if (sortFilter) sortFilter.value = 'default';
            applyFilters();
        });
    }
});

// ============================================================
// 8.  PREVIEW MODAL (lihat lebih besar + order button)
// ============================================================

function openPreviewModal(id) {
    const motion = motionData.find(m => m.id === id);
    if (!motion) return;

    const modal = document.getElementById('orderModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.textContent = `Preview: ${motion.name}`;

    const tierLabel = tierConfig[motion.tier]?.label || motion.tier.toUpperCase();
    const priceStr = formatPrice(motion.price);

    modalBody.innerHTML = `
        <!-- Preview Video -->
        <div style="aspect-ratio:16/9; background:#0a0a0c; border-radius:8px; overflow:hidden; border:1px solid #1a1a22;">
            <video muted loop playsinline autoplay preload="metadata" style="width:100%; height:100%; object-fit:cover;">
                <source src="${motion.preview}" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <!-- Info Motion -->
        <div style="display:flex; flex-direction:column; gap:0.3rem;">
            <h2 style="font-size:1.4rem; font-weight:700; letter-spacing:-0.01em;">${motion.name}</h2>
            <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                ${motion.tags.map(t => `<span style="font-size:0.6rem; font-weight:500; text-transform:uppercase; letter-spacing:0.03em; padding:0.1rem 0.6rem; border-radius:30px; background:rgba(255,255,255,0.04); border:1px solid #1e1e26; color:#7a7a84;">${t}</span>`).join('')}
            </div>
            <p style="color:#7a7a84; font-size:0.95rem; margin-top:0.2rem;">${motion.description}</p>
            <div style="display:flex; align-items:center; gap:0.5rem; margin-top:0.2rem;">
                <span style="color:#d4a857; font-weight:700; font-size:1.2rem;">${priceStr}</span>
                <span class="badge-tier ${motion.tier}" style="position:static; font-size:0.6rem;">${tierLabel}</span>
            </div>
        </div>

        <hr style="border-color:#1a1a22; margin:0.2rem 0;" />

        <!-- Tombol Order ke motion-N.html -->
        <button class="btn btn-primary" id="goToOrderBtn" style="width:100%;">
            <i class="fas fa-shopping-cart"></i> Order Motion
        </button>
        <p style="text-align:center; font-size:0.7rem; color:#5a5a64; margin-top:0.2rem;">
            Anda akan diarahkan ke halaman order untuk melakukan konfigurasi
        </p>
    `;

    // Event: tombol Order → redirect ke motion-N.html
    const orderBtn = document.getElementById('goToOrderBtn');
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            window.location.href = 'motion-' + motion.id + '.html';
        });
    }

    // Autoplay video di preview modal
    const modalVideo = modalBody.querySelector('video');
    if (modalVideo) {
        modalVideo.play().catch(() => {});
        modalVideo.addEventListener('click', function() {
            if (this.paused) this.play().catch(() => {});
            else this.pause();
        });
    }

    modal.classList.add('open');
}

// ============================================================
// 9.  CLOSE MODAL
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('orderModal');

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            if (modalOverlay) {
                modalOverlay.classList.remove('open');
                const video = modalOverlay.querySelector('video');
                if (video) video.pause();
            }
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('open');
                const video = this.querySelector('video');
                if (video) video.pause();
            }
        });
    }
});

// ============================================================
// 10. INIT
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    renderNav();
    renderFooter();

    const params = new URLSearchParams(window.location.search);
    if (!params.has('page')) params.set('page', '1');
    window.history.replaceState({}, '', '?' + params.toString());
    applyFilters();
});