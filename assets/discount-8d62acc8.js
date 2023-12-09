import{a}from"./vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const i="https://food-boutique.b.goit.study/api";async function u(){try{return await a.get(`${i}/products/categories`)}catch(t){console.log(t.message)}}u().then(t=>console.log(t));async function m(t){try{return(await a.get(`${i}/products/${t}`)).data}catch(o){console.log(o.message)}}let h="640c2dd963a319ea671e3676";m(h).then(t=>console.log(t));async function p(){try{return await a.get(`${i}/products/popular?limit=5`)}catch(t){console.log(t.message)}}p().then(t=>console.log(t));async function l(){try{return await a.get(`${i}/products/discount`)}catch(t){console.log(t.message)}}l().then(t=>console.log(t));async function y({keyword:t,category:o,byABC:r=!0,byPrice:c=!1,byPopularity:e=!1,page:s=1,limit:n=6}){try{const d=new URLSearchParams({keyword:t,category:o,byABC:r?"true":"false",byPrice:c?"true":"false",byPopularity:e?"true":"false",page:s,limit:n});return t&&d.append("keyword",t),(await a.get(`${i}/products?${d}`)).data}catch(d){console.log(d.message)}}const v={category:"Fresh_Produce",byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};y(v).then(t=>console.log(t));const P={email:"ssss@Comment.ua"};async function $(t){return(await a.post(`${i}/subscription`,t)).data}$(P).then(t=>console.log(t)).catch(t=>console.log(t.message));async function w(t){return(await a.post(`${i}/orders`,t)).data}const b={email:"ssss@Comment.ua",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]};w(b).then(t=>console.log(t));const L={form:document.querySelector(".filters-categories")};async function C(){try{const o=(await u()).data;for(let r=0;r<o.length;r++)L.form.insertAdjacentHTML("beforeend",`<option value="value${[r+1]}">${o[r]}</option>`)}catch{console.log("err")}}C();async function E(t,o,r=1,c=6){const e=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${o}&page=${r}&limit=${c}`;try{return(await(await fetch(e)).json()).results}catch(s){return console.error("Error fetching products:",s),[]}}function A(t){return`
    <div class="productlist-card" data-productlist-id="${t._id}">
      <div class="productlist-background">
        <img src="${t.img}" alt="${t.name}" class="product-image">
      </div>
      <div class="productlist-details">
        <div class="productlist-details-text">
          <h2 class="productlist-name">${t.name}</h2>
          <div class="pl-det">
          <p class="productlist-category">Category: <span class="word">${t.category}</span></p>
          <p class="productlist-size">Size: <span class="word">${t.size}</span></p>
          <p class="productlist-popularity">Popularity: <span class="word">${t.popularity}</span></p>
          </div>
          <div class="price-icon">
          <p class="productlist-price">$${t.price.toFixed(2)}</p>
          <div class="price-icon-cont">
          <svg class="productlist-icon" width="18" height="18">
            <use href="./src/icons.svg#icon-shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  `}async function B(){const t="Ac",o="Fresh_Produce";try{const e=await E(t,o,1,6),s=document.getElementById("productList");e.forEach(n=>{s.innerHTML+=A(n)})}catch(e){console.error("Error:",e)}}document.addEventListener("DOMContentLoaded",B);p().then(t=>console.log(t));function g(t,o){return t.sort(()=>.5-Math.random()).slice(0,o)}function f(t){return`
      <div class="product-card">
        <div class="product-background">
          <img src="${t.img}" alt="${t.name}" class="product-image">
        </div>
        <div class="product-details">
          <div class="details-text">
          <h2 class="product-name">${t.name}</h2>
          <p class="product-price">$${t.price.toFixed(2)}</p>
          <div>
          <svg class="cart-icon" width="34" height="34">
            <use href="./src/icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          </div>
          </div>
        </div>
      </div>
    `}async function F(){try{const t=await l(),o=g(t,2),r=document.getElementById("discountContainer"),c=document.createDocumentFragment();o.forEach(e=>{c.appendChild(f(e))}),r.appendChild(c)}catch(t){console.error(t.message)}}F();l().then(t=>t.data).then(t=>{const o=g(t,2),r=document.getElementById("discountContainer");o.forEach(c=>{r.innerHTML+=f(c)})}).catch(t=>{console.error(t.message)});
//# sourceMappingURL=discount-8d62acc8.js.map
