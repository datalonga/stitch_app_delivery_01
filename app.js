// ===== DATA =====
const PRODUCTS = [
    {
        id: 1,
        name: "Calabresa Especial",
        desc: "Molho de tomate artesanal, muçarela, calabresa fatiada, cebola e orégano.",
        category: "pizzas",
        priceLabel: "A partir de",
        price: 45.90,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIxJwqfW7MnPsvTkcShjjncoruF2AeKLlk3EXsH340TTsQ5hBwK84gD6VzbGaEXOOKJeGlRLSBVcYKjDU65kboXEs2JTy1WxPBiIoNzt8-9qMjUNrQh_8URf2dBn_FRZiaLFLSa90iGysuACY7uiAVUZUWJriwCZ7DqPoASWa64rZ_Qh8VIiuQ8oXOuz1FyP14hd8nchZEJZXW843LsF-vWrKCxArw9_h8XN3VlW2e_VH_09rTxa1ixn3AWuYGQcqhTinpZIvRdvri",
        isPizza: true,
        sizes: [
            { name: "Média", price: 39.90 },
            { name: "Grande", price: 54.90 }
        ]
    },
    {
        id: 2,
        name: "Portuguesa Família",
        desc: "Presunto, ovos, cebola, ervilha, azeitonas pretas e muçarela selecionada.",
        category: "pizzas",
        priceLabel: "A partir de",
        price: 52.00,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFhLN27U7COG1cLnQLwP_Pby-qitDaOM2IhJCPb6FcJAda_1Jj0t6S_5mL33cCkF9XLBpduN7RxiH9STijUf36_XM2h94pjC90DoyQVXsbFf8miz_PmbLneRL6B23Hr8KyQR8xBxPD_xrMVsQSWfZS9RqYzqQryTQncKPiJeVwR8o11IkWuguR8vBMAxQFW259jAGludd7ES28J9nuIRnmPMOTm95yjCmxZC7yZqtou-yJCjCz58L0bD4LCq0J5_MVoQKMmsFeVfbd",
        isPizza: true,
        sizes: [
            { name: "Média", price: 45.00 },
            { name: "Grande", price: 58.00 }
        ]
    },
    {
        id: 3,
        name: "Marguerita",
        desc: "Mussarela, tomate fresco, manjericão e azeite de oliva extra virgem.",
        category: "pizzas",
        priceLabel: "A partir de",
        price: 42.00,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKyiWWjJieoSUS8UEX0oSh9KJpoW3oZThyKIuboo8-puU7Lm0bCe_dyXpVuoYRk18iL7USbX29t38B077Ipz182e0ICEPUY0nlDSargcydBWXvkj-ALAXkYOOw04oWCHqPYUIrZXs3NC4MsbWshj6YC-0z21wJ3dy_-3Rg12MqGulCSGjv3NWO61kjPd4F8IjlaSTyVLAyLQbeX0FgsWmyFi2H9rPWgxcZkWgJmK21HmZEDwVwFLCwbO1Ur4v4ennppz4_khtmHQdM",
        isPizza: true,
        sizes: [
            { name: "Média", price: 36.00 },
            { name: "Grande", price: 49.00 }
        ]
    },
    {
        id: 4,
        name: "Pepperoni Premium",
        desc: "Pepperoni importado, muçarela especial, molho de tomate italiano e orégano.",
        category: "pizzas",
        priceLabel: "A partir de",
        price: 48.00,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6_Z2CjR41QhNaB54yZPESjR6uzEGy4T12TXu1MR9wxNpK6IqD1iFg5XN9doD-ZJenqy-2RUY3myX75nhjEw_9KNFlgVjrKTQylwwpmPDSpQmEIdWssQjfaslym3zUwJQtTh9P8wUjGhE6DGGv-3ZMM-xP7qSQzWqrq3p_hsqsbg2IxvwOt776BdTzg0wz4QZymPJ_9uNF6wyxkeG_iOpIVxOMOc6sh6mqZFiE5YQi4CVjQOgekqMWbZi_H7LeIhvHZVsmm43iEM_0",
        isPizza: true,
        sizes: [
            { name: "Média", price: 42.00 },
            { name: "Grande", price: 56.00 }
        ]
    },
    {
        id: 5,
        name: "Tasty Monster",
        desc: "2 blends de 150g, bacon crocante, cheddar duplo e maionese da casa no pão brioche.",
        category: "hamburgueres",
        price: 38.90,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo85iJWU1cXtR6jfJnFGQLpISjfltLKB_42FdTeNOgmo2-k0OJriLUCl8f6x_UASMHXigQEJz1jpTstMKpxy-xRjVjLdK136MEiog3wdBl7qGkQ2b4gkPjECahfbfHQC1YqUM8gKdcsuhzTra0Mw-SweQs-UBQya8We-eMc9KonOACuCw1rr3nsgttb05kUsNkxCTU_Ne3mNmKkg_FOagxj9a9BymUOiA-yBDXl4v_sHbmlK8wJqA5COTqE4ne7faUotSBtrXJ87IB",
        isPizza: false
    },
    {
        id: 6,
        name: "Classic Cheese",
        desc: "Blend bovino suculento, muçarela derretida, alface e tomate frescos.",
        category: "hamburgueres",
        price: 24.50,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiAHnIr01kDBcQB_QRjxjTroiBEypYMaZzJaE1FN6b_y9gbJ_P_NqR3ATMlXClofhw7mmEwSqiYb_TfdoZjXeehgGO_34G2xpQH2KLraB0yLl2iCJMrJ-qexXNevHPIPyf8uSpOqkl_3Ote8Q8Q1gpNb7-xEgEzovX0Hjrb34UyxfJWDVWG7ZRgK-D1thy-cx3pzcVoHQ2KT9r5pqrR1B44qML0o4ZN-jtmhpmUvLFREx_IIwmX073xCSSOzsJBGn-1uMdeGzvCUF7",
        isPizza: false
    },
    {
        id: 7,
        name: "BBQ Bacon Smash",
        desc: "Smash burger duplo, bacon, queijo prato, onion rings e molho BBQ defumado.",
        category: "hamburgueres",
        price: 34.90,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo85iJWU1cXtR6jfJnFGQLpISjfltLKB_42FdTeNOgmo2-k0OJriLUCl8f6x_UASMHXigQEJz1jpTstMKpxy-xRjVjLdK136MEiog3wdBl7qGkQ2b4gkPjECahfbfHQC1YqUM8gKdcsuhzTra0Mw-SweQs-UBQya8We-eMc9KonOACuCw1rr3nsgttb05kUsNkxCTU_Ne3mNmKkg_FOagxj9a9BymUOiA-yBDXl4v_sHbmlK8wJqA5COTqE4ne7faUotSBtrXJ87IB",
        isPizza: false
    },
    {
        id: 8,
        name: "Refrigerante Lata",
        desc: "Coca-Cola, Guaraná, Sprite 350ml",
        category: "bebidas",
        price: 6.50,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDrbOw6lFqvHhJmkKCVOQ-A5uRqUAqo99yXRMFulB9CHp_uwMsvVSg_x3SUOwGN87SNQxOBCbbDPNbltSa-mt0C5LTWqw0fkw1sLthdR_ef51OVnP5pVoZ85sY5cT4BNv2r9C4MwgpfR_F6bMaUtF5VaZUkkaO4GZL4noC9YNFjXRcOJ8Me8CdwPDPvwbWxxW9kS470eO96S2ZVH7pcSNd69b4i07ucGoYRQPInDNuCd4lc-t5fJWufZCV06s5QxG3o2-eHuUzJia",
        isPizza: false
    },
    {
        id: 9,
        name: "Suco Natural",
        desc: "Laranja, Limão, Maracujá ou Abacaxi com hortelã - 500ml",
        category: "bebidas",
        price: 12.00,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDrbOw6lFqvHhJmkKCVOQ-A5uRqUAqo99yXRMFulB9CHp_uwMsvVSg_x3SUOwGN87SNQxOBCbbDPNbltSa-mt0C5LTWqw0fkw1sLthdR_ef51OVnP5pVoZ85sY5cT4BNv2r9C4MwgpfR_F6bMaUtF5VaZUkkaO4GZL4noC9YNFjXRcOJ8Me8CdwPDPvwbWxxW9kS470eO96S2ZVH7pcSNd69b4i07ucGoYRQPInDNuCd4lc-t5fJWufZCV06s5QxG3o2-eHuUzJia",
        isPizza: false
    },
    {
        id: 10,
        name: "Brownie com Sorvete",
        desc: "Brownie de chocolate belga quentinho com bola de sorvete de creme e calda.",
        category: "sobremesas",
        price: 22.00,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo85iJWU1cXtR6jfJnFGQLpISjfltLKB_42FdTeNOgmo2-k0OJriLUCl8f6x_UASMHXigQEJz1jpTstMKpxy-xRjVjLdK136MEiog3wdBl7qGkQ2b4gkPjECahfbfHQC1YqUM8gKdcsuhzTra0Mw-SweQs-UBQya8We-eMc9KonOACuCw1rr3nsgttb05kUsNkxCTU_Ne3mNmKkg_FOagxj9a9BymUOiA-yBDXl4v_sHbmlK8wJqA5COTqE4ne7faUotSBtrXJ87IB",
        isPizza: false
    },
    {
        id: 11,
        name: "Pastel de Carne",
        desc: "Massa crocante recheada com carne moída temperada, ovos e azeitona.",
        category: "pasteis",
        price: 14.00,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiAHnIr01kDBcQB_QRjxjTroiBEypYMaZzJaE1FN6b_y9gbJ_P_NqR3ATMlXClofhw7mmEwSqiYb_TfdoZjXeehgGO_34G2xpQH2KLraB0yLl2iCJMrJ-qexXNevHPIPyf8uSpOqkl_3Ote8Q8Q1gpNb7-xEgEzovX0Hjrb34UyxfJWDVWG7ZRgK-D1thy-cx3pzcVoHQ2KT9r5pqrR1B44qML0o4ZN-jtmhpmUvLFREx_IIwmX073xCSSOzsJBGn-1uMdeGzvCUF7",
        isPizza: false
    },
    {
        id: 12,
        name: "Pastel de Queijo",
        desc: "Massa crocante recheada com muçarela e catupiry cremoso.",
        category: "pasteis",
        price: 12.00,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiAHnIr01kDBcQB_QRjxjTroiBEypYMaZzJaE1FN6b_y9gbJ_P_NqR3ATMlXClofhw7mmEwSqiYb_TfdoZjXeehgGO_34G2xpQH2KLraB0yLl2iCJMrJ-qexXNevHPIPyf8uSpOqkl_3Ote8Q8Q1gpNb7-xEgEzovX0Hjrb34UyxfJWDVWG7ZRgK-D1thy-cx3pzcVoHQ2KT9r5pqrR1B44qML0o4ZN-jtmhpmUvLFREx_IIwmX073xCSSOzsJBGn-1uMdeGzvCUF7",
        isPizza: false
    }
];

