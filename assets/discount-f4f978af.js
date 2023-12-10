import{a as i}from"./vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const a="https://food-boutique.b.goit.study/api";async function p(){try{return await i.get(`${a}/products/categories`)}catch(e){console.log(e.message)}}p().then(e=>console.log(e));async function h(e){try{return(await i.get(`${a}/products/${e}`)).data}catch(o){console.log(o.message)}}let y="640c2dd963a319ea671e3676";h(y).then(e=>console.log(e));async function g(){try{return await i.get(`${a}/products/popular?limit=5`)}catch(e){console.log(e.message)}}g().then(e=>console.log(e));async function f(){try{return await i.get(`${a}/products/discount`)}catch(e){console.log(e.message)}}f().then(e=>console.log(e));async function v({keyword:e,category:o,byABC:r=!0,byPrice:c=!1,byPopularity:t=!1,page:s=1,limit:n=6}){try{const d=new URLSearchParams({category:o,byABC:r?"true":"false",byPrice:c?"true":"false",byPopularity:t?"true":"false",page:s,limit:n});return e&&d.append("keyword",e),(await i.get(`${a}/products?${d}`)).data}catch(d){console.log(d.message)}}const P={category:"Fresh_Produce",byABC:!0,byPrice:!1,byPopularity:!1,page:1,limit:6};v(P).then(e=>console.log(e));const $={email:"ssss@Comment.ua"};async function w(e){return(await i.post(`${a}/subscription`,e)).data}w($).then(e=>console.log(e)).catch(e=>console.log(e.message));async function b(e){return(await i.post(`${a}/orders`,e)).data}const L={email:"ssss@Comment.ua",products:[{productId:"640c2dd963a319ea671e383b",amount:2}]};b(L).then(e=>console.log(e));const C={form:document.querySelector(".filters-categories")};async function E(){try{const o=(await p()).data;for(let r=0;r<o.length;r++)C.form.insertAdjacentHTML("beforeend",`<option value="value${[r+1]}">${o[r]}</option>`)}catch{console.log("err")}}E();async function A(e,o,r=1,c=6){const t=`https://food-boutique.b.goit.study/api/products?keyword=${e}&category=${o}&page=${r}&limit=${c}`;try{return(await(await fetch(t)).json()).results}catch(s){return console.error("Error fetching products:",s),[]}}function M(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function k(e){return`
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
  `}async function l(e=1){const o="Ac",r="Fresh_Produce",c=M();try{const t=await A(o,r,e,c),s=t,n=document.getElementById("productList");n.innerHTML="",s.forEach(u=>{n.innerHTML+=k(u)});const d=Math.ceil(t.total/c);renderPagination(d,e)}catch(t){console.error("Помилка:",t)}}document.addEventListener("DOMContentLoaded",()=>{l()});window.changePage=function(e){l(e)};window.addEventListener("resize",l);var m=document.createElement("script");m.src="/js/pagination.js";document.head.appendChild(m);g().then(e=>console.log(e));function B(e,o){return e.sort(()=>.5-Math.random()).slice(0,o)}function F(e){return`
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
    `}f().then(e=>e.data).then(e=>{const o=B(e,2),r=document.getElementById("discountContainer");o.forEach(c=>{r.innerHTML+=F(c)})}).catch(e=>{console.error(e.message)});
//# sourceMappingURL=discount-f4f978af.js.map
