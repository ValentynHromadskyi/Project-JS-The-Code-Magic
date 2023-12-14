function getRandomProducts(products, count) {
  const shuffledProducts = products.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, count);
}

import { getPopularProduct } from './api';
import { replaceUnderscoresWithSpaces } from './filters';
function renderPopularProductCard(product) {
  let result = replaceUnderscoresWithSpaces(product.category);
  return `
      <div class="popular-card modalOpopul" data-productlist-id="${product._id}">
       <div class="popular-background">
        <img src="${product.img}" alt="${product.name}" class="popular-img">
      </div>
      <div class="popular-descript">
        <div class="popular-descript-text">
          <p class="popular-name">${product.name}</p>
          <div class="pop-frame">

          <div class="category-cont">
          <p class="popular-text">Category:
          <span class="word">${result}</span></p>
<ul class="pop-text-two-cat">
<li class="pop-text-size-pop">
          <p class="popular-text">Size:
          <span class="word">${product.size}</span></p></li>
          

          <li>
          <p class="popular-text">Popularity:
          <span class="word">${product.popularity}</span></p></li></ul>
          </div>

           <div class="popularname-price">
           </div>
           <div id="${product._id}" class="popular-icon-cont inBascet">
            <svg class="popular-icon" width="12" height="12">
              <use href="../icons.svg#icon-heroicons-solid_shopping-cart-mini"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  `;
}

async function renderPopularProducts() {
  try {
    const products = await getPopularProduct();

    // Перевірте, чи products - це масив
    if (!Array.isArray(products)) {
      console.error('Невірний формат даних: Очікувався масив.');
      return;
    }

    // Перевірте, чи масив products не порожній
    if (products.length === 0) {
      console.warn('Немає доступних товарів зі знижкою.');
      return;
    }

    const randomProducts = getRandomProducts(products, 5);
    const popularContainer = document.getElementById('popularContainer');

    const fragment = document.createDocumentFragment();
    randomProducts.forEach(product => {
      fragment.appendChild(renderPopularProductCard(product));
    });

    popularContainer.appendChild(fragment);
  } catch (error) {
    console.error(error.message);
  }
}

// Fetch discount products and render them
getPopularProduct()
  .then(response => response.data)
  .then(products => {
    const randomProducts = getRandomProducts(products, 5);
    const popularContainer = document.getElementById('popularContainer');

    randomProducts.forEach(product => {
      popularContainer.innerHTML += renderPopularProductCard(product);
    });
  })
  .catch(error => {
    console.error(error.message);
  });
