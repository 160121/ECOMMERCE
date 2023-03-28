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
