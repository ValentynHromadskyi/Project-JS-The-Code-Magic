import{a as n}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const a="https://food-boutique.b.goit.study/api";async function u(){try{return await n.get(`${a}/products/categories`)}catch(t){console.log(t.message)}}u().then(t=>console.log(t));async function p(t){try{return(await n.get(`${a}/products/${t}`)).data}catch(e){console.log(e.message)}}let g="640c2dd963a319ea671e3676";p(g).then(t=>console.log(t));async function l(){try{return await n.get(`${a}/products/popular?limit=5`)}catch(t){console.log(t.message)}}l().then(t=>console.log(t));async function f(){try{return await n.get(`${a}/products/discount`)}catch(t){console.log(t.message)}}f().then(t=>console.log(t));async function h({keyword:t,category:e,byABC:s=!0,byPrice:c=!1,byPopularity:o=!1,page:r=1,limit:i=6}){try{const d=new URLSearchParams({keyword:t,category:e,byABC:s?"true":"false",byPrice:c?"true":"false",byPopularity:o?"true":"false",page:r,limit:i});return t&&d.append("keyword",t),(await n.get(`${a}/products?${d}`)).data}catch(d){console.log(d.message)}}const m={category:"Fresh_Produce",byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};h(m).then(t=>console.log(t));const y={email:"ssss@Comment.ua"};async function v(t){return(await n.post(`${a}/subscription`,t)).data}v(y).then(t=>console.log(t)).catch(t=>console.log(t.message));async function $(t){return(await n.post(`${a}/orders`,t)).data}const P={email:"ssss@Comment.ua",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]};$(P).then(t=>console.log(t));const b={form:document.querySelector(".categories")};async function w(){try{const e=(await u()).data;for(let s=0;s<e.length;s++)b.form.insertAdjacentHTML("beforeend",`<option value="value${[s+1]}">${e[s]}</option>`)}catch{console.log("err")}}w();async function L(t,e,s=1,c=6){const o=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${e}&page=${s}&limit=${c}`;try{return(await(await fetch(o)).json()).results}catch(r){return console.error("Error fetching products:",r),[]}}function C(t){return`
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
          <svg class="cart-icon" width="34" height="34">
            <use href="./src/icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          </div>
        </div>
      </div>
    </div>
  `}function E(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}async function A(){const t="Ac",e="Fresh_Produce";try{const s=await L(t,e),c=E(s,6),o=document.getElementById("productList");c.forEach(r=>{o.innerHTML+=C(r)})}catch(s){console.error("Error:",s)}}document.addEventListener("DOMContentLoaded",A);l().then(t=>console.log(t));fetch("https://food-boutique.b.goit.study/api/products/discount").then(t=>t.json()).then(t=>{const e=k(t,2),s=document.getElementById("productList");e.forEach(c=>{s.innerHTML+=M(c)})});function M(t){return`
      <div class="product-card">
        <div class="product-background">
          <img src="${t.img}" alt="${t.name}" class="product-image">
        </div>
        <div class="product-details">
          <div class="details-text">
          <h2 class="product-name">${t.name}</h2>
          <p class="product-price">$${t.price.toFixed(2)}</p>
          </div>
          <svg class="cart-icon" width="34" height="34">
            <use href="./src/icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
        </div>
      </div>
    `}function k(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}
//# sourceMappingURL=commonHelpers.js.map
