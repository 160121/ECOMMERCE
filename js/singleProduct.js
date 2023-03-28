//magnifying button on the image
function openImage(button) {
  const image = button.parentNode.querySelector('img');
  const imageUrl = image.src;
  window.open(imageUrl, '_blank');
}
//alternating review and decription
function showdescription() {
    document.getElementById("review").style.display = "none";
    document.getElementById("description").style.display = "block";
}

function showreview() {
    document.getElementById("review").style.display = "block";
    document.getElementById("description").style.display = "none";
}

const tabs = document.querySelectorAll('.operations_tab')
    const tabsContainer = document.querySelector('.operations');
    const tabcontent=document.querySelectorAll('.tabcontent');
    tabsContainer.addEventListener('click', function (e) {
        const clicked = e.target.closest('.operations_tab');
        if (!clicked) return;
        tabs.forEach(t => t.classList.remove('operations_tab-active'));
        tabcontent.forEach(c=>c.classList.remove('tabcontent-active'));
        clicked.classList.add('operations_tab-active');
        document.querySelector(`.tabcontent--${clicked.dataset.tab}`).classList.add('tabcontent-active');
    });
//star review
function setRating(value) {
  document.getElementById('rating').value = value;
  const ratings = document.getElementsByClassName('rating');
  for (let i = 0; i < ratings.length; i++) {
    if (i < value) {
      ratings[i].innerHTML = '★';
    } else {
      ratings[i].innerHTML = '☆';
    }
  }
}