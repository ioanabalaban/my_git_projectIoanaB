document.addEventListener('DOMContentLoaded',function(){
    //the dom has been loaded
    //get a reference to our form
    var registerForm = document.querySelector('#register');
    //a collection of input ids
    var inputs = ['#username','#email','#password','#confirm-password'];
    //attach to each input an event listener so we can check for events
    for(var i=0;i<inputs.length;i++) {
      document.querySelector(inputs[i]).addEventListener("keyup",function() {
        onchangeElem('#' + this.id)
      })
    }
    //listen to the submit event
    registerForm.addEventListener('submit', function(event){
        var hasError = false;
        for(var i=0;i<inputs.length;i++) {
          if(isEmptyInput(inputs[i])) {
             hasError = true;
             showError(inputs[i])
          } else {
            hideError(inputs[i])
          }
        }
        //if at least one element had errors prevent default submit action
        if(hasError) {
          event.preventDefault();
        }
    })
})

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
  var parentNode =  document.querySelector(inputId).parentNode;
  parentNode.className +=  ' has-error';
  parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden','');
}

/**
 * showError - Hide the error for the input
 *
 * @param  {String} inputId The id of the input we show the error
 */
function hideError(inputId) {
  var parentNode =  document.querySelector(inputId).parentNode;
  parentNode.className = parentNode.className.replace('has-error','');

  parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden','');
  parentNode.querySelector('.help-block').className +=' hidden';
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
