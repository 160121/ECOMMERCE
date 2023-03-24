
const featureItems = document.querySelectorAll('.features_item');
featureItems.forEach(function(featureItem) {
  const cart = featureItem.querySelector('.cart_icon');
  featureItem.addEventListener('mouseover', function(e) {
    e.preventDefault();
    cart.style.display='block';
    /*cart.addEventListener('click',function(e){
        e.preventDefault();
        alert('Item added to the cart');
    })*/
  });

  featureItem.addEventListener('mouseleave', function(e) {
    e.preventDefault();
    cart.style.display='none';
  });
});

