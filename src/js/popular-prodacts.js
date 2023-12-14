function getRandomProducts(products, count) {
  const shuffledProducts = products.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, count);
}

import { getPopularProduct } from './api';
import { replaceUnderscoresWithSpaces } from './filters';
function renderPopularProductCard(product) {
  let result = replaceUnderscoresWithSpaces(product.category);
  return `
      <div class="popular-card">
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

          <p class="popular-text">Size:
          <span class="word">${product.size}</span></p>
          

          
          <p class="popular-text">Popularity:
          <span class="word">${product.popularity}</span></p>
          </div>

           <div class="popularname-price">
           </div>
           <div id="${product._id}" class="popular-icon-cont inBascet">
           <svg class="popular-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M1.79995 0.6C1.64082 0.6 1.48821 0.663214 1.37569 0.775736C1.26317 0.888258 1.19995 1.04087 1.19995 1.2C1.19995 1.35913 1.26317 1.51174 1.37569 1.62426C1.48821 1.73679 1.64082 1.8 1.79995 1.8H2.53195L2.71495 2.5332C2.71677 2.54164 2.71877 2.55004 2.72095 2.5584L3.53575 5.8164L2.99995 6.3516C2.24395 7.1076 2.77915 8.4 3.84835 8.4H8.99995C9.15908 8.4 9.31169 8.33678 9.42421 8.22426C9.53674 8.11174 9.59995 7.95913 9.59995 7.8C9.59995 7.64087 9.53674 7.48826 9.42421 7.37574C9.31169 7.26321 9.15908 7.2 8.99995 7.2H3.84835L4.44835 6.6H8.39995C8.51135 6.59994 8.62053 6.56887 8.71527 6.51027C8.81 6.45167 8.88656 6.36785 8.93635 6.2682L10.7363 2.6682C10.782 2.57675 10.8036 2.47513 10.799 2.373C10.7944 2.27087 10.7638 2.17161 10.7101 2.08464C10.6563 1.99766 10.5813 1.92586 10.492 1.87605C10.4027 1.82623 10.3022 1.80005 10.1999 1.8H3.76795L3.58195 1.0542C3.54945 0.924452 3.47452 0.809286 3.36908 0.726994C3.26363 0.644702 3.13371 0.600004 2.99995 0.6H1.79995ZM9.59995 9.9C9.59995 10.1387 9.50513 10.3676 9.33635 10.5364C9.16756 10.7052 8.93864 10.8 8.69995 10.8C8.46126 10.8 8.23234 10.7052 8.06355 10.5364C7.89477 10.3676 7.79995 10.1387 7.79995 9.9C7.79995 9.6613 7.89477 9.43239 8.06355 9.2636C8.23234 9.09482 8.46126 9 8.69995 9C8.93864 9 9.16756 9.09482 9.33635 9.2636C9.50513 9.43239 9.59995 9.6613 9.59995 9.9ZM3.89995 10.8C4.13865 10.8 4.36756 10.7052 4.53635 10.5364C4.70513 10.3676 4.79995 10.1387 4.79995 9.9C4.79995 9.6613 4.70513 9.43239 4.53635 9.2636C4.36756 9.09482 4.13865 9 3.89995 9C3.66126 9 3.43234 9.09482 3.26355 9.2636C3.09477 9.43239 2.99995 9.6613 2.99995 9.9C2.99995 10.1387 3.09477 10.3676 3.26355 10.5364C3.43234 10.7052 3.66126 10.8 3.89995 10.8Z" fill="#6D8434"/>
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
