import{a as i}from"./vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const a="https://food-boutique.b.goit.study/api";async function p(){try{return await i.get(`${a}/products/categories`)}catch(t){console.log(t.message)}}p().then(t=>console.log(t));async function h(t){try{return(await i.get(`${a}/products/${t}`)).data}catch(s){console.log(s.message)}}let y="640c2dd963a319ea671e3676";h(y).then(t=>console.log(t));async function g(){try{return await i.get(`${a}/products/popular?limit=5`)}catch(t){console.log(t.message)}}g().then(t=>console.log(t));async function f(){try{return await i.get(`${a}/products/discount`)}catch(t){console.log(t.message)}}f().then(t=>console.log(t));async function v({keyword:t,category:s,byABC:r=!0,byPrice:c=!1,byPopularity:e=!1,page:o=1,limit:n=6}){try{const d=new URLSearchParams({keyword:t,category:s,byABC:r?"true":"false",byPrice:c?"true":"false",byPopularity:e?"true":"false",page:o,limit:n});return t&&d.append("keyword",t),(await i.get(`${a}/products?${d}`)).data}catch(d){console.log(d.message)}}const P={category:"Fresh_Produce",byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};v(P).then(t=>console.log(t));const $={email:"ssss@Comment.ua"};async function w(t){return(await i.post(`${a}/subscription`,t)).data}w($).then(t=>console.log(t)).catch(t=>console.log(t.message));async function b(t){return(await i.post(`${a}/orders`,t)).data}const L={email:"ssss@Comment.ua",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]};b(L).then(t=>console.log(t));const C={form:document.querySelector(".filters-categories")};async function E(){try{const s=(await p()).data;for(let r=0;r<s.length;r++)C.form.insertAdjacentHTML("beforeend",`<option value="value${[r+1]}">${s[r]}</option>`)}catch{console.log("err")}}E();async function A(t,s,r=1,c=6){const e=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${s}&page=${r}&limit=${c}`;try{return(await(await fetch(e)).json()).results}catch(o){return console.error("Error fetching products:",o),[]}}function M(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function k(t){return`
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
  `}async function l(t=1){const s="Ac",r="Fresh_Produce",c=M();try{const e=await A(s,r,t,c),o=e,n=document.getElementById("productList");n.innerHTML="",o.forEach(u=>{n.innerHTML+=k(u)});const d=Math.ceil(e.total/c);renderPagination(d,t)}catch(e){console.error("Помилка:",e)}}document.addEventListener("DOMContentLoaded",()=>{l()});window.changePage=function(t){l(t)};window.addEventListener("resize",l);var m=document.createElement("script");m.src="/js/pagination.js";document.head.appendChild(m);g().then(t=>console.log(t));function B(t,s){return t.sort(()=>.5-Math.random()).slice(0,s)}function F(t){return`
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
    `}f().then(t=>t.data).then(t=>{const s=B(t,2),r=document.getElementById("discountContainer");s.forEach(c=>{r.innerHTML+=F(c)})}).catch(t=>{console.error(t.message)});
//# sourceMappingURL=discount-59364f5e.js.map