const PIZZA_FLAVORS = [
    { id: "calabresa", name: "Calabresa", desc: "Calabresa, cebola e orégano", thumb: PRODUCTS[0].img },
    { id: "portuguesa", name: "Portuguesa", desc: "Ovos, cebola, azeitonas e mussarela", thumb: PRODUCTS[1].img },
    { id: "marguerita", name: "Marguerita", desc: "Mussarela, tomate e manjericão", thumb: PRODUCTS[2].img },
    { id: "pepperoni", name: "Pepperoni", desc: "Pepperoni importado e mussarela", thumb: PRODUCTS[3].img },
];

const BORDAS = [
    { name: "Borda de Catupiry", price: 8.00 },
    { name: "Borda de Cheddar", price: 10.00 },
];

const ADICIONAIS = [
    { name: "Bacon Crocante", price: 4.50 },
    { name: "Cebola Extra", price: 2.00 },
    { name: "Queijo Extra", price: 5.00 },
];

const CATEGORIES = [
    { key: "todos", label: "Todos", icon: null },
    { key: "pizzas", label: "Pizzas", icon: "local_pizza" },
    { key: "hamburgueres", label: "Hambúrgueres", icon: "lunch_dining" },
    { key: "bebidas", label: "Bebidas", icon: "local_bar" },
    { key: "sobremesas", label: "Sobremesas", icon: "cake" },
    { key: "pasteis", label: "Pastéis", icon: "bakery_dining" },
];

