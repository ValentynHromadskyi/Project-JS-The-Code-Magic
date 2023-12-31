  import { getProductsCategories } from './api.js';

  const refs = {
    filterCatList: document.querySelector('.filters-categories'),
    form: document.getElementById('fiters-form'),
    filtersInput: document.querySelector('.filters-input'),
    filtersCategories: document.querySelector('.filters-categories'),
};

  if (refs.form) {
    refs.form.addEventListener('input', handleFiltersSubmit);
  }

  if (refs.form) {
    refs.form.addEventListener('submit', handleFiltersSubmit);
  }
    
 // if (refs.filtersInput) {
  //   refs.filtersInput.addEventListener('input', handleInput);
  // }
  
  // function handleInput(event) {
  //   // Ваш код для обробки введення користувача тут
  //   console.log('Input value:', event.target.value);
  //   // Якщо потрібно щось змінити в сховищі, ви можете зробити це тут
  // }






  
  loadCategories();

  async function loadCategories() {
    try {
      const categoriesList = await getProductsCategories();
      const data = categoriesList.data;
      for (let i = 0; i < data.length; i++) {
        // заміна "_" на " "
        // let result = replaceUnderscoresWithSpaces(data[i]);

        refs.filterCatList.insertAdjacentHTML(
          'beforeend',
          `<option class="filters-categories-option" value="${data[i]}">${data[i]}</option>`
        );
      }
    } catch (error) {
      console.log('err');
    }
  }

  const localvalue = { keyword: null, category: null, page: 1, limit: 6 };

  async function handleFiltersSubmit() {
    const filtersValue = refs.filtersInput.value;
    console.log(filtersValue)
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
       if (refs.filtersInput) {
    refs.filtersInput.value = filtersParce.keyword || '';}
    if (refs.filtersCategories) {
    refs.filtersCategories.value = filtersParce.category || '';
    }
  }

  export function replaceUnderscoresWithSpaces(inputString) {
    let outputString = inputString.replace(/_/g, ' ');
    return outputString;
  }
