


let cartElement = document.querySelector("#cart tbody");


// ITERATION 1

function updateSubtot(product) {
  let priceElement = product.querySelector(".price span");
  let qtyElement = product.querySelector(".quantity input");


  const price = Number(priceElement.innerHTML); 
  const quantity = Number(qtyElement.value); 

  // Calculate subtotal value
  const subtotal = price * quantity;
  

  const subtotalElement = product.querySelector(".subtotal span");
  
  // Set the product subtotal to the corresponding DOM element
  subtotalElement.innerHTML = subtotal;

  // Return subtotal value so it can be used later
  return subtotal;
}


function calculateAll() {


  const productElements = document.querySelectorAll(".product"); 
  
  let totalPrice = 0;
  
  
  productElements.forEach(function(oneProduct) {
    var productTotal = updateSubtot(oneProduct);
    totalPrice += productTotal; 
  });

 
  var totalPriceElement = document.querySelector("#total-value span");

  totalPriceElement.textContent = totalPrice; 
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const productToRemove = target.parentNode.parentNode;
  cartElement.removeChild(productToRemove);

  calculateAll(); 
}

// ITERATION 4 - Create a binding function that will allow us to easily bind the eventListener to any "Remove" button

function bindDeleteButton(deleteButton) {
  deleteButton.addEventListener("click", removeProduct); 
}


// ITERATION 5

function createProduct() {
  let nameElement = document.querySelector('.create-product input[type="text"]');
  let priceElement = document.querySelector('.create-product input[type="number"]');
  
  console.log(nameElement);
  console.log(priceElement);


  // make sure remove button inherits the same behavior as other remove buttons
  var newRemoveButton = newProductTr.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);
 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // ITERATION 4
  const removeButtons = cart.getElementsByClassName('btn-remove'); // returns an HTML collection, needs to be spread into an array to iterate on it
  [...removeButtons].forEach(button => button.addEventListener('click', removeProduct));

  
});