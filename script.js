var myinput = document.getElementById('exampleInputName')
var myform = document.querySelector('#myform')

function userNameValidate(input) {
    console.log(input.value)

    var text = input.value.trim()
    if(text.length <= 3)  {
        input.nextElementSibling.innerText = "name must be at least 3 character";
    }
    else{
        input.nextElementSibling.innerText = "";
    }

}
function emailValidate(input) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var text = input.value.trim()

    if(emailPattern.test(text) == false) {
        input.nextElementSibling.innerText ="please enter a valid email"
    } 
    else{
        input.nextElementSibling.innerText ="" 
    }
}

function passwordValidate(input) {
    var text = input.value.trim()
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    console.log(strongRegex.test(text))
    if(strongRegex.test(text) == false) {
        input.nextElementSibling.innerText = "please enter 1 lower character , 1 uppercase character , 1 special character ....."
    }
    else{
        input.nextElementSibling.innerText = ""
    }
}

myform.addEventListener('input' , function(e){
  
    switch(e.target.id){
        case "userName" : 
            userNameValidate(e.target)
        break;
        case "email" :
            emailValidate(e.target)
        break;
        case 'password':
            passwordValidate(e.target)
        break;
    }
})
