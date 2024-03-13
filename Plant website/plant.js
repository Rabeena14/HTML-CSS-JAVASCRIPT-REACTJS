var counter=1;
setInterval(function(){
    document.getElementById("radio" + counter).checked=true;
    counter=counter+1;
    if(counter>3){
        counter=1;
    }
},5000);



var cartCounts = {};

function addToCart(productId) {
  // Initialize cart count if not exists
  if (!cartCounts[productId]) {
    cartCounts[productId] = 0;
  }

  // Increment cart count
  cartCounts[productId]++;

  // Update the cart count in the respective product div
  updateCartCount(productId);
}

function updateCartCount(productId) {
  // Get the cart count element within the product div
  var cartCountElement = document.getElementById('cart-count-' + productId);

  // Update the cart count
  if (cartCountElement) {
    cartCountElement.innerText = cartCounts[productId];
  }
}
