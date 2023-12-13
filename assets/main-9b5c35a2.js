import{a as p}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerpolicy&&(s.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?s.credentials="include":c.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(c){if(c.ep)return;c.ep=!0;const s=r(c);fetch(c.href,s)}})();const g="https://food-boutique.b.goit.study/api";async function A(){try{return await p.get(`${g}/products/categories`)}catch(t){console.log(t.message)}}async function y(t){try{return(await p.get(`${g}/products/${t}`)).data}catch(e){console.log(e.message)}}async function I(){try{return await p.get(`${g}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function B(){try{return await p.get(`${g}/products/discount`)}catch(t){console.log(t.message)}}document.querySelector(".foot-form");document.querySelector(".modal-subscription");document.querySelector(".modal-unsubscription");document.querySelector(".modal-backdrop");document.querySelector(".body");document.body.style.overflow;const a={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};a.form&&a.form.addEventListener("submit",x);O();async function O(){try{const e=(await A()).data;for(let r=0;r<e.length;r++){let o=h(e[r]);a.filterCatList.insertAdjacentHTML("beforeend",`<option class="filters-categories-option" value="${o}">${o}</option>`)}}catch{console.log("err")}}const d={keyword:null,category:null,page:1,limit:6};async function x(){const t=a.filtersInput.value;console.log(t),d.keyword=t,t===""&&(d.keyword=null);const e=a.filtersCategories.value;d.category=e,e===""&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d))}M();function M(){const t=JSON.parse(localStorage.getItem("filters"));a.filtersInput&&(a.filtersInput.value=t.keyword||""),a.filtersCategories&&(a.filtersCategories.value=t.category||"")}function h(t){return t.replace(/_/g," ")}async function T(t,e,r=1,o=6){const c=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${r}&limit=${o}`;try{const i=await(await fetch(c)).json(),v=i.totalPages;return i.results}catch(s){return console.error("Error fetching products:",s),[]}}async function _(t,e,r=1,o=6){const c=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${r}&limit=${o}`;try{const i=await(await fetch(c)).json(),v=i.totalPages;return i}catch(s){return console.error("Error fetching products:",s),[]}}function N(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function z(t){let e=h(t.category);return`
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
            <use href="/icons.svg#icon-shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `}const F=localStorage.getItem("filters"),u=JSON.parse(F);async function S(t=1){let e=u.keyword;u.keyword===null&&(e="");let r=u.category,o=H(r);console.log(o),u.category===null&&(o="");const c=N();try{const s=await T(e,o,t,c),i=await _(e,o,t,c),v=s,w=document.getElementById("productList");w.innerHTML="",v.forEach(q=>{w.innerHTML+=z(q)});const C=i.totalPages;console.log(t),renderPagination(C,t)}catch(s){console.error("Помилка:",s)}}document.addEventListener("DOMContentLoaded",()=>{S()});window.changePage=function(t){S(t),console.log(t)};window.addEventListener("resize",S);var L=document.createElement("script");L.src="/js/pagination.js";document.head.appendChild(L);function H(t){return t.replace(/ /g,"_")}function j(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function D(t){let e=h(t.category);return`
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
           <div id="${t._id}" class="popular-icon-cont inBascet">
            <svg class="popular-icon" width="12" height="12">
              <use href="./icons.svg#icon-heroicons-solid_shopping-cart-mini"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  `}I().then(t=>t.data).then(t=>{const e=j(t,5),r=document.getElementById("popularContainer");e.forEach(o=>{r.innerHTML+=D(o)})}).catch(t=>{console.error(t.message)});function J(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function R(t){return`
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
            <use href="/icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          </div>

        </div>
      </div>
    `}B().then(t=>t.data).then(t=>{const e=J(t,2),r=document.getElementById("discountContainer");e.forEach(o=>{r.innerHTML+=R(o)})}).catch(t=>{console.error(t.message)});document.querySelector(".productlist-card");function W(t){try{console.log(t);let e=JSON.parse(localStorage.getItem("cart"))||[];console.log(e);const r={id:t,pieces:"1"};e.push(r),localStorage.setItem("cart",JSON.stringify(e))}catch(e){console.log(e)}}async function b(t,e){const r=document.querySelector(".modal-content");r.innerHTML="";const o=await y(t);r.innerHTML=U(o,e)}function U(t,e){return`
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
    `}const $=document.querySelector(".modal"),Y=document.querySelector(".close-button");function G(){$.classList.add("show-modal"),document.body.style.overflow="hidden"}function m(){$.classList.remove("show-modal"),document.body.style.overflow="auto"}function K(t){t.target===$&&m()}Y.addEventListener("click",m);window.addEventListener("click",K);document.addEventListener("keydown",function(t){t.keyCode===27&&m()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",W(e)),t.target.addEventListener("click",m())});function V(t){return new Promise((e,r)=>{const o=document.querySelectorAll(t);if(o.length>0)e(o);else{const c=new MutationObserver(()=>{const s=document.querySelectorAll(t);s.length>0&&(c.disconnect(),e(s))});c.observe(document.documentElement,{childList:!0,subtree:!0})}})}V(".productlist-card").then(t=>{t.forEach(e=>{e.addEventListener("click",r=>{const o=r.currentTarget.dataset.productlistId;localStorage.getItem(o)?b(o,"Remove from"):b(o,"Add to"),G()})})}).catch(t=>{console.error(t.message)});const l="cart";function Q(t,e){localStorage.setItem(e,JSON.stringify(t))}const n={cartBlock:document.querySelector(".js-cart-block"),cartCounter:document.querySelector("span#cart-counter"),deleteAllBtn:document.querySelector(".delete-all-btn"),cartDeleteAllBlock:document.querySelector(".cart-delete-all-section"),cartListBlock:document.querySelector(".cart-list-block"),cartEmptyCart:document.querySelector(".cart-empty-cart"),yourOrderPrice:document.querySelector(".cart-total-price"),spanYourOrderPrice:document.querySelector("span#your-order-total-price"),cardDeleteOneBtn:document.querySelector(".carg-delete-all-btn")};n.deleteAllBtn.addEventListener("click",tt);P();function P(){n.cartDeleteAllBlock.setAttribute("hidden",""),n.yourOrderPrice.setAttribute("hidden",""),n.cartEmptyCart.removeAttribute("hidden","")}function X(){n.cartDeleteAllBlock.removeAttribute("hidden",""),n.yourOrderPrice.removeAttribute("hidden",""),n.cartEmptyCart.setAttribute("hidden","")}Z();async function Z(){let t=await f(l);if(console.log(t.length),n.cartCounter.textContent=t.length,t.length===0){n.cartBlock.innerHTML=E(),P();return}X(),k(),ot()}async function k(){let t=f(l);console.log(t),t.forEach(e=>{let r=e.id;console.log(r),y(r).then(o=>{const c=rt(o);n.cartListBlock.innerHTML+=c})})}function f(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function tt(){localStorage.removeItem(l),n.cartBlock.innerHTML=E(),n.cartCounter.forEach(t=>t.textContent=0)}et();function et(t){let e=f(l);console.log(e);let r=e.findIndex(o=>o.id===t);console.log(r),r!==-1&&(console.log(e.splice(r,1)),console.log(e),Q(e,l),n.cartListBlock.innerHTML="",k())}async function ot(){let t=0,e=f(l);console.log(e),e.forEach(r=>{let o=r.id;y(o).then(c=>{let s=c.price;t+=s,n.spanYourOrderPrice.textContent=`$${Number(t.toFixed(2))}`})})}function E(){return`
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
    </div>`}function rt(t){let e=ct(t.category);return`
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
  `}function ct(t){return t.replace(/_/g," ")}function st(t){return new Promise((e,r)=>{const o=document.querySelectorAll(t);if(o.length>0)e(o);else{const c=new MutationObserver(()=>{const s=document.querySelectorAll(t);s.length>0&&(c.disconnect(),e(s))});c.observe(document.documentElement,{childList:!0,subtree:!0})}})}st(".inBascet").then(t=>{t.forEach(e=>{e.addEventListener("click",r=>{r.currentTarget.id;let o=JSON.parse(localStorage.getItem("cart"))||[];console.log(o);const c={id:r.currentTarget.id,pieces:"1"};o.push(c),localStorage.setItem("cart",JSON.stringify(o))})})}).catch(t=>{console.error(t.message)});
//# sourceMappingURL=main-9b5c35a2.js.map
