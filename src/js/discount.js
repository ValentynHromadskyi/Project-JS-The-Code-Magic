function getRandomProducts(products, count) {
  const shuffledProducts = products.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, count);
}

import { getDiskountProduct } from './api';

  function renderDiscountProductCard(product) {
    return `
      <div class="product-card">
        <div class="product-background">
          <img src="${product.img}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-details">
          <div class="details-text">
          <h2 class="product-name">${product.name}</h2>
          <p class="product-price">$${product.price.toFixed(2)}</p>
          <div>
          <svg class="cart-icon" width="34" height="34">
            <use href="./src/icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    `;
  }
  
async function renderDiscountProducts() {
  try {
    const products = await getDiskountProduct();
    const randomProducts = getRandomProducts(products, 2);
    const discountContainer = document.getElementById('discountContainer');

    const fragment = document.createDocumentFragment();
    randomProducts.forEach(product => {
      fragment.appendChild(renderDiscountProductCard(product));
    });

    discountContainer.appendChild(fragment);
  } catch (error) {
    console.error(error.message);
  }
}

renderDiscountProducts();

// Fetch discount products and render them
getDiskountProduct()
  .then(response => response.data)
  .then(products => {
    const randomProducts = getRandomProducts(products, 2);
    const discountContainer = document.getElementById('discountContainer');

    randomProducts.forEach(product => {
      discountContainer.innerHTML += renderDiscountProductCard(product);
    });
  })
  .catch(error => {
    console.error(error.message);
  });