document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("products-container");

  fetch("products.json")
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.model}">
          <h3>${product.brand} ${product.model}</h3>
          <p>${product.description}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      container.innerHTML = "<p>Failed to load products.</p>";
      console.error(error);
    });
});