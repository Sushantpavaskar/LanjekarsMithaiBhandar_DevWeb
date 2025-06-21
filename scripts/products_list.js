document.addEventListener("DOMContentLoaded", () => {
    // Simulated fetch - You can replace this with a real `fetch('products.json')`
    const renderProducts = (products) => {
        const grid = document.getElementById("productGrid");
        grid.innerHTML = "";

        products.forEach(product => {
            const card = document.createElement("article");
            card.className = "product-card";
            card.innerHTML = `
        <div class="product-image" style="background-image: url('${product.image}');" aria-label="${product.nameEnglish}"></div>
        <h2 class="product-name-marathi">${product.nameMarathi}</h2>
        <p class="product-name-english">${product.nameEnglish}</p>
      `;
            grid.appendChild(card);
        });
    };

    fetch('scripts/json/products_list.json')
        .then(response => response.json())
        .then(products => {
            renderProducts(products);
        });
});