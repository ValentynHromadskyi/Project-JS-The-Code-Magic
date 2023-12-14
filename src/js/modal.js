import { getProductById } from './api.js';

const refs = {
  cart: document.querySelector('.productlist-card'),
};

export function addToCart(id) {
  try {
    console.log(id);

    let myArray = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(myArray);
    // Об'єкт, який потрібно додати до масиву
    const newCart = { id: id, pieces: '1' };

    // Додавання нового об'єкта до масиву
    myArray.push(newCart);

    // Оновлення масиву об'єктів у localStorage
    localStorage.setItem('cart', JSON.stringify(myArray));
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

function waitForElements(selector) {
  return new Promise((resolve, reject) => {
    const elements = document.querySelectorAll(selector);

    if (elements.length > 0) {
      resolve(elements);
    } else {
      const observer = new MutationObserver(() => {
        const updatedElements = document.querySelectorAll(selector);
        if (updatedElements.length > 0) {
          observer.disconnect();
          resolve(updatedElements);
        }
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    }
  });
}

{
  /* // Очікуємо на появу всіх елементів з класом modalOn */
}
waitForElements('.modalOn')
  .then(elements => {
    elements.forEach(element => {
      element.addEventListener('click', e => {
        const id = e.currentTarget.dataset.productlistId;
        if (localStorage.getItem(id)) {
          getProduct(id, 'Remove from');
        } else {
          getProduct(id, 'Add to');
        }

        openModal();
      });
    });
  })
  .catch(error => {
    console.error(error.message);
  });

waitForElements('.modalOndisc')
  .then(elements => {
    elements.forEach(element => {
      element.addEventListener('click', e => {
        const id = e.currentTarget.dataset.productlistId;
        if (localStorage.getItem(id)) {
          getProduct(id, 'Remove from');
        } else {
          getProduct(id, 'Add to');
        }

        openModal();
      });
    });
  })
  .catch(error => {
    console.error(error.message);
  });

waitForElements('.modalOpopul')
  .then(elements => {
    elements.forEach(element => {
      element.addEventListener('click', e => {
        const id = e.currentTarget.dataset.productlistId;
        if (localStorage.getItem(id)) {
          getProduct(id, 'Remove from');
        } else {
          getProduct(id, 'Add to');
        }

        openModal();
      });
    });
  })
  .catch(error => {
    console.error(error.message);
  });
