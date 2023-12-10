import{a as i}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const a="https://food-boutique.b.goit.study/api";async function f(){try{return await i.get(`${a}/products/categories`)}catch(e){console.log(e.message)}}f().then(e=>console.log(e));async function v(e){try{return(await i.get(`${a}/products/${e}`)).data}catch(t){console.log(t.message)}}let P="640c2dd963a319ea671e3676";v(P).then(e=>console.log(e));async function m(){try{return await i.get(`${a}/products/popular?limit=5`)}catch(e){console.log(e.message)}}m().then(e=>console.log(e));async function y(){try{return await i.get(`${a}/products/discount`)}catch(e){console.log(e.message)}}y().then(e=>console.log(e));async function w({keyword:e,category:t,byABC:s=!0,byPrice:c=!1,byPopularity:o=!1,page:r=1,limit:n=6}){try{const l=new URLSearchParams({category:t,byABC:s?"true":"false",byPrice:c?"true":"false",byPopularity:o?"true":"false",page:r,limit:n});return e&&l.append("keyword",e),(await i.get(`${a}/products?${l}`)).data}catch(l){console.log(l.message)}}const $={category:"Fresh_Produce",byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};w($).then(e=>console.log(e));const b={email:"ssss@Comment.ua"};async function L(e){return(await i.post(`${a}/subscription`,e)).data}L(b).then(e=>console.log(e)).catch(e=>console.log(e.message));async function C(e){return(await i.post(`${a}/orders`,e)).data}const E={email:"ssss@Comment.ua",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]};C(E).then(e=>console.log(e));const d={filterCatList:document.querySelector(".filters-categories"),form:document.getElementById("fiters-form"),filtersInput:document.querySelector(".filters-input"),filtersCategories:document.querySelector(".filters-categories")};d.form.addEventListener("submit",I);function S(){try{const t=f().data;for(let s=0;s<t.length;s++)d.filterCatList.insertAdjacentHTML("beforeend",`<option value="${t[s]}">${t[s]}</option>`)}catch{console.log("err")}}S();const u={keyword:null,category:null,page:1,limit:6};async function I(e){const t=d.filtersInput.value;u.keyword=t,t===""&&(u.keyword=null);const s=d.filtersCategories.value;u.category=s,s===""&&(u.category=null),localStorage.setItem("filters",JSON.stringify(u))}k();function k(){const e=JSON.parse(localStorage.getItem("filters"));d.filtersInput.value=e.keyword,d.filtersCategories.value=e.category}async function A(e,t,s=1,c=6){const o=`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${t}&page=${s}&limit=${c}`;try{return(await(await fetch(o)).json()).results}catch(r){return console.error("Error fetching products:",r),[]}}function F(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function M(e){return`
    <div class="productlist-card" data-productlist-id="${e._id}">
      <div class="productlist-background">
        <img src="${e.img}" alt="${e.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${e.name}</h2>
          <div class="pl-det">
          
          <div class="category-cont">
          <p class="productlist-category">Category:
          <span class="word">${e.category}</span></p>

          <p class="productlist-size">Size:
          <span class="word">${e.size}</span></p>
          </div>

          <div class="popularity-cont">
          <p class="productlist-popularity">Popularity:
          <span class="word">${e.popularity}</span></p>
          </div>

          </div>
          <div class="price-icon">
          <p class="productlist-price">$${e.price.toFixed(2)}</p>
          <div class="price-icon-cont">
          <svg class="productlist-icon" width="18" height="18">
            <use href="../icons.svg#icon-shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `}async function p(e=1){const t="Ac",s="Fresh_Produce",c=F();try{const o=await A(t,s,e,c),r=o,n=document.getElementById("productList");n.innerHTML="",r.forEach(g=>{n.innerHTML+=M(g)});const l=Math.ceil(o.total/c);renderPagination(l,e)}catch(o){console.error("Помилка:",o)}}document.addEventListener("DOMContentLoaded",()=>{p()});window.changePage=function(e){p(e)};window.addEventListener("resize",p);var h=document.createElement("script");h.src="/js/pagination.js";document.head.appendChild(h);m().then(e=>console.log(e));function O(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}function B(e){return`
      <div class="product-card">
        <div class="product-background">

        <div class="discount-label">
      <svg class="dicount-label-icon">
      <use href="../icons.svg#icon-discount"></use>
      </svg>
      </div>

          <img src="${e.img}" alt="${e.name}" class="product-image">
        </div>
        <div class="product-details">
          <div class="details-text">

          <div class="name-price">
          <h2 class="product-name">${e.name}</h2>
          <p class="product-price">$${e.price.toFixed(2)}</p>
          </div>

          <div class="discount-icon-cont">
          <svg class="discount-icon" width="34" height="34">
            <use href="../icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          </div>

        </div>
      </div>
    `}y().then(e=>e.data).then(e=>{const t=O(e,2),s=document.getElementById("discountContainer");t.forEach(c=>{s.innerHTML+=B(c)})}).catch(e=>{console.error(e.message)});
//# sourceMappingURL=discount-3d4739e3.js.map
