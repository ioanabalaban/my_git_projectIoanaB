
document.addEventListener('DOMContentLoaded',function(){
    var products = getProductList();
    //es6 template syntax


    var templateProduct = `
    <h2>__NAME__</h2>
    <div class="review-number">
    <span class="review-count">__REVIEWSNUMBER__</span> reviews
    </div>
    <p>$__PRICE__</p>
    <p class="description">__DESCRIPTION__</p>`;



    var productListNode =  document.querySelector('#product-summary');
      var div = document.createElement('div');
      var id = getParameterByName('id')
      div.className = 'col-sm-12';
      var productHTML = templateProduct.replace('__NAME__', products[id].name)
                                       .replace('__PRICE__', products[id].price)
                                       .replace('__PICTURE__', products[id].picture)
                                       .replace('__REVIEWSNUMBER__', products[id].reviews.length)
                                       .replace('__DESCRIPTION__', products[id].description);

      div.innerHTML = productHTML;
      productListNode.appendChild(div);

      var templateProductContentTab = `
      <div role="tabpanel" class="tab-pane active" >__DESCRIPTION__</div>
      <div role="tabpanel" class="tab-pane">
          <div class="table-responsive table-bordered">
              <table class="table">
                  <tbody>
                  <tr>
                      <th>Size</th>
                      <td>20'X 30'</td>
                  </tr>
                  <tr>
                      <th> Colors</th>
                      <td>Red, Blue</td>
                  </tr>
                  <tr>
                      <th> Material</th>
                      <td>100% Cotton</td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </div>
      <div role="tabpanel" class="tab-pane" id="reviews">
         Review here
      </div>
      <p>$__PRICE__</p>
      <p class="description">__DESCRIPTION__</p>`;


})

function clickCounterPlus() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = localStorage.clickcount;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function clickCounterMinus() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)-1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = localStorage.clickcount;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
