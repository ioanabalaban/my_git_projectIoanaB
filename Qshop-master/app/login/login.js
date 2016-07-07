document.addEventListener('DOMContentLoaded',function(){
    //the dom has been loaded
    //get a reference to our form
    var registerForm = document.querySelector('#login');
    //a collection of input ids
    var inputs = ['#username','#password'];
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
