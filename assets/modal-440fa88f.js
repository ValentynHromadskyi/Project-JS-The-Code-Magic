import{a}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const l="https://food-boutique.b.goit.study/api";async function v(){try{return await a.get(`${l}/products/categories`)}catch(t){console.log(t.message)}}v().then(t=>console.log(t));async function h(t){try{return(await a.get(`${l}/products/${t}`)).data}catch(e){console.log(e.message)}}let C="640c2dd963a319ea671e3676";h(C).then(t=>console.log(t));async function L(){try{return await a.get(`${l}/products/popular?limit=5`)}catch(t){console.log(t.message)}}L().then(t=>console.log(t));async function w(){try{return await a.get(`${l}/products/discount`)}catch(t){console.log(t.message)}}w().then(t=>console.log(t));async function $({keyword:t,category:e,byABC:s=!0,byPrice:c=!1,byPopularity:o=!1,page:r=1,limit:n=6}){try{const i=new URLSearchParams({category:e,byABC:s?"true":"false",byPrice:c?"true":"false",byPopularity:o?"true":"false",page:r,limit:n});return t&&i.append("keyword",t),(await a.get(`${l}/products?${i}`)).data}catch(i){console.log(i.message)}}const S={category:"Fresh_Produce",byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};$(S).then(t=>console.log(t));const E={email:"ssss@Comment.ua"};async function I(t){return(await a.post(`${l}/subscription`,t)).data}I(E).then(t=>console.log(t)).catch(t=>console.log(t.message));async function k(t){return(await a.post(`${l}/orders`,t)).data}const M={email:"ssss@Comment.ua",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]};k(M).then(t=>console.log(t));const d={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};d.form.addEventListener("submit",B);q();async function q(){try{const e=(await v()).data;for(let s=0;s<e.length;s++)d.filterCatList.insertAdjacentHTML("beforeend",`<option class="filters-categories-option" value="${e[s]}">${e[s]}</option>`)}catch{console.log("err")}}const u={keyword:null,category:null,page:1,limit:6};async function B(t){const e=d.filtersInput.value;u.keyword=e,e===""&&(u.keyword=null);const s=d.filtersCategories.value;u.category=s,s===""&&(u.category=null),localStorage.setItem("filters",JSON.stringify(u))}T();function T(){const t=JSON.parse(localStorage.getItem("filters"));d.filtersInput.value=t.keyword,d.filtersCategories.value=t.category}async function A(t,e,s=1,c=6){const o=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${s}&limit=${c}`;try{return(await(await fetch(o)).json()).results}catch(r){return console.error("Error fetching products:",r),[]}}function O(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function P(t){return`
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
  `}const F={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};F.filterCatList.addEventListener("change",H);async function H(t){const s={category:t.target.value,byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};try{const c=await $(s),o=c.results;console.log(o);const r=document.getElementById("productList");r.innerHTML="",o.forEach(i=>{r.innerHTML+=P(i)});const n=Math.ceil(c.total/s.limit);renderPagination(n,s.page)}catch(c){console.error("Произошла ошибка:",c)}}async function g(t=1){const e="",s="",c=O();try{const o=await A(e,s,t,c),r=o,n=document.getElementById("productList");n.innerHTML="",r.forEach(m=>{n.innerHTML+=P(m)});const i=Math.ceil(o.total/c);renderPagination(i,t)}catch(o){console.error("Помилка:",o)}}document.addEventListener("DOMContentLoaded",()=>{g()});window.changePage=function(t){g(t)};window.addEventListener("resize",g);var b=document.createElement("script");b.src="/js/pagination.js";document.head.appendChild(b);L().then(t=>console.log(t));function x(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function z(t){return`
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
    `}w().then(t=>t.data).then(t=>{const e=x(t,2),s=document.getElementById("discountContainer");e.forEach(c=>{s.innerHTML+=z(c)})}).catch(t=>{console.error(t.message)});function N(t){try{localStorage.getItem(t)?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(t))}catch(e){console.log(e)}}async function y(t,e){const s=document.querySelector(".modal-content");s.innerHTML="";const c=await h(t);s.innerHTML=_(c,e)}function _(t,e){return`
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
    `}const f=document.querySelector(".modal"),R=document.querySelector(".close-button");function j(){f.classList.add("show-modal"),document.body.style.overflow="hidden"}function p(){f.classList.remove("show-modal"),document.body.style.overflow="auto"}document.addEventListener("click",function(t){if(!t.target.classList.contains("productlist-card"))return;const e=t.target.dataset.productlistId;localStorage.getItem(e)?y(e,"Remove from"):y(e,"Add to"),j()});function W(t){t.target===f&&p()}R.addEventListener("click",p);window.addEventListener("click",W);document.addEventListener("keydown",function(t){t.keyCode===27&&p()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",N(e)),t.target.addEventListener("click",p())});
//# sourceMappingURL=modal-440fa88f.js.map
