import { getProductById } from './api.js';
// import { replaceUnderscoresWithSpaces } from './filters.js';

const STORAGE_KEY = "cart";

// запис ID в локал сторидж
export function saveDataInLS(data, key) {
    localStorage.setItem(key, JSON.stringify(data));
}
const newProduct = [{
    id: "640c2dd963a319ea671e37a9",
    pieces: "2", 
}]
    
saveDataInLS(newProduct, STORAGE_KEY);


// document.addEventListener('DOMContentLoaded', () => {
    const refs = {
        cartBlock: document.querySelector(".js-cart-block"),
        cartCounter: document.querySelector("span#cart-counter"),
        deleteAllBtn: document.querySelector(".delete-all-btn"),
        cartDeleteAllBlock: document.querySelector(".cart-delete-all-section"),
        cartListBlock: document.querySelector(".cart-list-block"),
    }
// });
refs.deleteAllBtn.addEventListener("click", deleteAllProducts);

// showBtnLoad()
hideBtnLoad();
// refs.cartDeleteAllBlock.style.display = "none";
function hideBtnLoad() {
  refs.cartDeleteAllBlock.setAttribute('hidden', '');
}

function showBtnLoad() {
  refs.cartDeleteAllBlock.removeAttribute('hidden', '');
}

cartUsage();

// використання корзини
 async function cartUsage() {
    let cartArr = getDataFromLS(STORAGE_KEY);
    console.log(cartArr.length);
         
    // каунтер - productQuantity(cartArr);
    refs.cartCounter.textContent = cartArr.length;

    if (cartArr.length === 0) {
        refs.cartBlock.innerHTML = createMarkupEmptyCart();
        return;
    }
    renderCards(cartArr);
    }

    function renderCards() {
        let cartArr = getDataFromLS(STORAGE_KEY);
        console.log(cartArr[0].id);
        let id = cartArr[0].id; 

        getProductById(id).then(response => {
            console.log(response);
            const cartId = renderProductCard(response);
            console.log(cartId);
            let result = replaceUnderscoresWithSpaces(cartId.category);
            refs.cartListBlock.insertAdjacentHTML("beforeend", cartId);
        }); 
                
        
       
        
                    
        }
    
    

refs.deleteAllBtn.addEventListener("click", deleteAllProducts);
// 

function getDataFromLS(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.log(error.message);
    }
}

// каунтер
export function productQuantity(cartArr) {
    refs.cartCounter.textContent = cartArr.length;
    // return refs.cartCounter.forEach(item => item.textContent = cartArr.length);
}


// Видалення товарів з корзини
  function deleteAllProducts() {
      localStorage.removeItem(STORAGE_KEY);
      refs.cartBlock.innerHTML = createMarkupEmptyCart();
      refs.cartCounter.forEach(item => item.textContent = 0);
    
};




// розмітка пустої корзини
function createMarkupEmptyCart() {
    return `
    <div class="js-cart-block">
      <div class="cart-img-empty-cart">
        <img
          class="img-shopping-cart"
          src="./img/cart/yellow-shopping-basket.png"
          width="132"
          height="114"
        />
      </div>
      <div class="cart-text">
        <p class="cart-text-empty">
          Your basket is <span class="cart-text-span">empty...</span>
        </p>
        <p class="cart-all-text">
          Go to the main page to select your favorite <br />
          products and add them to the cart.
        </p>
      </div>
    </div>`
}

// розмітка кнопки Delete all
function createMarcupDeleteAllBtn() {
    return `<p class="delete-all-text">Delete all</p>
        <button type="button" class="delete-all-btn">
          <svg class="delete-close-icon" width="13.5" height="13.5">
            <use href="../img/cart/delete-btn.jpg"></use>
          </svg>
        </button>`
}
//картка продукта
function renderProductCard(data) {
  return `
    <div class="productlist-card" data-productlist-id="${data._id}">
      <div class="productlist-background">
        <img src="${data.img}" alt="${data.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${data.name}</h2>
          <div class="pl-det">
          <div class="category-cont">
          <p class="productlist-category">Category:
          <span class="word">${result}</span></p>
          <p class="productlist-size">Size:
          <span class="word">${data.size}</span></p>
          </div>
          <div class="popularity-cont">
          <p class="productlist-popularity">Popularity:
          <span class="word">${data.popularity}</span></p>
          </div>
          </div>
          <div class="price-icon">
          

          <div class="price-icon-cont">
          <svg class="productlist-icon" width="18" height="18">
            <use href="../icons.svg#icon-shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// iwuhfiuwe <p class="productlist-price">$${data.price.toFixed(1)}</p>

// розмітка картки товару
function createMarkupCartList(arr) {
    return arr.map(
        ({ _id, name, img, category, price, size }) => `
         
        
    `
        )
        .join('');
}
     

