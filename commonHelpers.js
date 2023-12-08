import{a as n}from"./assets/vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const a="https://food-boutique.b.goit.study/api";async function l(){try{return await n.get(`${a}/products/categories`)}catch(t){console.log(t.message)}}l().then(t=>console.log(t));async function u(t){try{return(await n.get(`${a}/products/${t}`)).data}catch(o){console.log(o.message)}}let p="640c2dd963a319ea671e3676";u(p).then(t=>console.log(t));async function g(){try{return await n.get(`${a}/products/popular?limit=5`)}catch(t){console.log(t.message)}}g().then(t=>console.log(t));async function f(){try{return await n.get(`${a}/products/discount`)}catch(t){console.log(t.message)}}f().then(t=>console.log(t));async function y({keyword:t,category:o,byABC:r=!0,byPrice:c=!1,byPopularity:e=!1,page:s=1,limit:i=6}){try{const d=new URLSearchParams({keyword:t,category:o,byABC:r?"true":"false",byPrice:c?"true":"false",byPopularity:e?"true":"false",page:s,limit:i});return t&&d.append("keyword",t),(await n.get(`${a}/products?${d}`)).data}catch(d){console.log(d.message)}}const m={category:"Fresh_Produce",byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};y(m).then(t=>console.log(t));const h={email:"ssss@Comment.ua"};async function P(t){return(await n.post(`${a}/subscription`,t)).data}P(h).then(t=>console.log(t)).catch(t=>console.log(t.message));async function $(t){return(await n.post(`${a}/orders`,t)).data}const v={email:"ssss@Comment.ua",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]};$(v).then(t=>console.log(t));const b={form:document.querySelector(".categories")};async function w(){try{const o=(await l()).data;for(let r=0;r<o.length;r++)b.form.insertAdjacentHTML("beforeend",`<option value="value${[r+1]}">${o[r]}</option>`)}catch{console.log("err")}}w();async function L(t,o,r=1,c=6){const e=`https://food-boutique.b.goit.study/api/products?keyword=${t}&category=${o}&page=${r}&limit=${c}`;try{return(await(await fetch(e)).json()).results}catch(s){return console.error("Error fetching products:",s),[]}}function C(t){return`
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
  `}function A(t,o){return t.sort(()=>.5-Math.random()).slice(0,o)}async function E(){const t="Ac",o="Fresh_Produce";try{const r=await L(t,o),c=A(r,6),e=document.getElementById("productList");c.forEach(s=>{e.innerHTML+=C(s)})}catch(r){console.error("Error:",r)}}document.addEventListener("DOMContentLoaded",E);
//# sourceMappingURL=commonHelpers.js.map
