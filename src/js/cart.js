

// document.addEventListener('DOMContentLoaded', () => {
    const refs = {
        cartBlock: document.querySelector(".js-cart-block"),
        cartCounter: document.querySelector("span#cart-counter"),
        deleteAllBtn: document.querySelector(".delete-all-btn"),
        cartDeleteAllBlock: document.querySelector(".cart-delete-all-section"),
        cartListBlock: document.querySelector(".cart-list-block"),
    }
// });
console.log(cartCounter);
const STORAGE_KEY = "cart";
let counter = 0;
// локал сторидж
export function saveDataInLS(data, key) {
    localStorage.setItem(key, JSON.stringify(data));
}
const newProduct = [{
    _id: "640c2dd963a319ea671e37a9",
}]
    
saveDataInLS(newProduct, STORAGE_KEY);

cartUsage();

// 1. руководство корзиной
 async function cartUsage() {
    let cartArr = getDataFromLS(STORAGE_KEY);
     console.log(cartArr.length);
     counter = cartArr.length
    refs.cartCounter.textContent = counter;
    //  productQuantity(cartArr);
     console.log(counter);

    if (!cartArr.length) {
        refs.cartBlock.innerHTML = createMarkupEmptyCart();
        return;
    }
    renderCard(cartArr);
    }

function renderCard() {
    cartDeleteAllBlock.insertAdjacentHTML("beforeend", createMarcupDeleteAllBtn());

    const cartList = document.createElement("ul");
        cartList.classList.add("cart-list");
        cartList.insertAdjacentHTML("beforeend", createMarkupCartList(cartArr));
   
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
  const deleteAllProducts = () => {
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

// розмітка картки товару
function createMarkupCartList(arr) {
    return arr.map(
        ({ _id, name, img, category, price, size }) => `
         
         <li class="cart__products-item" data-id="${_id}">
                <div class="cart__item-space">
                    <img src="${img}" alt="${name}" class="cart__item-img">
                </div>
                <div class="cart__item-info">
                    <h3 class="cart__item-title">${name}</h3>
                    <ul class="cart__item-descr">
                        <li class="cart__item">
                            <p class="cart__item-name">Category:</p>
                            <p class="cart__item-value">${normalizeCategory(
                                category
                            )}</p>
                        </li>
                        <li class="cart__item">
                            <p class="cart__item-name">Size:</p>
                            <p class="cart__item-value">${size}</p>
                        </li>
                    </ul> 
                    <div class="cart__item-main">
                        <span class="cart__item-price">$${price}</span>
                        <div class="cart__item-quantity">
                            <button class="cart__item-button">
                                <svg class="cart__item-minus">
                                    <use href="${icons}#icon-minus"></use>
                                </svg>
                            </button>
                            <span class="cart__item-number">1</span>
                            <button class="cart__item-button">
                                <svg class="cart__item-minus">
                                    <use href="${icons}#icon-plus"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <button class="cart__item-close">
                    <svg class="cart__item-icon">
                        <use href="${icons}#icon-close"></use>
                    </svg>
                </button>
            </li>
            </ul>
    `
        )
        .join('');
}
     

