function renderPagination(totalPages, currentPage) {

  const paginationCont = document.getElementById('btn-numbers');
  paginationCont.innerHTML = ''; // Очистка содержимого контейнера перед добавлением новых элементов

  for (let i = 1; i <= totalPages; i++) {

    const pageNumber = document.createElement("span");
    pageNumber.classList.add("page-number");
    pageNumber.textContent = i;
    paginationCont.appendChild(pageNumber);
    
    // Добавляем обработчик события click для каждого элемента pageNumber
    pageNumber.addEventListener('click', function () {
      changePage(i);
    });
  }
}

  // for (let i = 1; i <= totalPages; i++) {
  // const pageNumber = document.createElement("span");
  // pageNumber.classList.add("page-number");
  
    // if (i === 1 && currentPage > 4) {
    //   pageNumber.textContent = '...';
    //   pageNumber.classList.add('dots');
    // } else if (i === currentPage) {
    //   pageNumber.textContent = currentPage;
    //   pageNumber.classList.add('active');
    // } else if (i === currentPage + 1 && currentPage < totalPages) {
    //   pageNumber.textContent = currentPage + 1;
    // } else if (i === currentPage - 1 && currentPage > 1) {
    //   pageNumber.textContent = currentPage - 1;
    // } else {
    //   pageNumber.textContent = i;
    // }
    

  // for (let i = 1; i <= totalPages; i++) {
  //   const pageNumber = document.createElement("span");
  //   pageNumber.classList.add("page-number");
  //   pageNumber.textContent = i;

  //   paginationCont.appendChild(pageNumber);
    
  //   pageNumber.addEventListener('click', )
  // }
  
  // if (i <= 4) {
  //   pageNumber.textContent = i;
  // } else if (i === 5) {
  //   pageNumber.textContent = "...";
  //   pageNumber.classList.add("dots");
  // } else {
  //   pageNumber.textContent = i;
  // }
  
 

  
  // Добавляем обработчик события click для каждого элемента pageNumber
  // if (i <= 4 || i === totalPages) {
  //   pageNumber.addEventListener('click', function() {
  //     changePage(i);
  //   });
  //   }
  // }
