import{a as g}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const m="https://food-boutique.b.goit.study/api";async function B(){try{return await g.get(`${m}/products/categories`)}catch(t){console.log(t.message)}}async function v(t){try{return(await g.get(`${m}/products/${t}`)).data}catch(e){console.log(e.message)}}async function A(){try{return await g.get(`${m}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function I(){try{return await g.get(`${m}/products/discount`)}catch(t){console.log(t.message)}}document.querySelector(".foot-form");document.querySelector(".modal-subscription");document.querySelector(".modal-unsubscription");document.querySelector(".modal-backdrop");document.querySelector(".body");document.body.style.overflow;const i={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};i.form&&i.form.addEventListener("input",O);x();async function x(){try{const e=(await B()).data;for(let r=0;r<e.length;r++)i.filterCatList.insertAdjacentHTML("beforeend",`<option class="filters-categories-option" value="${e[r]}">${e[r]}</option>`)}catch{console.log("err")}}const l={keyword:null,category:null,page:1,limit:6};async function O(){const t=i.filtersInput.value;console.log(t),l.keyword=t,t===""&&(l.keyword=null);const e=i.filtersCategories.value;l.category=e,e===""&&(l.category=null),localStorage.setItem("filters",JSON.stringify(l))}M();function M(){const t=JSON.parse(localStorage.getItem("filters"));i.filtersInput.value&&(i.filtersInput.value=t.keyword||""),i.filtersCategories&&(i.filtersCategories.value=t.category||"")}function L(t){return t.replace(/_/g," ")}async function T(t,e,r=1,c=6){const o=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${r}&limit=${c}`;try{const a=await(await fetch(o)).json(),u=a.totalPages;return a.results}catch(s){return console.error("Error fetching products:",s),[]}}async function H(t,e,r=1,c=6){const o=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${r}&limit=${c}`;try{const a=await(await fetch(o)).json(),u=a.totalPages;return a}catch(s){return console.error("Error fetching products:",s),[]}}function N(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function z(t){let e=L(t.category);return`
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
  `}const _=localStorage.getItem("filters"),p=JSON.parse(_);async function y(t=1){let e=p.keyword;p.keyword===null&&(e="");let r=p.category;p.category===null&&(r="");const c=N();try{const o=await T(e,r,t,c),s=await H(e,r,t,c),a=o,u=document.getElementById("productList");u.innerHTML="",a.forEach(q=>{u.innerHTML+=z(q)});const E=s.totalPages;renderPagination(E,t)}catch(o){console.error("Помилка:",o)}}document.addEventListener("DOMContentLoaded",()=>{y()});window.changePage=function(t){y(t),console.log(t)};window.addEventListener("resize",y);var P=document.createElement("script");P.src="../js/pagination.js";document.head.appendChild(P);function F(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function j(t){let e=L(t.category);return`
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
<ul class="pop-text-two-cat">
<li class="pop-text-size-pop">
          <p class="popular-text">Size:
          <span class="word">${t.size}</span></p></li>
          

          <li>
          <p class="popular-text">Popularity:
          <span class="word">${t.popularity}</span></p></li></ul>
          </div>

           <div class="popularname-price">
           </div>
           <div id="${t._id}" class="popular-icon-cont inBascet">
            <svg class="popular-icon" width="12" height="12">
              <use href="../icons.svg#icon-heroicons-solid_shopping-cart-mini"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  `}A().then(t=>t.data).then(t=>{const e=F(t,5),r=document.getElementById("popularContainer");e.forEach(c=>{r.innerHTML+=j(c)})}).catch(t=>{console.error(t.message)});function D(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function J(t){return`
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
          
          <div id="${t._id}" class="discount-icon-cont inBascet">
          <svg class="discount-icon" width="34" height="34">
            <use href="./icons.svg#icon-shopping-cart"></use>
          </svg>
          </div>

        </div>
      </div>
    `}I().then(t=>t.data).then(t=>{const e=D(t,2),r=document.getElementById("discountContainer");e.forEach(c=>{r.innerHTML+=J(c)})}).catch(t=>{console.error(t.message)});document.querySelector(".productlist-card");function R(t){try{console.log(t);let e=JSON.parse(localStorage.getItem("cart"))||[];console.log(e);const r={id:t,pieces:"1"};e.push(r),localStorage.setItem("cart",JSON.stringify(e))}catch(e){console.log(e)}}async function b(t,e){const r=document.querySelector(".modal-content");r.innerHTML="";const c=await v(t);r.innerHTML=W(c,e)}function W(t,e){return`
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
    `}const h=document.querySelector(".modal"),U=document.querySelector(".close-button");function Y(){h.classList.add("show-modal"),document.body.style.overflow="hidden"}function f(){h.classList.remove("show-modal"),document.body.style.overflow="auto"}function G(t){t.target===h&&f()}U.addEventListener("click",f);window.addEventListener("click",G);document.addEventListener("keydown",function(t){t.keyCode===27&&f()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",R(e)),t.target.addEventListener("click",f())});function K(t){return new Promise((e,r)=>{const c=document.querySelectorAll(t);if(c.length>0)e(c);else{const o=new MutationObserver(()=>{const s=document.querySelectorAll(t);s.length>0&&(o.disconnect(),e(s))});o.observe(document.documentElement,{childList:!0,subtree:!0})}})}K(".productlist-card").then(t=>{t.forEach(e=>{e.addEventListener("click",r=>{const c=r.currentTarget.dataset.productlistId;localStorage.getItem(c)?b(c,"Remove from"):b(c,"Add to"),Y()})})}).catch(t=>{console.error(t.message)});const d="cart";function V(t,e){localStorage.setItem(e,JSON.stringify(t))}const n={cartBlock:document.querySelector(".js-cart-block"),cartCounter:document.querySelector("span#cart-counter"),deleteAllBtn:document.querySelector(".delete-all-btn"),cartDeleteAllBlock:document.querySelector(".cart-delete-all-section"),cartListBlock:document.querySelector(".cart-list-block"),cartEmptyCart:document.querySelector(".cart-empty-cart"),yourOrderPrice:document.querySelector(".cart-total-price"),spanYourOrderPrice:document.querySelector("span#your-order-total-price"),cardDeleteOneBtn:document.querySelector(".carg-delete-all-btn")};w();function w(){n.cartDeleteAllBlock.setAttribute("hidden",""),n.yourOrderPrice.setAttribute("hidden",""),n.cartEmptyCart.removeAttribute("hidden","")}function Q(){n.cartDeleteAllBlock.removeAttribute("hidden",""),n.yourOrderPrice.removeAttribute("hidden",""),n.cartEmptyCart.setAttribute("hidden","")}X();async function X(){let t=await $(d);if(n.cartCounter.textContent=t.length,t.length===0){n.cartBlock.innerHTML=S(),w();return}Q(),k(),n.deleteAllBtn.addEventListener("click",Z)}async function k(){n.cartListBlock.innerHTML="";let t=$(d);console.log(t);for(const e of t){let r=e.id;console.log(r);try{const c=await v(r),o=et(c,r);n.cartListBlock.innerHTML+=o,document.querySelector(`.js-cart-block .cart-card[data-productlist-id="${r}"] .card-delete-all-btn`).addEventListener("click",()=>{tt(r)})}catch(c){console.error(c.message)}}C(t),n.cartCounter.textContent=t.length}function $(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function Z(){localStorage.removeItem(d),n.cartBlock.innerHTML=S(),n.cartCounter.textContent=0}async function tt(t){let e=$(d),r=e.findIndex(c=>c.id===t);r!==-1&&(e.splice(r,1),V(e,d),n.cartListBlock.innerHTML="",await k(),C(e),n.cartCounter.textContent=e.length,e.length===0&&(n.cartBlock.innerHTML=S(),w()))}async function C(t){try{let e=0;const r=t.map(o=>v(o.id));(await Promise.all(r)).forEach(o=>{let s=o.price;e+=s}),n.spanYourOrderPrice.textContent=`$${Number(e.toFixed(2))}`}catch(e){console.error(e.message)}}function S(){return`
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
    </div>`}function et(t){let e=rt(t.category);return`
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
  `}function rt(t){return t.replace(/_/g," ")}function ot(t){return new Promise((e,r)=>{const c=document.querySelectorAll(t);if(c.length>0)e(c);else{const o=new MutationObserver(()=>{const s=document.querySelectorAll(t);s.length>0&&(o.disconnect(),e(s))});o.observe(document.documentElement,{childList:!0,subtree:!0})}})}ot(".inBascet").then(t=>{t.forEach(e=>{e.addEventListener("click",r=>{r.currentTarget.id;let c=JSON.parse(localStorage.getItem("cart"))||[];console.log(c);const o={id:r.currentTarget.id,pieces:"1"};c.push(o),localStorage.setItem("cart",JSON.stringify(c))})})}).catch(t=>{console.error(t.message)});
//# sourceMappingURL=main-a0999334.js.map
