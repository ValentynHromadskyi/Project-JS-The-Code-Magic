import { getProductById } from './api.js';


const STORAGE_KEY = "cart";

// запис ID в локал сторидж
export function saveDataInLS(data, key) {
    localStorage.setItem(key, JSON.stringify(data));
}
    
const refs = {
        cartBlock: document.querySelector(".js-cart-block"),
        cartCounter: document.querySelector("span#cart-counter"),
        deleteAllBtn: document.querySelector(".delete-all-btn"),
        cartDeleteAllBlock: document.querySelector(".cart-delete-all-section"),
        cartListBlock: document.querySelector(".cart-list-block"),
        cartEmptyCart: document.querySelector(".cart-empty-cart"),
        yourOrderPrice: document.querySelector(".cart-total-price"),
        spanYourOrderPrice: document.querySelector("span#your-order-total-price"),
        cardDeleteOneBtn: document.querySelector(".carg-delete-all-btn"),
    }

// showBtnLoad();
hideBtnLoad();
function hideBtnLoad() {
    if (refs.cartDeleteAllBlock) {
        refs.cartDeleteAllBlock.setAttribute('hidden', '');
    }
    if (refs.yourOrderPrice) {
        refs.yourOrderPrice.setAttribute('hidden', '');
    }
    if (refs.cartEmptyCart) {
        refs.cartEmptyCart.removeAttribute('hidden', '');
    }
}


function showBtnLoad() {
    refs.cartDeleteAllBlock.removeAttribute('hidden', '');
    refs.yourOrderPrice.removeAttribute('hidden', '');
    refs.cartEmptyCart.setAttribute('hidden', '');
}

cartUsage();

// використання корзини
export async function cartUsage() {
    let cartArr = await getDataFromLS(STORAGE_KEY);
            
    // каунтер - productQuantity(cartArr);
    refs.cartCounter.textContent = cartArr.length;

    if (cartArr.length === 0) {
        refs.cartBlock.innerHTML = createMarkupEmptyCart();
        hideBtnLoad();
        return;
     }
     showBtnLoad();
    renderCards(cartArr);
  
 refs.deleteAllBtn.addEventListener("click", deleteAllProducts);
}

async function renderCards() {
  refs.cartListBlock.innerHTML = "";

  let cartArr = await getDataFromLS(STORAGE_KEY);

  for (const cartArrItem of cartArr) {
    let id = cartArrItem.id;

    try {
      const response = await getProductById(id);
      const cartId = renderProductCard(response, id);
      refs.cartListBlock.innerHTML += cartId;

      const deleteBtn = document.querySelector(`.js-cart-block .cart-card[data-productlist-id="${id}"] .card-delete-all-btn`);
      deleteBtn.addEventListener("click", () => {
        deleteOneProduct(id);

        // Remove the removed card from `cartListBlock`
        const cartList = document.querySelector(".js-cart-block .cart-list");
        const cartItem = cartList.querySelector(`.cart-card[data-productlist-id="${id}"]`);
        cartList.removeChild(cartItem);
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  sum(cartArr);
  refs.cartCounter.textContent = cartArr.length;
}

 function getDataFromLS(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.log(error.message);
    }
}


// Видалення ВСІХ товарів з корзини
 function deleteAllProducts() {
    localStorage.removeItem(STORAGE_KEY);
    refs.cartBlock.innerHTML = createMarkupEmptyCart();
    refs.cartCounter.textContent = 0; 
}


 // Видалення ОДНОГО товар з корзини
async function deleteOneProduct(id) {
    let cartArr = getDataFromLS(STORAGE_KEY);
    let productIndex = cartArr.findIndex(item => item.id === id);

    if (productIndex !== -1) {
        cartArr.splice(productIndex, 1);
        saveDataInLS(cartArr, STORAGE_KEY);
        refs.cartListBlock.innerHTML = ""; 
        await renderCards(cartArr);
        sum(cartArr);
        refs.cartCounter.textContent = cartArr.length; 

        if (cartArr.length === 0) {
            refs.cartBlock.innerHTML = createMarkupEmptyCart();
            hideBtnLoad();
        }
    }
}

// розрахунок суми
async function sum(cartArr) {
    try {
        let totalSum = 0;
        const promises = cartArr.map(cartArrItem => getProductById(cartArrItem.id));

        const responses = await Promise.all(promises);

        responses.forEach(response => {
            let productPrice = response.price;
            totalSum += productPrice;
        });

        refs.spanYourOrderPrice.textContent = `$${Number(totalSum.toFixed(2))}`;
    } catch (error) {
        console.error(error.message);
    }
}

// розмітка пустої корзини
function createMarkupEmptyCart() {
    return `
    <div class="js-cart-block">
      <div class="cart-empty-cart">
        <div class="cart-img-empty-cart">
          <img
            class="img-shopping-cart"
            src="/img/cart/yellow-shopping-basket.png"
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
     
    let result = cartReplaceUnderscoresWithSpaces(data.category);
  return `
    <div class="cart-card" data-productlist-id="${data._id}">
      <div class="cart-background">
        <img src="${data.img}" alt="${data.name}" class="cart-image">
      </div>
      <div class="cart-details">
        <div class="cart-details-text">
        <div class="cart-close-icon">
          <h2 class="cart-name">${data.name}</h2>
          <button type="button" class="card-delete-all-btn">
          <svg class="card-delete-close-icon">
            <use href="./icons.svg#icon-close-mini"></use>
          </svg>
        </button>
          </div>
          <div class="cart-pl-det">
            <div class="cart-category-cont">
             <p class="cart-category">Category:
                <span class="cart-word">${result}</span></p></div>
              <div>  
             <p class="cart-size">Size:
                <span class="cart-word">${data.size}</span></p></div>
            </div>
          </div>
          <div class="cart-price">
          <p class="cart-price">$${data.price.toFixed(2)}</p> 
          </div>
        </div>
      </div>
    </div>
  `;
    
}
     

function cartReplaceUnderscoresWithSpaces(inputString) {
  let outputString = inputString.replace(/_/g, ' ');
  return outputString;
}






// async function renderCards() {
//   refs.cartListBlock.innerHTML = "";
//     let cartArr = getDataFromLS(STORAGE_KEY);
    
//     for (const cartArrItem of cartArr) {
//         let id = cartArrItem.id;
//         console.log(id);

//         try {
//             const response = await getProductById(id);
//             const cartId = renderProductCard(response, id);
//             refs.cartListBlock.innerHTML += cartId;

//             const deleteBtn = document.querySelector(`.js-cart-block .cart-card[data-productlist-id="${id}"] .card-delete-all-btn`);
//             deleteBtn.addEventListener("click", () => {
//                 deleteOneProduct(id);
//             });

//         } catch (error) {
//             console.error(error.message);
//         }
//     }

//     sum(cartArr);

//     refs.cartCounter.textContent = cartArr.length;
// }
// 