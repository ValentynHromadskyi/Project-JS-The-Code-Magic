const PAGE_SIZE = 6;

function renderPagination(totalPages, currentPage) {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  if (totalPages <= 1) {
    paginationContainer.style.display = 'none';
    return;
  }

  paginationContainer.style.display = 'block';

  // кнопка назад
    paginationContainer.innerHTML += `<button class="pagination-btn${currentPage === 1 ? ' disabled' : ''}" onclick="changePage(${currentPage - 1})">
    <svg class="pagination-icon">
    <use href="../icons.svg#icon-caret-small-left"></use>
    </svg>
    </button>`;

  // Render page numbers or ellipses
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
      paginationContainer.innerHTML += `<button class="pagination-btn${i === currentPage ? ' active' : ''}" onclick="changePage(${i})">${i}</button>`;
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      paginationContainer.innerHTML += '<span>...</span>';
    }
  }

  // кнопка вперед
    paginationContainer.innerHTML += `<button class="pagination-btn${currentPage === totalPages ? ' disabled' : ''}" onclick="changePage(${currentPage + 1})">
    <svg class="pagination-icon">
    <use href="../icons.svg#icon-caret-small-right"></use>
    </svg>
    </button>`;
}
