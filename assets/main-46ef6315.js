import{a as g}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerpolicy&&(s.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?s.credentials="include":c.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(c){if(c.ep)return;c.ep=!0;const s=o(c);fetch(c.href,s)}})();const m="https://food-boutique.b.goit.study/api";async function q(){try{return await g.get(`${m}/products/categories`)}catch(t){console.log(t.message)}}async function y(t){try{return(await g.get(`${m}/products/${t}`)).data}catch(e){console.log(e.message)}}async function A(){try{return await g.get(`${m}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function I(){try{return await g.get(`${m}/products/discount`)}catch(t){console.log(t.message)}}document.querySelector(".foot-form");document.querySelector(".modal-subscription");document.querySelector(".modal-unsubscription");document.querySelector(".modal-backdrop");document.querySelector(".body");document.body.style.overflow;const a={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};a.form&&a.form.addEventListener("submit",O);B();async function B(){try{const e=(await q()).data;for(let o=0;o<e.length;o++)a.filterCatList.insertAdjacentHTML("beforeend",`<option class="filters-categories-option" value="${e[o]}">${e[o]}</option>`)}catch{console.log("err")}}const d={keyword:null,category:null,page:1,limit:6};async function O(){const t=a.filtersInput.value;console.log(t),d.keyword=t,t===""&&(d.keyword=null);const e=a.filtersCategories.value;d.category=e,e===""&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d))}x();function x(){const t=JSON.parse(localStorage.getItem("filters"));a.filtersInput&&(a.filtersInput.value=t.keyword||""),a.filtersCategories&&(a.filtersCategories.value=t.category||"")}function w(t){return t.replace(/_/g," ")}async function M(t,e,o=1,r=6){const c=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${o}&limit=${r}`;try{const i=await(await fetch(c)).json(),u=i.totalPages;return i.results}catch(s){return console.error("Error fetching products:",s),[]}}async function T(t,e,o=1,r=6){const c=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${o}&limit=${r}`;try{const i=await(await fetch(c)).json(),u=i.totalPages;return i}catch(s){return console.error("Error fetching products:",s),[]}}function N(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function z(t){let e=w(t.category);return`
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
  `}const _=localStorage.getItem("filters"),p=JSON.parse(_);async function h(t=1){let e=p.keyword;p.keyword===null&&(e="");let o=p.category;p.category===null&&(o="");const r=N();try{const c=await M(e,o,t,r),s=await T(e,o,t,r),i=c,u=document.getElementById("productList");u.innerHTML="",i.forEach(C=>{u.innerHTML+=z(C)});const E=s.totalPages;renderPagination(E,t)}catch(c){console.error("Помилка:",c)}}document.addEventListener("DOMContentLoaded",()=>{h()});window.changePage=function(t){h(t),console.log(t)};window.addEventListener("resize",h);var b=document.createElement("script");b.src="./js/pagination.js";document.head.appendChild(b);function F(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function H(t){let e=w(t.category);return`
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
              <use href="/icons.svg#icon-heroicons-solid_shopping-cart-mini"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  `}A().then(t=>t.data).then(t=>{const e=F(t,5),o=document.getElementById("popularContainer");e.forEach(r=>{o.innerHTML+=H(r)})}).catch(t=>{console.error(t.message)});function j(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function D(t){return`
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
    `}I().then(t=>t.data).then(t=>{const e=j(t,2),o=document.getElementById("discountContainer");e.forEach(r=>{o.innerHTML+=D(r)})}).catch(t=>{console.error(t.message)});document.querySelector(".productlist-card");function J(t){try{console.log(t);let e=JSON.parse(localStorage.getItem("cart"))||[];console.log(e);const o={id:t,pieces:"1"};e.push(o),localStorage.setItem("cart",JSON.stringify(e))}catch(e){console.log(e)}}async function S(t,e){const o=document.querySelector(".modal-content");o.innerHTML="";const r=await y(t);o.innerHTML=R(r,e)}function R(t,e){return`
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
    `}const $=document.querySelector(".modal"),W=document.querySelector(".close-button");function U(){$.classList.add("show-modal"),document.body.style.overflow="hidden"}function f(){$.classList.remove("show-modal"),document.body.style.overflow="auto"}function Y(t){t.target===$&&f()}W.addEventListener("click",f);window.addEventListener("click",Y);document.addEventListener("keydown",function(t){t.keyCode===27&&f()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",J(e)),t.target.addEventListener("click",f())});function G(t){return new Promise((e,o)=>{const r=document.querySelectorAll(t);if(r.length>0)e(r);else{const c=new MutationObserver(()=>{const s=document.querySelectorAll(t);s.length>0&&(c.disconnect(),e(s))});c.observe(document.documentElement,{childList:!0,subtree:!0})}})}G(".productlist-card").then(t=>{t.forEach(e=>{e.addEventListener("click",o=>{const r=o.currentTarget.dataset.productlistId;localStorage.getItem(r)?S(r,"Remove from"):S(r,"Add to"),U()})})}).catch(t=>{console.error(t.message)});const l="cart";function K(t,e){localStorage.setItem(e,JSON.stringify(t))}const n={cartBlock:document.querySelector(".js-cart-block"),cartCounter:document.querySelector("span#cart-counter"),deleteAllBtn:document.querySelector(".delete-all-btn"),cartDeleteAllBlock:document.querySelector(".cart-delete-all-section"),cartListBlock:document.querySelector(".cart-list-block"),cartEmptyCart:document.querySelector(".cart-empty-cart"),yourOrderPrice:document.querySelector(".cart-total-price"),spanYourOrderPrice:document.querySelector("span#your-order-total-price"),cardDeleteOneBtn:document.querySelector(".carg-delete-all-btn")};n.deleteAllBtn.addEventListener("click",X);L();function L(){n.cartDeleteAllBlock.setAttribute("hidden",""),n.yourOrderPrice.setAttribute("hidden",""),n.cartEmptyCart.removeAttribute("hidden","")}function V(){n.cartDeleteAllBlock.removeAttribute("hidden",""),n.yourOrderPrice.removeAttribute("hidden",""),n.cartEmptyCart.setAttribute("hidden","")}Q();async function Q(){let t=await v(l);if(console.log(t.length),n.cartCounter.textContent=t.length,t.length===0){n.cartBlock.innerHTML=k(),L();return}V(),P(),tt()}async function P(){let t=v(l);console.log(t),t.forEach(e=>{let o=e.id;console.log(o),y(o).then(r=>{const c=et(r);n.cartListBlock.innerHTML+=c})})}function v(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function X(){localStorage.removeItem(l),n.cartBlock.innerHTML=k(),n.cartCounter.forEach(t=>t.textContent=0)}Z();function Z(t){let e=v(l);console.log(e);let o=e.findIndex(r=>r.id===t);console.log(o),o!==-1&&(console.log(e.splice(o,1)),console.log(e),K(e,l),n.cartListBlock.innerHTML="",P())}async function tt(){let t=0,e=v(l);console.log(e),e.forEach(o=>{let r=o.id;y(r).then(c=>{let s=c.price;t+=s,n.spanYourOrderPrice.textContent=`$${Number(t.toFixed(2))}`})})}function k(){return`
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
    </div>`}function et(t){let e=ot(t.category);return`
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
  `}function ot(t){return t.replace(/_/g," ")}function rt(t){return new Promise((e,o)=>{const r=document.querySelectorAll(t);if(r.length>0)e(r);else{const c=new MutationObserver(()=>{const s=document.querySelectorAll(t);s.length>0&&(c.disconnect(),e(s))});c.observe(document.documentElement,{childList:!0,subtree:!0})}})}rt(".inBascet").then(t=>{t.forEach(e=>{e.addEventListener("click",o=>{o.currentTarget.id;let r=JSON.parse(localStorage.getItem("cart"))||[];console.log(r);const c={id:o.currentTarget.id,pieces:"1"};r.push(c),localStorage.setItem("cart",JSON.stringify(r))})})}).catch(t=>{console.error(t.message)});
//# sourceMappingURL=main-46ef6315.js.map
