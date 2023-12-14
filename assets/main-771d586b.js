import{a as g}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerpolicy&&(s.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?s.credentials="include":c.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(c){if(c.ep)return;c.ep=!0;const s=r(c);fetch(c.href,s)}})();const f="https://food-boutique.b.goit.study/api";async function B(){try{return await g.get(`${f}/products/categories`)}catch(t){console.log(t.message)}}async function y(t){try{return(await g.get(`${f}/products/${t}`)).data}catch(e){console.log(e.message)}}async function x(){try{return await g.get(`${f}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function M(){try{return await g.get(`${f}/products/discount`)}catch(t){console.log(t.message)}}document.querySelector(".foot-form");document.querySelector(".modal-subscription");document.querySelector(".modal-unsubscription");document.querySelector(".modal-backdrop");document.querySelector(".body");document.body.style.overflow;const i={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};i.form&&i.form.addEventListener("input",k);i.form&&i.form.addEventListener("submit",k);T();async function T(){try{const e=(await B()).data;for(let r=0;r<e.length;r++)i.filterCatList.insertAdjacentHTML("beforeend",`<option class="filters-categories-option" value="${e[r]}">${e[r]}</option>`)}catch{console.log("err")}}const u={keyword:null,category:null,page:1,limit:6};async function k(){const t=i.filtersInput.value;console.log(t),u.keyword=t,t===""&&(u.keyword=null);const e=i.filtersCategories.value;u.category=e,e===""&&(u.category=null),localStorage.setItem("filters",JSON.stringify(u))}_();function _(){const t=JSON.parse(localStorage.getItem("filters"));i.filtersInput&&(i.filtersInput.value=t.keyword||""),i.filtersCategories&&(i.filtersCategories.value=t.category||"")}function C(t){return t.replace(/_/g," ")}async function H(t,e,r=1,o=6){const c=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${r}&limit=${o}`;try{const a=await(await fetch(c)).json(),l=a.totalPages;return a.results}catch(s){return console.error("Error fetching products:",s),[]}}async function N(t,e,r=1,o=6){const c=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${r}&limit=${o}`;try{const a=await(await fetch(c)).json(),l=a.totalPages;return a}catch(s){return console.error("Error fetching products:",s),[]}}function z(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function j(t){let e=C(t.category);return`
    <div class="productlist-card modalOn" data-productlist-id="${t._id}">
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
  `}const F=localStorage.getItem("filters"),m=JSON.parse(F);async function h(t=1){let e=m.keyword;m.keyword===null&&(e="");let r=m.category;m.category===null&&(r="");const o=z();try{const c=await H(e,r,t,o),s=await N(e,r,t,o),a=c,l=document.getElementById("productList");l.innerHTML="",a.forEach(A=>{l.innerHTML+=j(A)});const O=s.totalPages;renderPagination(O,t)}catch(c){console.error("Помилка:",c)}}document.addEventListener("DOMContentLoaded",()=>{h()});window.changePage=function(t){h(t),console.log(t)};window.addEventListener("resize",h);var E=document.createElement("script");E.src="../js/pagination.js";document.head.appendChild(E);function D(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function J(t){let e=C(t.category);return`
      <div class="popular-card modalOpopul" data-productlist-id="${t._id}">
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
  `}x().then(t=>t.data).then(t=>{const e=D(t,5),r=document.getElementById("popularContainer");e.forEach(o=>{r.innerHTML+=J(o)})}).catch(t=>{console.error(t.message)});function R(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function W(t){return`
      <div class="product-card modalOndisc" data-productlist-id="${t._id}">
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
    `}M().then(t=>t.data).then(t=>{const e=R(t,2),r=document.getElementById("discountContainer");e.forEach(o=>{r.innerHTML+=W(o)})}).catch(t=>{console.error(t.message)});document.querySelector(".productlist-card");function U(t){try{console.log(t);let e=JSON.parse(localStorage.getItem("cart"))||[];console.log(e);const r={id:t,pieces:"1"};e.push(r),localStorage.setItem("cart",JSON.stringify(e))}catch(e){console.log(e)}}async function d(t,e){const r=document.querySelector(".modal-content");r.innerHTML="";const o=await y(t);r.innerHTML=Y(o,e)}function Y(t,e){return`
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
    `}const S=document.querySelector(".modal"),G=document.querySelector(".close-button");function $(){S.classList.add("show-modal"),document.body.style.overflow="hidden"}function v(){S.classList.remove("show-modal"),document.body.style.overflow="auto"}function K(t){t.target===S&&v()}G.addEventListener("click",v);window.addEventListener("click",K);document.addEventListener("keydown",function(t){t.keyCode===27&&v()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",U(e)),t.target.addEventListener("click",v())});function w(t){return new Promise((e,r)=>{const o=document.querySelectorAll(t);if(o.length>0)e(o);else{const c=new MutationObserver(()=>{const s=document.querySelectorAll(t);s.length>0&&(c.disconnect(),e(s))});c.observe(document.documentElement,{childList:!0,subtree:!0})}})}w(".modalOn").then(t=>{t.forEach(e=>{e.addEventListener("click",r=>{const o=r.currentTarget.dataset.productlistId;localStorage.getItem(o)?d(o,"Remove from"):d(o,"Add to"),$()})})}).catch(t=>{console.error(t.message)});w(".modalOndisc").then(t=>{t.forEach(e=>{e.addEventListener("click",r=>{const o=r.currentTarget.dataset.productlistId;localStorage.getItem(o)?d(o,"Remove from"):d(o,"Add to"),$()})})}).catch(t=>{console.error(t.message)});w(".modalOpopul").then(t=>{t.forEach(e=>{e.addEventListener("click",r=>{const o=r.currentTarget.dataset.productlistId;localStorage.getItem(o)?d(o,"Remove from"):d(o,"Add to"),$()})})}).catch(t=>{console.error(t.message)});const p="cart";function V(t,e){localStorage.setItem(e,JSON.stringify(t))}const n={cartBlock:document.querySelector(".js-cart-block"),cartCounter:document.querySelector("span#cart-counter"),deleteAllBtn:document.querySelector(".delete-all-btn"),cartDeleteAllBlock:document.querySelector(".cart-delete-all-section"),cartListBlock:document.querySelector(".cart-list-block"),cartEmptyCart:document.querySelector(".cart-empty-cart"),yourOrderPrice:document.querySelector(".cart-total-price"),spanYourOrderPrice:document.querySelector("span#your-order-total-price"),cardDeleteOneBtn:document.querySelector(".carg-delete-all-btn")};b();function b(){n.cartDeleteAllBlock&&n.cartDeleteAllBlock.setAttribute("hidden",""),n.yourOrderPrice&&n.yourOrderPrice.setAttribute("hidden",""),n.cartEmptyCart&&n.cartEmptyCart.removeAttribute("hidden","")}function Q(){n.cartDeleteAllBlock.removeAttribute("hidden",""),n.yourOrderPrice.removeAttribute("hidden",""),n.cartEmptyCart.setAttribute("hidden","")}X();async function X(){let t=await L(p);if(n.cartCounter.textContent=t.length,t.length===0){n.cartBlock.innerHTML=P(),b();return}Q(),I(),n.deleteAllBtn.addEventListener("click",Z)}async function I(){n.cartListBlock.innerHTML="";let t=await L(p);for(const e of t){let r=e.id;try{const o=await y(r),c=et(o,r);n.cartListBlock.innerHTML+=c,document.querySelector(`.js-cart-block .cart-card[data-productlist-id="${r}"] .card-delete-all-btn`).addEventListener("click",()=>{tt(r);const a=document.querySelector(".js-cart-block .cart-list"),l=a.querySelector(`.cart-card[data-productlist-id="${r}"]`);a.removeChild(l)})}catch(o){console.error(o.message)}}q(t),n.cartCounter.textContent=t.length}function L(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function Z(){localStorage.removeItem(p),n.cartBlock.innerHTML=P(),n.cartCounter.textContent=0}async function tt(t){let e=L(p),r=e.findIndex(o=>o.id===t);r!==-1&&(e.splice(r,1),V(e,p),n.cartListBlock.innerHTML="",await I(),q(e),n.cartCounter.textContent=e.length,e.length===0&&(n.cartBlock.innerHTML=P(),b()))}async function q(t){try{let e=0;const r=t.map(c=>y(c.id));(await Promise.all(r)).forEach(c=>{let s=c.price;e+=s}),n.spanYourOrderPrice.textContent=`$${Number(e.toFixed(2))}`}catch(e){console.error(e.message)}}function P(){return`
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
  `}function rt(t){return t.replace(/_/g," ")}function ot(t){return new Promise((e,r)=>{const o=document.querySelectorAll(t);if(o.length>0)e(o);else{const c=new MutationObserver(()=>{const s=document.querySelectorAll(t);s.length>0&&(c.disconnect(),e(s))});c.observe(document.documentElement,{childList:!0,subtree:!0})}})}ot(".inBascet").then(t=>{t.forEach(e=>{e.addEventListener("click",r=>{r.currentTarget.id;let o=JSON.parse(localStorage.getItem("cart"))||[];console.log(o);const c={id:r.currentTarget.id,pieces:"1"};o.push(c),localStorage.setItem("cart",JSON.stringify(o))})})}).catch(t=>{console.error(t.message)});
//# sourceMappingURL=main-771d586b.js.map
