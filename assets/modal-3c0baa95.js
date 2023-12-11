import{a as i}from"./vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const a="https://food-boutique.b.goit.study/api";async function v(){try{return await i.get(`${a}/products/categories`)}catch(t){console.log(t.message)}}v().then(t=>console.log(t));async function h(t){try{return(await i.get(`${a}/products/${t}`)).data}catch(e){console.log(e.message)}}let P="640c2dd963a319ea671e3676";h(P).then(t=>console.log(t));async function w(){try{return await i.get(`${a}/products/popular?limit=5`)}catch(t){console.log(t.message)}}w().then(t=>console.log(t));async function $(){try{return await i.get(`${a}/products/discount`)}catch(t){console.log(t.message)}}$().then(t=>console.log(t));async function b({keyword:t,category:e,byABC:s=!0,byPrice:n=!1,byPopularity:o=!1,page:r=1,limit:c=6}){try{const d=new URLSearchParams({category:e,byABC:s?"true":"false",byPrice:n?"true":"false",byPopularity:o?"true":"false",page:r,limit:c});return t&&d.append("keyword",t),(await i.get(`${a}/products?${d}`)).data}catch(d){console.log(d.message)}}const C={category:"Fresh_Produce",byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};b(C).then(t=>console.log(t));const S={email:"ssss@Comment.ua"};async function k(t){return(await i.post(`${a}/subscription`,t)).data}k(S).then(t=>console.log(t)).catch(t=>console.log(t.message));async function E(t){return(await i.post(`${a}/orders`,t)).data}const I={email:"ssss@Comment.ua",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]};E(I).then(t=>console.log(t));const l={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};l.form.addEventListener("submit",A);M();async function M(){try{const e=(await v()).data;for(let s=0;s<e.length;s++)l.filterCatList.insertAdjacentHTML("beforeend",`<option  class="filters-categories-option" value="${e[s]}">${e[s]}</option>`)}catch{console.log("err")}}const u={keyword:null,category:null,page:1,limit:6};async function A(t){const e=l.filtersInput.value;u.keyword=e,e===""&&(u.keyword=null);const s=l.filtersCategories.value;u.category=s,s===""&&(u.category=null),localStorage.setItem("filters",JSON.stringify(u))}O();function O(){const t=JSON.parse(localStorage.getItem("filters"));l.filtersInput.value=t.keyword,l.filtersCategories.value=t.category}async function q(t,e,s=1,n=6){const o=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${s}&limit=${n}`;try{return(await(await fetch(o)).json()).results}catch(r){return console.error("Error fetching products:",r),[]}}function F(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function T(t){return`
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
  `}async function g(t=1){const e="Ac",s="Fresh_Produce",n=F();try{const o=await q(e,s,t,n),r=o,c=document.getElementById("productList");c.innerHTML="",r.forEach(m=>{c.innerHTML+=T(m)});const d=Math.ceil(o.total/n);renderPagination(d,t)}catch(o){console.error("Помилка:",o)}}document.addEventListener("DOMContentLoaded",()=>{g()});window.changePage=function(t){g(t)};window.addEventListener("resize",g);var L=document.createElement("script");L.src="/js/pagination.js";document.head.appendChild(L);w().then(t=>console.log(t));function B(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}function _(t){return`
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
    `}$().then(t=>t.data).then(t=>{const e=B(t,2),s=document.getElementById("discountContainer");e.forEach(n=>{s.innerHTML+=_(n)})}).catch(t=>{console.error(t.message)});function x(t){try{localStorage.getItem(t)?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(t))}catch(e){console.log(e)}}async function y(t,e){const s=document.querySelector(".modal-content");s.innerHTML="";const n=await h(t);s.innerHTML=z(n,e)}function z(t,e){return`
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
    `}const f=document.querySelector(".modal"),H=document.querySelector(".close-button");function N(){f.classList.add("show-modal"),document.body.style.overflow="hidden"}function p(){f.classList.remove("show-modal"),document.body.style.overflow="auto"}document.addEventListener("click",function(t){if(!t.target.classList.contains("productlist-card"))return;const e=t.target.dataset.productlistId;localStorage.getItem(e)?y(e,"Remove from"):y(e,"Add to"),N()});function R(t){t.target===f&&p()}H.addEventListener("click",p);window.addEventListener("click",R);document.addEventListener("keydown",function(t){t.keyCode===27&&p()});document.addEventListener("click",function(t){if(!t.target.classList.contains("modal-product-button"))return;const e=t.target.dataset.productlistId;t.target.addEventListener("click",x(e)),t.target.addEventListener("click",p())});
//# sourceMappingURL=modal-3c0baa95.js.map
