import { getProductById } from './api.js';

export function addToCart(id) {
  try {
    if (localStorage.getItem(id)) {
      localStorage.removeItem(id);
    } else {
      localStorage.setItem(id, JSON.stringify(id));
    }
  } catch (e) {
    console.log(e);
  }
}

async function getProduct(id, btn) {
  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = '';
  const product = await getProductById(id);
  modalContent.innerHTML = renderModalContent(product, btn);
}

function renderModalContent(product, btn) {
  return `
    <div class="modal-product-img">
      <img src="${product.img}" alt="${product.name}" />
    </div>
    <div class="modal-product-info">
        <h4 class="modal-product-title">${product.name}</h4>
      <div class="modal-product-characteristics">
        <div>Category: <span>${product.category}</span></div>
        <div>Size: <span>${product.size}</span></div>
        <div>Popularity: <span>${product.popularity}</span></div>
      </div>
      <p class="modal-product-description">
      ${product.desc}
      </p>
    </div>
    <div class="modal-product-price">$${product.price.toFixed(2)}</div>
    <button class="modal-product-button" data-productlist-id="${
      product._id
    }"> ${btn}<svg class="modal-product-button-icon">
    <use class="modal-product-button-icon" href="./icons.svg#icon-heroicons-solid_shopping-cart"></use>
  </svg></button>
    `;
}

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

function openModal() {
  modal.classList.add('show-modal');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('show-modal');
  document.body.style.overflow = 'auto';
}

document.querySelectorAll('.productlist-card').forEach(el => {
  el.addEventListener('click', function (e) {
    if (el === e.target || el.contains(e.target)) {
      const id = el.dataset.productlistId;

      if (localStorage.getItem(id)) {
        getProduct(id, 'Remove from');
      } else {
        getProduct(id, 'Add to');
      }
      openModal();
    }
  });
});

function windowOnClick(event) {
  if (event.target === modal) {
    closeModal();
  }
}

closeButton.addEventListener('click', closeModal);
window.addEventListener('click', windowOnClick);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) closeModal();
});

document.addEventListener('click', function (e) {
  if (!e.target.classList.contains('modal-product-button')) {
    return;
  }
  const id = e.target.dataset.productlistId;

  e.target.addEventListener('click', addToCart(id));
  e.target.addEventListener('click', closeModal());
});
