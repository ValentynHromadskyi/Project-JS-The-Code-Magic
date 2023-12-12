import{a}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const l="https://food-boutique.b.goit.study/api";async function h(){try{return await a.get(`${l}/products/categories`)}catch(t){console.log(t.message)}}h().then(t=>console.log(t));async function w(t){try{return(await a.get(`${l}/products/${t}`)).data}catch(e){console.log(e.message)}}let P="640c2dd963a319ea671e3676";w(P).then(t=>console.log(t));async function $(){try{return await a.get(`${l}/products/popular?limit=5`)}catch(t){console.log(t.message)}}$().then(t=>console.log(t));async function L(){try{return await a.get(`${l}/products/discount`)}catch(t){console.log(t.message)}}L().then(t=>console.log(t));async function S({keyword:t,category:e,byABC:o=!0,byPrice:c=!1,byPopularity:s=!1,page:r=1,limit:n=6}){try{const i=new URLSearchParams({category:e,byABC:o?"true":"false",byPrice:c?"true":"false",byPopularity:s?"true":"false",page:r,limit:n});return t&&i.append("keyword",t),(await a.get(`${l}/products?${i}`)).data}catch(i){console.log(i.message)}}const C={category:"Fresh_Produce",byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};S(C).then(t=>console.log(t));const k={email:"ssss@Comment.ua"};async function E(t){return(await a.post(`${l}/subscription`,t)).data}E(k).then(t=>console.log(t)).catch(t=>console.log(t.message));async function I(t){return(await a.post(`${l}/orders`,t)).data}const M={email:"ssss@Comment.ua",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]};I(M).then(t=>console.log(t));const d={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};d.form.addEventListener("submit",q);O();async function O(){try{const e=(await h()).data;for(let o=0;o<e.length;o++){let c=T(e[o]);d.filterCatList.insertAdjacentHTML("beforeend",`<option  class="filters-categories-option" value="${c}">${c}</option>`)}}catch{console.log("err")}}const u={keyword:null,category:null,page:1,limit:6};async function q(t){const e=d.filtersInput.value;console.log(e),u.keyword=e,e===""&&(u.keyword=null);const o=d.filtersCategories.value;u.category=o,o===""&&(u.category=null),localStorage.setItem("filters",JSON.stringify(u))}A();function A(){const t=JSON.parse(localStorage.getItem("filters"));d.filtersInput.value=t.keyword,d.filtersCategories.value=t.category}function T(t){return t.replace(/_/g," ")}async function B(t,e,o=1,c=6){const s=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${o}&limit=${c}`;try{return(await(await fetch(s)).json()).results}catch(r){return console.error("Error fetching products:",r),[]}}function F(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function N(t){return`
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
  `}const _=localStorage.getItem("filters"),p=JSON.parse(_);console.log(p);async function f(t=1){let e=p.keyword;p.keyword===null&&(e="");let o=p.category;p.category===null&&(o="");const c=F();try{const r=await B(e,o,t,c),n=document.getElementById("productList");n.innerHTML="",r.forEach(y=>{n.innerHTML+=N(y)});const i=Math.ceil(r.length/c);console.log(i),renderPagination(i,t)}catch(s){console.error("Помилка:",s)}}document.addEventListener("DOMContentLoaded",()=>{f()});window.changePage=function(t){f(t),console.log(t)};window.addEventListener("resize",f);var b=document.createElement("script");b.src="/js/pagination.js";document.head.appendChild(b);$().then(t=>console.log(t));function x(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function z(t){return`
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
    `}L().then(t=>t.data).then(t=>{const e=x(t,2),o=document.getElementById("discountContainer");e.forEach(c=>{o.innerHTML+=z(c)})}).catch(t=>{console.error(t.message)});function H(t){try{localStorage.getItem(t)?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(t))}catch(e){console.log(e)}}async function v(t,e){const o=document.querySelector(".modal-content");o.innerHTML="";const c=await w(t);o.innerHTML=R(c,e)}function R(t,e){return`
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
    `}const m=document.querySelector(".modal"),W=document.querySelector(".close-button");function j(){m.classList.add("show-modal"),document.body.style.overflow="hidden"}function g(){m.classList.remove("show-modal"),document.body.style.overflow="auto"}document.querySelectorAll(".productlist-card").forEach(t=>{t.addEventListener("click",function(e){if(t===e.target||t.contains(e.target)){const o=t.dataset.productlistId;localStorage.getItem(o)?v(o,"Remove from"):v(o,"Add to"),j()}})});function J(t){t.target===m&&g()}W.addEventListener("click",g);window.addEventListener("click",J);document.addEventListener("keydown",function(t){t.keyCode===27&&g()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",H(e)),t.target.addEventListener("click",g())});
//# sourceMappingURL=modal-0ae0a5d6.js.map
