import { getProductsCategories } from './api.js';

const refs = {
  form: document.querySelector('.categories'),
};

async function loadCategories() {
  try {
    const categoriesList = await getProductsCategories();
    const data = categoriesList.data;
    for (let i = 0; i < data.length; i++) {
      refs.form.insertAdjacentHTML(
        'beforeend',
        `<option value="value${[i + 1]}">${data[i]}</option>`
      );
    }
  } catch (error) {
    console.log('err');
  }
}

loadCategories();
