// function registerButton(){
//
//                      var user=document.querySelector('#username').value
//                      var email=document.querySelector('#email').value
//                      var pass1=document.querySelector('#password').value
//                      var pass2=document.querySelector('#confirm-password').value
//                      alert(user + " " + email + " " + pass1 + " " + pass2);
//
// }

// function myFunction() {
//     var x, text;
//     x = document.getElementById("username").value;
//     if (x.value == "") {
//         text = "Input not valid";
//     } else {
//         text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

function verifyFunction() {

  var inputUser = document.getElementById("username");
    if (inputUser.value == "") {
        inputUser.style.border = "1px solid red";
    }
    else{
        inputUser.style.border = "1px solid green";
    }
}
