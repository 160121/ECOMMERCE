const itemsPerPage = 9;
const itemList = document.querySelector('.pictures_list');
const pagination = document.querySelector('.pagination');
let activePage = 1;

function displayItems(pageNumber, items) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  items.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function createPaginationLinks(numPages) {
  let paginationHTML = '';
  for (let i = 1; i <= numPages; i++) {
    paginationHTML += `<button class="pagination-link" data-page="${i}">${i}</button>`;
  }
  paginationHTML += `<button class="pagination-link" id="next-button" data-page="${activePage + 1}">&raquo;</button>`;
  pagination.innerHTML = paginationHTML;
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', nextPage);
}

function handlePaginationClick(e, items) {
  const selectedPage = parseInt(e.target.dataset.page);
  activePage = selectedPage;
  displayItems(selectedPage, items);
  updateActiveLink(selectedPage);
}

function updateActiveLink(selectedPage) {
  const paginationLinks = document.querySelectorAll('.pagination-link');
  paginationLinks.forEach(link => link.classList.remove('active'));
  paginationLinks[selectedPage - 1].classList.add('active');
  const nextButton = document.getElementById('next-button');
  if (selectedPage === paginationLinks.length-1) {
    nextButton.disabled = true;
    nextButton.style.display="none";
  } else {
    nextButton.disabled = false;
    nextButton.dataset.page = activePage + 1;
    nextButton.style.display="block";
  }
}

function nextPage() {
  //activePage += 1;
  displayItems(activePage, items);
  updateActiveLink(activePage);
}

const items = [...itemList.children];
const numPages = Math.ceil(items.length / itemsPerPage);
createPaginationLinks(numPages);
displayItems(1, items);
const paginationLinks = document.querySelectorAll('.pagination-link');
paginationLinks.forEach(link => {
  link.addEventListener('click', e => {
    handlePaginationClick(e, items);
  });
});
paginationLinks[0].classList.add('active');
