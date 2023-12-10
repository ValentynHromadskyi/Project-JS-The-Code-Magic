import { getProductsCategories, getFilteredProduct } from './api.js';

const refs = {
  filterCatList: document.querySelector('.filters-categories'),
  form: document.getElementById('fiters-form'),
  filtersInput: document.querySelector('.filters-input'),
  filtersCategories: document.querySelector('.filters-categories'),
};

refs.form.addEventListener('submit', handleFiltersSubmit);

async function loadCategories() {
  try {
    const categoriesList = await getProductsCategories();
    const data = categoriesList.data;
    for (let i = 0; i < data.length; i++) {
      refs.filterCatList.insertAdjacentHTML(
        'beforeend',
        `<option value="${data[i]}">${data[i]}</option>`
      );
    }
  } catch (error) {
    console.log('err');
  }
}

await loadCategories();

const localvalue = { keyword: null, category: null, page: 1, limit: 6 };

async function handleFiltersSubmit(event) {
  const filtersValue = refs.filtersInput.value;
  localvalue.keyword = filtersValue;
  if (filtersValue === '') {
    localvalue.keyword = null;
  }
  const filtersCatValue = refs.filtersCategories.value;
  localvalue.category = filtersCatValue;
  if (filtersCatValue === '') {
    localvalue.category = null;
  }
  localStorage.setItem('filters', JSON.stringify(localvalue));

  const filters = {
    keyword: filtersValue,
    category: filtersCatValue,
    byABC: true,
    byPrice: false,
    byPopularity: false,
    page: 1,
    limit: 6,
  };
}

changeForm();

function changeForm() {
  const filtersParce = JSON.parse(localStorage.getItem('filters'));
  refs.filtersInput.value = filtersParce.keyword;
  refs.filtersCategories.value = filtersParce.category;
}
