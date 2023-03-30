
const picturesList = document.querySelector('.pictures_list');

for (const picture in products) {
  const pictureItem = products[picture];
  
  const listItem = `
    <li class="pictures_item" data-category=${pictureItem.productCategory}>
                        <img src=${pictureItem.imageSrc} onclick="location.href = 'singleProduct.html?id=${pictureItem.id}';" alt="image">
                        <a href="" class="cart_icon"><i class="fa-solid fa-cart-shopping"></i>
                         <span class="cart_text">Add to cart</span></a>
                    <div class="pictures_container">
                        <a href="singleProduct.html?id=${pictureItem.id}" class="linkForSinglePage" data-product="${pictureItem.id}">${pictureItem.productName}</a>
                        <span>${pictureItem.productCategory}</span>
                        <p><span class="pictures_strike">${pictureItem.productPrice}</span>${pictureItem.productDiscountPrice}</p>
                        <div class="highlight">
                            <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                        </div>
                    </div>
      </li>
  `;
  picturesList.insertAdjacentHTML("beforeend", listItem);
}
const pictureItems = document.querySelectorAll('.pictures_item');
pictureItems.forEach(function(pictureItem) {
  const cart = pictureItem.querySelector('.cart_icon');
  pictureItem.addEventListener('mouseover', function(e) {
    e.preventDefault();
    cart.style.display='block';
    /*cart.addEventListener('click',function(e){
        e.preventDefault();
        alert('Item added to the cart');
    })*/
  });

  pictureItem.addEventListener('mouseleave', function(e) {
    e.preventDefault();
    cart.style.display='none';
  });
});