const DELIVERY_FEE = 5.00;

// ===== STATE =====
let cart = [];
let currentCategory = "todos";
let searchQuery = "";

// Modal state
let modalProduct = null;
let modalSizeIdx = 0;
let modalQty = 1;
let modalSecondFlavor = false;
let modalFlavor2 = null;
let modalBorda = null;
let modalAdicionais = [];
let modalShowBordas = false;
let modalShowAdicionais = false;

// ===== UTILS =====
function formatPrice(val) {
    return "R$ " + val.toFixed(2).replace(".", ",");
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.querySelector(".toast-msg").textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

// ===== RENDER MENU =====
function renderMenu() {
    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    const filtered = PRODUCTS.filter(p => {
        const matchCat = currentCategory === "todos" || p.category === currentCategory;
        const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    // Group by category
    const grouped = {};
    filtered.forEach(p => {
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push(p);
    });

    const catInfo = {
        pizzas: { label: "Pizzas", icon: "local_pizza" },
        hamburgueres: { label: "Hambúrgueres", icon: "lunch_dining" },
        bebidas: { label: "Bebidas", icon: "local_bar" },
        sobremesas: { label: "Sobremesas", icon: "cake" },
        pasteis: { label: "Pastéis", icon: "bakery_dining" },
    };

    for (const cat of Object.keys(grouped)) {
        const info = catInfo[cat];
        const section = document.createElement("section");
        section.className = "menu-section";
        section.id = `section-${cat}`;
        section.innerHTML = `
            <h2 class="section-title">
                <span class="material-symbols-outlined">${info.icon}</span>
                ${info.label}
            </h2>
            <div class="menu-list">
                ${grouped[cat].map(p => renderProductCard(p)).join("")}
            </div>
        `;
        container.appendChild(section);
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <span class="material-symbols-outlined">search_off</span>
                <h3>Nenhum item encontrado</h3>
                <p>Tente buscar por outro termo</p>
            </div>
        `;
    }
}

function renderProductCard(p) {
    return `
        <div class="product-card" onclick="openProduct(${p.id})">
            <div class="product-info">
                <div>
                    <div class="product-name">${p.name}</div>
                    <div class="product-desc">${p.desc}</div>
                </div>
                <div style="margin-top:0.5rem">
                    ${p.priceLabel ? `<div class="product-price-label">${p.priceLabel}</div>` : ""}
                    <div class="product-price">${formatPrice(p.price)}</div>
                </div>
            </div>
            <div class="product-img-wrap">
                <img src="${p.img}" alt="${p.name}" loading="lazy"/>
                <button class="btn-add" onclick="event.stopPropagation(); addQuick(${p.id})">
                    <span class="material-symbols-outlined">add</span>
                </button>
            </div>
        </div>
    `;
}

// ===== CATEGORIES =====
function renderCategories() {
    const container = document.getElementById("categories");
    container.innerHTML = CATEGORIES.map(c => `
        <button class="cat-btn ${c.key === currentCategory ? "active" : ""}" onclick="selectCategory('${c.key}')">
            ${c.label}
        </button>
    `).join("");
}

function selectCategory(key) {
    currentCategory = key;
    renderCategories();
    renderMenu();
}

// ===== SEARCH =====
function handleSearch(e) {
    searchQuery = e.target.value;
    renderMenu();
}

// ===== ADD QUICK (non-pizza) =====
function addQuick(productId) {
    openProduct(productId);
}

// ===== PRODUCT MODAL =====
function openProduct(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    modalProduct = product;
    modalSizeIdx = 0;
    modalQty = 1;
    modalSecondFlavor = false;
    modalFlavor2 = null;
    modalBorda = null;
    modalAdicionais = [];
    modalShowBordas = false;
    modalShowAdicionais = false;

    if (product.isPizza) {
        renderPizzaModal();
    } else {
        renderSimpleModal();
    }

    document.getElementById("modal-overlay").classList.add("open");
    document.body.style.overflow = "hidden";
    document.getElementById("cart-bar").classList.remove("visible");
}

function closeModal() {
    document.getElementById("modal-overlay").classList.remove("open");
    document.body.style.overflow = "";
    updateCartBar();
}

function renderPizzaModal() {
    const p = modalProduct;
    const modal = document.getElementById("modal-content-inner");

    const flavorOptions = PIZZA_FLAVORS.filter(f => f.name !== p.name);

    modal.innerHTML = `
        <div class="modal-hero">
            <img src="${p.img}" alt="${p.name}"/>
            <div class="modal-hero-gradient"></div>
            <button class="modal-close" onclick="closeModal()">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <div class="modal-hero-text">
                <h2>${p.name}</h2>
                <p>${p.desc}</p>
            </div>
        </div>
        <div class="modal-body" id="modal-body">
            <div class="modal-handle"><div class="modal-handle-bar"></div></div>

            <!-- Tamanho -->
            <div class="modal-section">
                <div class="modal-section-title">
                    <span class="material-symbols-outlined">straighten</span>
                    Escolha o tamanho
                </div>
                <div class="size-grid" id="size-grid">
                    ${p.sizes.map((s, i) => `
                        <div class="size-option ${i === modalSizeIdx ? "selected" : ""}" onclick="selectSize(${i})">
                            <span class="size-name">${s.name}</span>
                            <span class="size-price">${formatPrice(s.price)}</span>
                            <span class="check-icon material-symbols-outlined">check_circle</span>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- Toggle 2o sabor -->
            <div class="toggle-row">
                <div class="toggle-row-text">
                    <p>Deseja um 2º sabor?</p>
                    <p>Adicione outra metade à sua pizza</p>
                </div>
                <label class="toggle-switch">
                    <input type="checkbox" ${modalSecondFlavor ? "checked" : ""} onchange="toggleSecondFlavor(this.checked)"/>
                    <span class="toggle-slider"></span>
                </label>
            </div>

            <!-- 2o Sabor -->
            <div id="flavor2-section" style="display:${modalSecondFlavor ? "block" : "none"}">
                <div class="modal-section">
                    <div class="modal-section-title">
                        <span class="material-symbols-outlined">restaurant_menu</span>
                        2º Sabor
                    </div>
                    ${flavorOptions.map(f => `
                        <div class="flavor-option ${modalFlavor2 === f.id ? "selected" : ""}" onclick="selectFlavor2('${f.id}')">
                            <div class="flavor-left">
                                <img class="flavor-thumb" src="${f.thumb}" alt="${f.name}"/>
                                <div>
                                    <div class="flavor-name">${f.name}</div>
                                    <div class="flavor-desc">${f.desc}</div>
                                </div>
                            </div>
                            <div class="radio-dot"><div class="radio-dot-inner"></div></div>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- Toggle Bordas -->
            <div class="toggle-row">
                <div class="toggle-row-text">
                    <p>Borda recheada?</p>
                    <p>Escolha uma borda especial</p>
                </div>
                <label class="toggle-switch">
                    <input type="checkbox" ${modalShowBordas ? "checked" : ""} onchange="toggleShowBordas(this.checked)"/>
                    <span class="toggle-slider"></span>
                </label>
            </div>

            <!-- Bordas -->
            <div id="bordas-section" style="display:${modalShowBordas ? "block" : "none"}">
                <div class="modal-section">
                    <div class="modal-section-title">
                        <span class="material-symbols-outlined">circle</span>
                        Bordas Recheadas
                    </div>
                    ${BORDAS.map((b, i) => `
                        <div class="flavor-option ${modalBorda === i ? "selected" : ""}" onclick="selectBorda(${i})">
                            <div class="flavor-left">
                                <div>
                                    <div class="flavor-name">${b.name}</div>
                                    <div class="flavor-desc">+ ${formatPrice(b.price)}</div>
                                </div>
                            </div>
                            <div class="radio-dot"><div class="radio-dot-inner"></div></div>
                        </div>
                    `).join("")}
                </div>
            </div>

            <!-- Toggle Adicionais -->
            <div class="toggle-row">
                <div class="toggle-row-text">
                    <p>Adicionais?</p>
                    <p>Turbine sua pizza com extras</p>
                </div>
                <label class="toggle-switch">
                    <input type="checkbox" ${modalShowAdicionais ? "checked" : ""} onchange="toggleShowAdicionais(this.checked)"/>
                    <span class="toggle-slider"></span>
                </label>
            </div>

            <!-- Adicionais -->
            <div id="adicionais-section" style="display:${modalShowAdicionais ? "block" : "none"}">
                <div class="modal-section">
                    <div class="modal-section-title">
                        <span class="material-symbols-outlined">add_circle</span>
                        Adicionais
                    </div>
                    ${ADICIONAIS.map((a, i) => `
                        <div class="extra-option ${modalAdicionais.includes(i) ? "selected" : ""}" onclick="toggleAdicional(${i})">
                            <span class="extra-name">${a.name}</span>
                            <div class="extra-right">
                                <span class="extra-price">+ ${formatPrice(a.price)}</span>
                                <div class="checkbox-custom">
                                    <span class="material-symbols-outlined">check</span>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    `;

    updateModalFooter();
}

function renderSimpleModal() {
    const p = modalProduct;
    const modal = document.getElementById("modal-content-inner");

    modal.innerHTML = `
        <div class="modal-hero">
            <img src="${p.img}" alt="${p.name}"/>
            <div class="modal-hero-gradient"></div>
            <button class="modal-close" onclick="closeModal()">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <div class="modal-hero-text">
                <h2>${p.name}</h2>
                <p>${p.desc}</p>
            </div>
        </div>
        <div class="modal-body" id="modal-body">
            <div class="modal-handle"><div class="modal-handle-bar"></div></div>
            <div class="modal-section" style="padding-top:2rem;padding-bottom:2rem;">
                <p style="color:var(--text-medium);font-size:0.9375rem;line-height:1.6">${p.desc}</p>
                <div style="margin-top:1.5rem">
                    <span style="font-size:1.5rem;font-weight:700;color:var(--primary)">${formatPrice(p.price)}</span>
                </div>
            </div>
        </div>
    `;

    updateModalFooter();
}

function selectSize(idx) {
    modalSizeIdx = idx;
    // Re-render size options
    const grid = document.getElementById("size-grid");
    if (grid) {
        const options = grid.querySelectorAll(".size-option");
        options.forEach((opt, i) => {
            opt.classList.toggle("selected", i === idx);
        });
    }
    updateModalFooter();
}

function toggleSecondFlavor(checked) {
    modalSecondFlavor = checked;
    const section = document.getElementById("flavor2-section");
    if (section) section.style.display = checked ? "block" : "none";
    if (!checked) modalFlavor2 = null;
    updateModalFooter();
}

function selectFlavor2(flavorId) {
    modalFlavor2 = flavorId;
    document.querySelectorAll("#flavor2-section .flavor-option").forEach(el => {
        el.classList.toggle("selected", el.querySelector(".flavor-name")?.textContent === PIZZA_FLAVORS.find(f => f.id === flavorId)?.name);
    });
    updateModalFooter();
}

function selectBorda(idx) {
    modalBorda = modalBorda === idx ? null : idx;
    renderPizzaModal();
}

function toggleAdicional(idx) {
    const pos = modalAdicionais.indexOf(idx);
    if (pos >= 0) modalAdicionais.splice(pos, 1);
    else modalAdicionais.push(idx);
    renderPizzaModal();
}

function toggleShowBordas(checked) {
    modalShowBordas = checked;
    const section = document.getElementById("bordas-section");
    if (section) section.style.display = checked ? "block" : "none";
    if (!checked) { modalBorda = null; }
    updateModalFooter();
}

function toggleShowAdicionais(checked) {
    modalShowAdicionais = checked;
    const section = document.getElementById("adicionais-section");
    if (section) section.style.display = checked ? "block" : "none";
    if (!checked) { modalAdicionais = []; }
    updateModalFooter();
}

function getModalTotal() {
    if (!modalProduct) return 0;
    let base;
    if (modalProduct.isPizza && modalProduct.sizes) {
        base = modalProduct.sizes[modalSizeIdx].price;
    } else {
        base = modalProduct.price;
    }
    let extras = 0;
    if (modalBorda !== null) extras += BORDAS[modalBorda].price;
    modalAdicionais.forEach(i => extras += ADICIONAIS[i].price);
    return (base + extras) * modalQty;
}

function updateModalFooter() {
    const footer = document.getElementById("modal-footer");
    footer.innerHTML = `
        <div class="qty-control">
            <button class="qty-btn" onclick="changeModalQty(-1)">
                <span class="material-symbols-outlined">remove</span>
            </button>
            <span class="qty-value">${modalQty}</span>
            <button class="qty-btn" onclick="changeModalQty(1)">
                <span class="material-symbols-outlined">add</span>
            </button>
        </div>
        <button class="btn-add-cart" onclick="addToCart()">
            <span>Adicionar à sacola</span>
            <span>${formatPrice(getModalTotal())}</span>
        </button>
    `;
}

function changeModalQty(delta) {
    modalQty = Math.max(1, modalQty + delta);
    updateModalFooter();
}

function addToCart() {
    const p = modalProduct;
    let desc = p.desc;
    let price = p.price;
    let customization = null;

    if (p.isPizza && p.sizes) {
        const size = p.sizes[modalSizeIdx];
        price = size.price;

        if (modalSecondFlavor && modalFlavor2) {
            const flavor = PIZZA_FLAVORS.find(f => f.id === modalFlavor2);
            desc = `${p.name} / ${flavor.name} • ${size.name}`;
        } else {
            desc = `${p.name} • ${size.name}`;
        }

        const extras = [];
        if (modalBorda !== null) { extras.push(BORDAS[modalBorda].name); price += BORDAS[modalBorda].price; }
        modalAdicionais.forEach(i => { extras.push(ADICIONAIS[i].name); price += ADICIONAIS[i].price; });
        if (extras.length) desc += ` + ${extras.join(", ")}`;

        customization = {
            sizeIdx: modalSizeIdx,
            secondFlavor: modalFlavor2,
            borda: modalBorda,
            adicionais: [...modalAdicionais]
        };
    }

    const itemName = p.isPizza && modalSecondFlavor && modalFlavor2 ? "Pizza Meia a Meia" : p.name;

    // Group identical products
    const existing = cart.find(item =>
        item.productId === p.id &&
        item.price === price &&
        JSON.stringify(item.customization) === JSON.stringify(customization)
    );

    if (existing) {
        existing.qty += modalQty;
    } else {
        cart.push({
            productId: p.id,
            name: itemName,
            desc: desc,
            price: price,
            qty: modalQty,
            customization: customization
        });
    }

    closeModal();
    updateCartBar();
    showToast(`${p.name} adicionado à sacola!`);
}

// ===== CART BAR =====
function updateCartBar() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const bar = document.getElementById("cart-bar");
    const count = document.getElementById("cart-count");
    const menuActive = document.getElementById("menu-view").classList.contains("active");
    const modalOpen = document.getElementById("modal-overlay").classList.contains("open");

    if (totalItems > 0 && menuActive && !modalOpen) {
        bar.classList.add("visible");
        count.textContent = totalItems;
    } else {
        bar.classList.remove("visible");
    }
}

// ===== VIEWS =====
function showView(viewId, slideBack) {
    document.querySelectorAll(".view").forEach(v => {
        v.classList.remove("active", "slide-back");
    });
    const view = document.getElementById(viewId);
    if (slideBack) view.classList.add("slide-back");
    view.classList.add("active");
}

function openCheckout() {
    renderCheckout();
    showView("checkout-view");
    document.getElementById("cart-bar").classList.remove("visible");
}

function backToMenu() {
    showView("menu-view", true);
    updateCartBar();
}

// ===== RENDER CHECKOUT =====
function renderCheckout() {
    const container = document.getElementById("cart-items");
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = subtotal + DELIVERY_FEE;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <span class="material-symbols-outlined">shopping_bag</span>
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens do cardápio para continuar</p>
            </div>
        `;
    } else {
        container.innerHTML = cart.map((item, idx) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-desc">${item.desc}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-price-row">
                        <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
                        <button class="btn-delete" onclick="removeFromCart(${idx})">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                    <div class="cart-qty">
                        <button onclick="changeCartQty(${idx}, -1)">
                            <span class="material-symbols-outlined">remove</span>
                        </button>
                        <span>${item.qty}</span>
                        <button onclick="changeCartQty(${idx}, 1)">
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                </div>
            </div>
        `).join("");
    }

    document.getElementById("checkout-subtotal").textContent = formatPrice(subtotal);
    document.getElementById("checkout-delivery").textContent = formatPrice(DELIVERY_FEE);
    document.getElementById("checkout-total").textContent = formatPrice(total);
}

function removeFromCart(idx) {
    cart.splice(idx, 1);
    renderCheckout();
    updateCartBar();
    if (cart.length === 0) {
        setTimeout(() => backToMenu(), 500);
    }
}

function changeCartQty(idx, delta) {
    cart[idx].qty = Math.max(1, cart[idx].qty + delta);
    renderCheckout();
    updateCartBar();
}

// ===== PAYMENT SELECTION =====
function selectPayment(el) {
    document.querySelectorAll(".payment-option").forEach(o => o.classList.remove("selected"));
    el.classList.add("selected");
    const changeField = document.getElementById("change-field");
    if (el.dataset.payment === "dinheiro") {
        changeField.style.display = "block";
    } else {
        changeField.style.display = "none";
    }
}

// ===== WHATSAPP =====
function sendWhatsApp() {
    if (cart.length === 0) {
        showToast("Adicione itens à sacola primeiro!");
        return;
    }

    const nome = document.getElementById("input-nome").value;
    const rua = document.getElementById("input-rua").value;
    const numero = document.getElementById("input-numero").value;
    const bairro = document.getElementById("input-bairro").value;
    const changeInput = document.getElementById("input-change");

    if (!nome || !rua || !numero || !bairro) {
        showToast("Preencha o nome e endereço de entrega!");
        return;
    }

    let selectedPayment = "Dinheiro";
    const selectedEl = document.querySelector(".payment-option.selected");
    if (selectedEl) selectedPayment = selectedEl.dataset.label;

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = subtotal + DELIVERY_FEE;

    let msg = `🛒 *NOVO PEDIDO*\n\n`;
    msg += `👤 *Cliente:* ${nome}\n\n`;
    cart.forEach(item => {
        msg += `➤ *${item.name}* x${item.qty}\n`;
        msg += `  ${item.desc}\n`;
        msg += `  ${formatPrice(item.price * item.qty)}\n\n`;
    });
    msg += `---\n`;
    msg += `📦 Subtotal: ${formatPrice(subtotal)}\n`;
    msg += `🚚 Taxa de Entrega: ${formatPrice(DELIVERY_FEE)}\n`;
    msg += `💰 *Total: ${formatPrice(total)}*\n\n`;
    msg += `📍 *Endereço:* ${rua}, ${numero} - ${bairro}\n`;
    msg += `💳 *Pagamento:* ${selectedPayment}\n`;
    if (selectedPayment === "Dinheiro" && changeInput && changeInput.value) {
        msg += `💵 *Troco para:* R$ ${changeInput.value}\n`;
    }

    const phone = "5511999999999"; // Example phone
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderMenu();
    updateCartBar();

    // Search
    document.getElementById("search-input").addEventListener("input", handleSearch);

    // Cart bar click
    document.getElementById("cart-bar").addEventListener("click", openCheckout);

    // Close modal on overlay click
    document.getElementById("modal-overlay").addEventListener("click", (e) => {
        if (e.target === document.getElementById("modal-overlay")) closeModal();
    });

    // Default payment
    const defaultPayment = document.querySelector(".payment-option");
    if (defaultPayment) defaultPayment.classList.add("selected");
});
