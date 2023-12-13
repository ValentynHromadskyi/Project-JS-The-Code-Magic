import{a as u}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}})();const p="https://food-boutique.b.goit.study/api";async function P(){try{return await u.get(`${p}/products/categories`)}catch(t){console.log(t.message)}}async function S(t){try{return(await u.get(`${p}/products/${t}`)).data}catch(e){console.log(e.message)}}async function b(){try{return await u.get(`${p}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function L(){try{return await u.get(`${p}/products/discount`)}catch(t){console.log(t.message)}}document.querySelector(".foot-form");document.querySelector(".modal-subscription");document.querySelector(".modal-unsubscription");document.querySelector(".modal-backdrop");document.querySelector(".body");document.body.style.overflow;const i={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};i.form&&i.form.addEventListener("submit",C);E();async function E(){try{const e=(await P()).data;for(let s=0;s<e.length;s++){let o=m(e[s]);i.filterCatList.insertAdjacentHTML("beforeend",`<option class="filters-categories-option" value="${o}">${o}</option>`)}}catch{console.log("err")}}const a={keyword:null,category:null,page:1,limit:6};async function C(){const t=i.filtersInput.value;console.log(t),a.keyword=t,t===""&&(a.keyword=null);const e=i.filtersCategories.value;a.category=e,e===""&&(a.category=null),localStorage.setItem("filters",JSON.stringify(a))}k();function k(){const t=JSON.parse(localStorage.getItem("filters"));i.filtersInput&&(i.filtersInput.value=t.keyword||""),i.filtersCategories&&(i.filtersCategories.value=t.category||"")}function m(t){return t.replace(/_/g," ")}async function q(t,e,s=1,o=6){const r=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${s}&limit=${o}`;try{const n=await(await fetch(r)).json(),l=n.totalPages;return n.results}catch(c){return console.error("Error fetching products:",c),[]}}async function I(t,e,s=1,o=6){const r=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${s}&limit=${o}`;try{const n=await(await fetch(r)).json(),l=n.totalPages;return n}catch(c){return console.error("Error fetching products:",c),[]}}function M(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function O(t){let e=m(t.category);return`
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
  `}const A=localStorage.getItem("filters"),d=JSON.parse(A);async function f(t=1){let e=d.keyword;d.keyword===null&&(e="");let s=d.category;d.category===null&&(s="");const o=M();try{const r=await q(e,s,t,o),c=await I(e,s,t,o),n=r,l=document.getElementById("productList");l.innerHTML="",n.forEach($=>{l.innerHTML+=O($)});const w=c.totalPages;console.log(t),renderPagination(w,t)}catch(r){console.error("Помилка:",r)}}document.addEventListener("DOMContentLoaded",()=>{f()});window.changePage=function(t){f(t),console.log(t)};window.addEventListener("resize",f);var h=document.createElement("script");h.src="/js/pagination.js";document.head.appendChild(h);function T(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function x(t){let e=m(t.category);return`
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
  `}b().then(t=>t.data).then(t=>{const e=T(t,5),s=document.getElementById("popularContainer");e.forEach(o=>{s.innerHTML+=x(o)})}).catch(t=>{console.error(t.message)});function N(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function B(t){return`
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
    `}L().then(t=>t.data).then(t=>{const e=N(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.innerHTML+=B(o)})}).catch(t=>{console.error(t.message)});document.querySelector(".productlist-card");function z(t){try{console.log(t);let e=JSON.parse(localStorage.getItem("cart"))||[];console.log(e);const s={id:t,pieces:"1"};e.push(s),localStorage.setItem("cart",JSON.stringify(e))}catch(e){console.log(e)}}async function y(t,e){const s=document.querySelector(".modal-content");s.innerHTML="";const o=await S(t);s.innerHTML=F(o,e)}function F(t,e){return`
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
    `}const v=document.querySelector(".modal"),_=document.querySelector(".close-button");function j(){v.classList.add("show-modal"),document.body.style.overflow="hidden"}function g(){v.classList.remove("show-modal"),document.body.style.overflow="auto"}function H(t){t.target===v&&g()}_.addEventListener("click",g);window.addEventListener("click",H);document.addEventListener("keydown",function(t){t.keyCode===27&&g()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",z(e)),t.target.addEventListener("click",g())});function J(t){return new Promise((e,s)=>{const o=document.querySelectorAll(t);if(o.length>0)e(o);else{const r=new MutationObserver(()=>{const c=document.querySelectorAll(t);c.length>0&&(r.disconnect(),e(c))});r.observe(document.documentElement,{childList:!0,subtree:!0})}})}J(".productlist-card").then(t=>{t.forEach(e=>{e.addEventListener("click",s=>{const o=s.currentTarget.dataset.productlistId;localStorage.getItem(o)?y(o,"Remove from"):y(o,"Add to"),j()})})}).catch(t=>{console.error(t.message)});function R(t){return new Promise((e,s)=>{const o=document.querySelectorAll(t);if(o.length>0)e(o);else{const r=new MutationObserver(()=>{const c=document.querySelectorAll(t);c.length>0&&(r.disconnect(),e(c))});r.observe(document.documentElement,{childList:!0,subtree:!0})}})}R(".inBascet").then(t=>{t.forEach(e=>{e.addEventListener("click",s=>{s.currentTarget.id;let o=JSON.parse(localStorage.getItem("cart"))||[];console.log(o);const r={id:s.currentTarget.id,pieces:"1"};o.push(r),localStorage.setItem("cart",JSON.stringify(o))})})}).catch(t=>{console.error(t.message)});
//# sourceMappingURL=main-6b754c28.js.map
