// Sample product data - in a real app you might fetch this from an API
const products = {
    jewelry: [
        {
            id: 'diamond-necklace',
            name: "Diamond Elegance Necklace",
            description: "Handcrafted 18K gold necklace featuring ethically-sourced diamonds.",
            price: "$5,999",
            originalPrice: "$7,499",
            discount: "20% OFF",
            image: "images/products/diamond-necklace.jpg",
            category: "jewelry",
            link: "products/jewelry/diamond-necklace.html"
        },
        {
            id: 'gold-watch',
            name: "Heritage Gold Watch",
            description: "Swiss-made 24K gold timepiece with sapphire crystal glass.",
            price: "$3,999",
            originalPrice: "$4,500",
            discount: "11% OFF",
            image: "images/products/gold-watch.jpg",
            category: "jewelry",
            link: "products/jewelry/gold-watch.html"
        }
    ],
    skincare: [
        {
            id: 'youth-elixir',
            name: "Luminous Youth Elixir",
            description: "Award-winning anti-aging serum with 24K gold flakes.",
            price: "$129",
            originalPrice: "$165",
            discount: "22% OFF",
            image: "images/products/youth-elixir.jpg",
            category: "skincare",
            link: "products/skincare/youth-elixir.html"
        },
        {
            id: 'vitamin-c-serum',
            name: "Radiance Vitamin C Serum",
            description: "Potent 20% vitamin C formulation for brighter skin.",
            price: "$89",
            image: "images/products/vitamin-c-serum.jpg",
            category: "skincare",
            link: "products/skincare/vitamin-c-serum.html"
        }
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    
    // Set active nav link based on current page
    setActiveNavLink();
});

function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    container.innerHTML = '';
    
    // Show 4 featured products (2 from each category)
    const featured = [
        ...products.jewelry.slice(0, 2),
        ...products.skincare.slice(0, 2)
    ];
    
    featured.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    let priceHtml = `<div class="price">${product.price}`;
    if (product.originalPrice) {
        priceHtml += ` <span class="original-price">${product.originalPrice}</span>`;
    }
    if (product.discount) {
        priceHtml += ` <span class="discount-badge">${product.discount}</span>`;
    }
    priceHtml += `</div>`;
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            ${priceHtml}
            <a href="${product.link}" class="view-btn">
                <i class="fas fa-eye"></i> View Details
            </a>
        </div>
    `;
    
    return card;
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-button');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage || 
            (currentPage === 'index.html' && linkPage === 'jewelry.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}