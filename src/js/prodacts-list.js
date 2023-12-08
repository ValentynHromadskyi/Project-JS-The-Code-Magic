// функція для отримання продуктів з сервера

async function getProductsList(keyword, category, page = 1, limit = 6) {
  const url = `https://food-boutique.b.goit.study/api/products?keyword=${keyword}&category=${category}&page=${page}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const products = await response.json();
    return products.results;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

//картка продукта

function renderProductCard(product) {
  return `
    <div class="productlist-card" data-productlist-id="${product._id}">
      <div class="productlist-background">
        <img src="${product.img}" alt="${product.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${product.name}</h2>
          <div class="pl-det">
          <p class="productlist-category">Category: <span class="word">${product.category}</span></p>
          <p class="productlist-size">Size: <span class="word">${product.size}</span></p>
          <p class="productlist-popularity">Popularity: <span class="word">${product.popularity}</span></p>
          </div>
          <div class="price-icon">
          <p class="productlist-price">$${product.price.toFixed(2)}</p>
          <svg class="cart-icon" width="34" height="34">
            <use href="./src/icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Оголошуємо функцію для отримання випадкового масиву продуктів
function getRandomProducts(array, number) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
}

// Оголошуємо головну функцію, яка викликається при завантаженні сторінки
async function main() {
  const keyword = 'Ac'; // Ваш ключовий запит
  const category = 'Fresh_Produce'; // Ваша обрана категорія

  try {
    const products = await getProductsList(keyword, category);
    const randomProducts = getRandomProducts(products, 6);

    const productList = document.getElementById('productList');
    randomProducts.forEach(product => {
      productList.innerHTML += renderProductCard(product);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Викликаємо головну функцію при завантаженні сторінки
document.addEventListener('DOMContentLoaded', main);