//magnifying button on the image
const magnifyButton = document.querySelector('.magnify');
magnifyButton.addEventListener('click', () => {
  window.open('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-400x400.jpg', '_blank');
});
//alternating review and decription
function showdescription() {
    document.getElementById("review").style.display = "none";
    document.getElementById("description").style.display = "block";
}

function showreview() {
    document.getElementById("review").style.display = "block";
    document.getElementById("description").style.display = "none";
}

const tabs = document.querySelectorAll('.btn');
    const tabsContainer = document.querySelector('.operations');
    const tabcontent=document.querySelectorAll('.tabcontent');
    tabsContainer.addEventListener('click', function (e) {
        const clicked = e.target.closest('.btn');
        if (!clicked) return;
        tabs.forEach(t => t.classList.remove('btn-active'));
        tabcontent.forEach(c=>c.classList.remove('tabcontent-active'));
        clicked.classList.add('btn-active');
        document.querySelector(`.tabcontent--${clicked.dataset.tab}`).classList.add('tabcontent-active');
    }); 