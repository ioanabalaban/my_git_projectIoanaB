/**
 * onchangeElem - ON change action helper
 *
 * @param  {String} inputId element id to check
 */
function onchangeElem(inputId) {
    isEmptyInput(inputId) ? showError(inputId) : hideError(inputId);
}

/**
 * showError - Show an error for inputId
 *
 * @param  {String} inputId The id of the input we want show the error
 */
function showError(inputId) {
    var parentNode = findParentWithClass(document.querySelector(inputId), 'form-group');
    parentNode.className += ' has-error';
    parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden', '');
}

/**
 * showError - Hide the error for the input
 *
 * @param  {String} inputId The id of the input we show the error
 */
function hideError(inputId) {
    var parentNode = findParentWithClass(document.querySelector(inputId), 'form-group');
    parentNode.className = parentNode.className.replace('has-error', '');

    parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden', '');
    parentNode.querySelector('.help-block').className += ' hidden';
}


/**
 * isEmptyInput - Helper to determine if an input is empty
 *
 * @param  {String} inputId The id of the input to determine if empty
 * @return {boolean}
 */
function isEmptyInput(inputId) {
    return !document.querySelector(inputId).value
}


function findParentWithClass(node, className) {
    if (!node) {
        return null;
    }
    if (node.parentNode.className.indexOf(className) !== -1) {
        return node.parentNode;
    } else {
        return findParentWithClass(node.parentNode, className);
    }
}

function getProductList() {
    return [{
        picture: '../assets/images/products/product-1.jpg',
        name: 'Limited Price',
        price: 299,
        onSale: true
    }, {
        picture: '../assets/images/products/product-2.jpg',
        name: 'Amazing Product',
        price: 299,
        onSale: false
    }, {
        picture: '../assets/images/products/product-3.jpg',
        name: 'New Product',
        price: 79,
        onSale: false
    } {
        picture: '../assets/images/products/product-4.jpg',
        name: 'Limited Product',
        price: 99,
        onSale: false
    }]
}

function
var product = document.querySelector('product-box')
product.innerHTML = '  <span class="on-sale-bubble">Sale!</span>\
  <div class="product">\
      <a href="#" class="add-to-card">Add to card</a>\
      <a href ="product.html">\
          <img src="../assets/images/products/product-1.jpg">\
      </a>\
      <div class="thumb-info">\
          <a href="#">\
              <h4> Limited Price</h4>\
              <h3>$299</h3>\
          </a>'
