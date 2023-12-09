fetch('https://food-boutique.b.goit.study/api/products/discount')
    .then(response => response.json())
    .then(products => {
    
      const randomProducts = getRandomProducts(products, 2);

      const productList = document.getElementById('productList');
      randomProducts.forEach(product => {
        productList.innerHTML += renderProductCard(product);
      });
    });

  function renderProductCard(product) {
    return `
      <div class="product-card">
        <div class="product-background">
          <img src="${product.img}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-details">
          <div class="details-text">
          <h2 class="product-name">${product.name}</h2>
          <p class="product-price">$${product.price.toFixed(2)}</p>
          </div>
          <svg class="cart-icon" width="34" height="34">
            <use href="./src/icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
        </div>
      </div>
    `;
  }
  
function getRandomProducts(array, number) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, number);
  }
