function renderPagination(totalPages, currentPage) {
  const paginationCont = document.getElementById('btn-numbers');
  paginationCont.innerHTML = ''; // Очистка содержимого контейнера перед добавлением новых элементов

  const pagesPerView = 5; // Количество отображаемых цифр в поле зрения

  let startPage = Math.max(currentPage - Math.floor(pagesPerView / 2), 1);
  let endPage = Math.min(startPage + pagesPerView - 1, totalPages);

  if (endPage - startPage + 1 < pagesPerView) {
    startPage = Math.max(endPage - pagesPerView + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageNumber = document.createElement("span");
    pageNumber.classList.add("page-number");
    pageNumber.textContent = i;
    paginationCont.appendChild(pageNumber);

    // Добавляем обработчик события click для каждого элемента pageNumber
    pageNumber.addEventListener('click', function () {
      changePage(i);
    });
  }

  const btnLeft = document.getElementById('btn-left');
  btnLeft.addEventListener('click', function () {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  });

  const btnRight = document.getElementById('btn-right');
  btnRight.addEventListener('click', function () {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  });
}