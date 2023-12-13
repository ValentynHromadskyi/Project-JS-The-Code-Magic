import{a as g}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const m="https://food-boutique.b.goit.study/api";async function I(){try{return await g.get(`${m}/products/categories`)}catch(t){console.log(t.message)}}async function y(t){try{return(await g.get(`${m}/products/${t}`)).data}catch(e){console.log(e.message)}}async function q(){try{return await g.get(`${m}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function A(){try{return await g.get(`${m}/products/discount`)}catch(t){console.log(t.message)}}document.querySelector(".foot-form");document.querySelector(".modal-subscription");document.querySelector(".modal-unsubscription");document.querySelector(".modal-backdrop");document.querySelector(".body");document.body.style.overflow;const a={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};a.form&&a.form.addEventListener("submit",O);B();async function B(){try{const e=(await I()).data;for(let o=0;o<e.length;o++){let c=h(e[o]);a.filterCatList.insertAdjacentHTML("beforeend",`<option class="filters-categories-option" value="${c}">${c}</option>`)}}catch{console.log("err")}}const d={keyword:null,category:null,page:1,limit:6};async function O(){const t=a.filtersInput.value;console.log(t),d.keyword=t,t===""&&(d.keyword=null);const e=a.filtersCategories.value;d.category=e,e===""&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d))}x();function x(){const t=JSON.parse(localStorage.getItem("filters"));a.filtersInput&&(a.filtersInput.value=t.keyword||""),a.filtersCategories&&(a.filtersCategories.value=t.category||"")}function h(t){return t.replace(/_/g," ")}async function M(t,e,o=1,c=6){const r=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${o}&limit=${c}`;try{const i=await(await fetch(r)).json(),u=i.totalPages;return i.results}catch(s){return console.error("Error fetching products:",s),[]}}async function T(t,e,o=1,c=6){const r=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${o}&limit=${c}`;try{const i=await(await fetch(r)).json(),u=i.totalPages;return i}catch(s){return console.error("Error fetching products:",s),[]}}function N(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function z(t){let e=h(t.category);return`
    <div class="productlist-card" data-productlist-id="${t._id}">
      <div class="productlist-background">
        <img src="${t.img}" alt="${t.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${t.name}</h2>
          <div class="pl-det">
          
          <div class="cat-cont">
          <p class="productlist-category">Category:
          <span class="word">${e}</span></p>

          <p class="productlist-size">Size:
          <span class="word">${t.size}</span></p>
          </div>

          <div class="popularity-cont">
          <p class="productlist-popularity">Popularity:
          <span class="word">${t.popularity}</span></p>
          </div>

          </div>
          <div class="price-icon">
          <p class="productlist-price">$${t.price.toFixed(2)}</p>
          <div id="${t._id}" class="price-icon-cont inBascet">
          <svg class="productlist-icon" width="18" height="18">
            <use href="./icons.svg#icon-shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `}const H=localStorage.getItem("filters"),p=JSON.parse(H);async function S(t=1){let e=p.keyword;p.keyword===null&&(e="");let o=p.category;p.category===null&&(o="");const c=N();try{const r=await M(e,o,t,c),s=await T(e,o,t,c),i=r,u=document.getElementById("productList");u.innerHTML="",i.forEach(E=>{u.innerHTML+=z(E)});const C=s.totalPages;console.log(t),renderPagination(C,t)}catch(r){console.error("Помилка:",r)}}document.addEventListener("DOMContentLoaded",()=>{S()});window.changePage=function(t){S(t),console.log(t)};window.addEventListener("resize",S);var b=document.createElement("script");b.src="/js/pagination.js";document.head.appendChild(b);function _(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function F(t){let e=h(t.category);return`
      <div class="popular-card">
       <div class="popular-background">
        <img src="${t.img}" alt="${t.name}" class="popular-img">
      </div>
      <div class="popular-descript">
        <div class="popular-descript-text">
          <p class="popular-name">${t.name}</p>
          <div class="pop-frame">

          <div class="category-cont">
          <p class="popular-text">Category:
          <span class="word">${e}</span></p>

          <p class="popular-text">Size:
          <span class="word">${t.size}</span></p>
          

          
          <p class="popular-text">Popularity:
          <span class="word">${t.popularity}</span></p>
          </div>

           <div class="popularname-price">
           </div>
          <div class="popular-icon-cont">
            <svg class="popular-icon" width="12" height="12">
              <use href="../icons.svg#icon-heroicons-solid_shopping-cart-mini"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  `}q().then(t=>t.data).then(t=>{const e=_(t,5),o=document.getElementById("popularContainer");e.forEach(c=>{o.innerHTML+=F(c)})}).catch(t=>{console.error(t.message)});function D(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function j(t){return`
      <div class="product-card">
        <div class="product-background">

        <div class="discount-label">
      <svg class="dicount-label-icon">
      <use href="./icons.svg#icon-discount"></use>
      </svg>
      </div>

          <img src="${t.img}" alt="${t.name}" class="product-image">
        </div>
        <div class="product-details">
          <div class="details-text">

          <div class="name-price">
          <h2 class="product-name">${t.name}</h2>
          <p class="product-price">$${t.price.toFixed(2)}</p>
          </div>

          <div class="discount-icon-cont">
          <svg class="discount-icon" width="34" height="34">
            <use href="./icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          </div>

        </div>
      </div>
    `}A().then(t=>t.data).then(t=>{const e=D(t,2),o=document.getElementById("discountContainer");e.forEach(c=>{o.innerHTML+=j(c)})}).catch(t=>{console.error(t.message)});function J(t){try{localStorage.getItem(t)?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(t))}catch(e){console.log(e)}}async function w(t,e){const o=document.querySelector(".modal-content");o.innerHTML="";const c=await y(t);o.innerHTML=R(c,e)}function R(t,e){return`
    <div class="modal-product-img">
      <img src="${t.img}" alt="${t.name}" />
    </div>
    <div class="modal-product-info">
        <h4 class="modal-product-title">${t.name}</h4>
      <div class="modal-product-characteristics">
        <div>Category: <span>${t.category}</span></div>
        <div>Size: <span>${t.size}</span></div>
        <div>Popularity: <span>${t.popularity}</span></div>
      </div>
      <p class="modal-product-description">
      ${t.desc}
      </p>
    </div>
    <div class="modal-product-price">$${t.price.toFixed(2)}</div>
    <button class="modal-product-button" data-productlist-id="${t._id}"> ${e}<svg class="modal-product-button-icon">
    <use class="modal-product-button-icon" href="./icons.svg#icon-heroicons-solid_shopping-cart"></use>
  </svg></button>
    `}const $=document.querySelector(".modal"),W=document.querySelector(".close-button");function U(){$.classList.add("show-modal"),document.body.style.overflow="hidden"}function f(){$.classList.remove("show-modal"),document.body.style.overflow="auto"}document.querySelectorAll(".productlist-card").forEach(t=>{t.addEventListener("click",function(e){if(t===e.target||t.contains(e.target)){const o=t.dataset.productlistId;localStorage.getItem(o)?w(o,"Remove from"):w(o,"Add to"),U()}})});function Y(t){t.target===$&&f()}W.addEventListener("click",f);window.addEventListener("click",Y);document.addEventListener("keydown",function(t){t.keyCode===27&&f()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",J(e)),t.target.addEventListener("click",f())});const l="cart";function G(t,e){localStorage.setItem(e,JSON.stringify(t))}const n={cartBlock:document.querySelector(".js-cart-block"),cartCounter:document.querySelector("span#cart-counter"),deleteAllBtn:document.querySelector(".delete-all-btn"),cartDeleteAllBlock:document.querySelector(".cart-delete-all-section"),cartListBlock:document.querySelector(".cart-list-block"),cartEmptyCart:document.querySelector(".cart-empty-cart"),yourOrderPrice:document.querySelector(".cart-total-price"),spanYourOrderPrice:document.querySelector("span#your-order-total-price"),cardDeleteOneBtn:document.querySelector(".carg-delete-all-btn")};n.deleteAllBtn.addEventListener("click",Q);L();function L(){n.cartDeleteAllBlock.setAttribute("hidden",""),n.yourOrderPrice.setAttribute("hidden",""),n.cartEmptyCart.removeAttribute("hidden","")}function K(){n.cartDeleteAllBlock.removeAttribute("hidden",""),n.yourOrderPrice.removeAttribute("hidden",""),n.cartEmptyCart.setAttribute("hidden","")}V();async function V(){let t=await v(l);if(console.log(t.length),n.cartCounter.textContent=t.length,t.length===0){n.cartBlock.innerHTML=k(),L();return}K(),P(),Z()}async function P(){let t=v(l);console.log(t),t.forEach(e=>{let o=e.id;console.log(o),y(o).then(c=>{const r=tt(c);n.cartListBlock.innerHTML+=r})})}function v(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function Q(){localStorage.removeItem(l),n.cartBlock.innerHTML=k(),n.cartCounter.forEach(t=>t.textContent=0)}X();function X(t){let e=v(l);console.log(e);let o=e.findIndex(c=>c.id===t);console.log(o),o!==-1&&(console.log(e.splice(o,1)),console.log(e),G(e,l),n.cartListBlock.innerHTML="",P())}async function Z(){let t=0,e=v(l);console.log(e),e.forEach(o=>{let c=o.id;y(c).then(r=>{let s=r.price;t+=s,n.spanYourOrderPrice.textContent=`$${Number(t.toFixed(2))}`})})}function k(){return`
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
    </div>`}function tt(t){let e=et(t.category);return`
    <div class="cart-card" data-productlist-id="${t._id}">
      <div class="cart-background">
        <img src="${t.img}" alt="${t.name}" class="cart-image">
      </div>
      <div class="cart-details">
        <div class="cart-details-text">
        <div class="cart-close-icon">
          <h2 class="cart-name">${t.name}</h2>
          <button type="button" class="card-delete-all-btn">
          <svg class="card-delete-close-icon">
            <use href="./icons.svg#icon-close-mini"></use>
          </svg>
        </button>
          </div>
          <div class="cart-pl-det">
            <div class="cart-category-cont">
             <p class="cart-category">Category:
                <span class="cart-word">${e}</span></p></div>
              <div>  
             <p class="cart-size">Size:
                <span class="cart-word">${t.size}</span></p></div>
            </div>
          </div>
          <div class="cart-price">
          <p class="cart-price">$${t.price.toFixed(2)}</p> 
          </div>
        </div>
      </div>
    </div>
  `}function et(t){return t.replace(/_/g," ")}function ot(t){return new Promise((e,o)=>{const c=document.querySelectorAll(t);if(c.length>0)e(c);else{const r=new MutationObserver(()=>{const s=document.querySelectorAll(t);s.length>0&&(r.disconnect(),e(s))});r.observe(document.documentElement,{childList:!0,subtree:!0})}})}ot(".inBascet").then(t=>{t.forEach(e=>{e.addEventListener("click",o=>{const c={id:o.currentTarget.id,pieces:"1"};console.log(c);let r=JSON.parse(localStorage.getItem("cart"))||[];console.log(r);const s={id:o.currentTarget.id,pieces:"1"};r.push(s),localStorage.setItem("cart",JSON.stringify(r))})})}).catch(t=>{console.error(t.message)});
//# sourceMappingURL=main-614c85b5.js.map
