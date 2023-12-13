const PAGE_SIZE = 6;

function renderPagination(totalPages, currentPage) {
  
  const paginationCont = document.getElementById('btn-numbers');
  paginationCont.innerHTML = ''; // Очистка содержимого контейнера перед добавлением новых элементов

  

  for (let i = 1; i <= 6; i++) {
  const pageNumber = document.createElement("span");
  pageNumber.classList.add("page-number");
  
  if (i <= 4) {
    pageNumber.textContent = i;
  } else if (i === 5) {
    pageNumber.textContent = "...";
    pageNumber.classList.add("dots");
  } else {
    pageNumber.textContent = 6;
  }
  
  paginationCont.appendChild(pageNumber);
  
  // Добавляем обработчик события click для каждого элемента pageNumber
  if (i <= 4 || i === 6) {
    pageNumber.addEventListener('click', function() {
      changePage(i);
    });
    }
  }
}





















//   // const paginationContainer = document.getElementById('pagination');

//   // if (totalPages <= 1) {
//   //   paginationContainer.style.display = 'none';
//   //   return;
//   // }

//   // paginationContainer.style.display = 'block';


  // // // кнопка назад
  //   if (currentPage !== 1) {
  // paginationContainer.innerHTML += `<button class="pagination-btn" onclick="changePage(${currentPage - 1})">
  //   <svg class="pagination-icon">
  //     <use href="../icons.svg#icon-caret-small-left"></use>
  //   </svg>
  // </button>`;
  // }

  // // Render page numbers or ellipses
  // for (let i = 1; i <= totalPages; i++) {
  //   paginationContainer.innerHTML += `<span>${i}</span>`
  // }
    
  

  // // кнопка вперед
  //   paginationContainer.innerHTML += `<button class="pagination-btn${currentPage === totalPages ? ' disabled' : ''}" onclick="changePage(${currentPage + 1})">
  //   <svg class="pagination-icon">
  //   <use href="../icons.svg#icon-caret-small-right"></use>
  //   </svg>
  //   </button>`;
// }

