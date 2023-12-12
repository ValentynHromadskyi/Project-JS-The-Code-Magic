import{a as p}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();const g="https://food-boutique.b.goit.study/api";async function C(){try{return await p.get(`${g}/products/categories`)}catch(t){console.log(t.message)}}async function f(t){try{return(await p.get(`${g}/products/${t}`)).data}catch(e){console.log(e.message)}}async function E(){try{return await p.get(`${g}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function A(){try{return await p.get(`${g}/products/discount`)}catch(t){console.log(t.message)}}const a={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};a.form.addEventListener("submit",x);I();async function I(){try{const e=(await C()).data;for(let o=0;o<e.length;o++){let s=M(e[o]);a.filterCatList.insertAdjacentHTML("beforeend",`<option  class="filters-categories-option" value="${s}">${s}</option>`)}}catch{console.log("err")}}const l={keyword:null,category:null,page:1,limit:6};async function x(t){const e=a.filtersInput.value;console.log(e),l.keyword=e,e===""&&(l.keyword=null);const o=a.filtersCategories.value;l.category=o,o===""&&(l.category=null),localStorage.setItem("filters",JSON.stringify(l))}B();function B(){const t=JSON.parse(localStorage.getItem("filters"));a.filtersInput.value=t.keyword,a.filtersCategories.value=t.category}function M(t){return t.replace(/_/g," ")}async function q(t,e,o=1,s=6){const r=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${o}&limit=${s}`;try{return(await(await fetch(r)).json()).results}catch(c){return console.error("Error fetching products:",c),[]}}function O(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function T(t){return`
    <div class="productlist-card" data-productlist-id="${t._id}">
      <div class="productlist-background">
        <img src="${t.img}" alt="${t.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${t.name}</h2>
          <div class="pl-det">
          
          <div class="category-cont">
          <p class="productlist-category">Category:
          <span class="word">${t.category}</span></p>

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
          <div class="price-icon-cont">
          <svg class="productlist-icon" width="18" height="18">
            <use href="../icons.svg#icon-shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `}const z=localStorage.getItem("filters"),d=JSON.parse(z);console.log(d);async function v(t=1){let e=d.keyword;d.keyword===null&&(e="");let o=d.category;d.category===null&&(o="");const s=O();try{const c=await q(e,o,t,s),i=document.getElementById("productList");i.innerHTML="",c.forEach(k=>{i.innerHTML+=T(k)});const $=Math.ceil(c.length/s);console.log($),renderPagination($,t)}catch(r){console.error("Помилка:",r)}}document.addEventListener("DOMContentLoaded",()=>{v()});window.changePage=function(t){v(t),console.log(t)};window.addEventListener("resize",v);var S=document.createElement("script");S.src="/js/pagination.js";document.head.appendChild(S);function H(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function N(t){return`
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
          <span class="word">${t.category}</span></p>

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
  `}E().then(t=>t.data).then(t=>{const e=H(t,5),o=document.getElementById("popularContainer");e.forEach(s=>{o.innerHTML+=N(s)})}).catch(t=>{console.error(t.message)});function _(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function F(t){return`
      <div class="product-card">
        <div class="product-background">

        <div class="discount-label">
      <svg class="dicount-label-icon">
      <use href="../icons.svg#icon-discount"></use>
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
            <use href="../icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          </div>

        </div>
      </div>
    `}A().then(t=>t.data).then(t=>{const e=_(t,2),o=document.getElementById("discountContainer");e.forEach(s=>{o.innerHTML+=F(s)})}).catch(t=>{console.error(t.message)});function D(t){try{localStorage.getItem(t)?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(t))}catch(e){console.log(e)}}async function w(t,e){const o=document.querySelector(".modal-content");o.innerHTML="";const s=await f(t);o.innerHTML=R(s,e)}function R(t,e){return`
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
    `}const y=document.querySelector(".modal"),j=document.querySelector(".close-button");function J(){y.classList.add("show-modal"),document.body.style.overflow="hidden"}function m(){y.classList.remove("show-modal"),document.body.style.overflow="auto"}document.querySelectorAll(".productlist-card").forEach(t=>{t.addEventListener("click",function(e){if(t===e.target||t.contains(e.target)){const o=t.dataset.productlistId;localStorage.getItem(o)?w(o,"Remove from"):w(o,"Add to"),J()}})});function W(t){t.target===y&&m()}j.addEventListener("click",m);window.addEventListener("click",W);document.addEventListener("keydown",function(t){t.keyCode===27&&m()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",D(e)),t.target.addEventListener("click",m())});const u="cart";function U(t,e){localStorage.setItem(e,JSON.stringify(t))}const Y=[{id:"640c2dd963a319ea671e37a9",pieces:"2"},{id:"640c2dd963a319ea671e3860",pieces:"1"}];U(Y,u);const n={cartBlock:document.querySelector(".js-cart-block"),cartCounter:document.querySelector("span#cart-counter"),deleteAllBtn:document.querySelector(".delete-all-btn"),cartDeleteAllBlock:document.querySelector(".cart-delete-all-section"),cartListBlock:document.querySelector(".cart-list-block"),cartEmptyCart:document.querySelector(".cart-empty-cart"),yourOrderPrice:document.querySelector(".your-order-price"),spanYourOrderPrice:document.querySelector("span#your-order-total-price")};n.deleteAllBtn.addEventListener("click",P);L();function L(){n.cartDeleteAllBlock.setAttribute("hidden",""),n.yourOrderPrice.setAttribute("hidden",""),n.cartEmptyCart.removeAttribute("hidden","")}function G(){n.cartDeleteAllBlock.removeAttribute("hidden",""),n.yourOrderPrice.removeAttribute("hidden",""),n.cartEmptyCart.setAttribute("hidden","")}K();async function K(){let t=h(u);if(console.log(t.length),n.cartCounter.textContent=t.length,t.length===0){n.cartBlock.innerHTML=b(),L();return}G(),V(),Q()}async function V(){let t=h(u);console.log(t),t.forEach(e=>{let o=e.id;f(o).then(s=>{const r=X(s);n.cartListBlock.innerHTML+=r})})}n.deleteAllBtn.addEventListener("click",P);function h(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function P(){localStorage.removeItem(u),n.cartBlock.innerHTML=b(),n.cartCounter.forEach(t=>t.textContent=0)}async function Q(){let t=0,e=h(u);console.log(e),e.forEach(o=>{let s=o.id;f(s).then(r=>{let c=r.price;t+=c,n.spanYourOrderPrice.textContent=`$${Number(t.toFixed(2))}`})})}function b(){return`
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
    </div>`}function X(t){let e=Z(t.category);return`
    <div class="productlist-card" data-productlist-id="${t._id}">
      <div class="productlist-background">
        <img src="${t.img}" alt="${t.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${t.name}</h2>
          <div class="pl-det">
            <div class="category-cont">
             <p class="productlist-category">Category:
                <span class="word">${e}</span></p></div>
              <div>  
             <p class="productlist-size">Size:
                <span class="word">${t.size}</span></p></div>
            </div>
          </div>
          <div class="price-icon">
          <p class="productlist-price">$${t.price.toFixed(2)}</p>

          <div class="price-icon-cont">
          <svg class="productlist-icon" width="18" height="18">
            <use href="../icons.svg#icon-shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `}function Z(t){return t.replace(/_/g," ")}
//# sourceMappingURL=cart-98c042b9.js.map
