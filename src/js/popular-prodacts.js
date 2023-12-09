import { getPopularProduct } from './api.js';
// async function getPopularProduct() {
//   try {
//     const popularProducts = await axios.get(
//       `${BASE_URL}/products/popular?limit=5`
//     );
//     return popularProducts;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// --перевірка запита
getPopularProduct().then(product => console.log(product));

return `
    <div class="popular-card" data-popular-id="${product._id}">
      <div class="popular-background">
        <img src="${product.img}" alt="${product.name}" class="popular-image">
      </div>
      <div class="popular-details">
        <div class="popular-details-text">
          <h3 class="popular-name">${product.name}</h3>
          <div class="popular-data">
          <p class="popular-category">Category: <span class="word">${
            product.category
          }</span></p>
          <p class="popular-size">Size: <span class="word">${
            product.size
          }</span></p>
          <p class="popular-popularity">Popularity: <span class="word">${
            product.popularity
          }</span></p>
          </div>
          <div class="price-icon">
          <p class="popular-price">$${product.price.toFixed(2)}</p>
          <svg class="cart-icon" width="34" height="34">
            <use href="./src/icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          </div>
        </div>
      </div>
    </div>
  `;
