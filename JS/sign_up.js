var nameInput = document.querySelector('.nameInput');
var emailInput = document.querySelector('.mailInput');
var passInput  = document.querySelector('.passInput');
var signUpBtn  = document.querySelector('.signUpBtn');
var msgInput   = document.querySelector('.msg');


signUpBtn.addEventListener('click', function (e) {

    var user = {
        name : nameInput.value,
        email : emailInput.value,
        password : passInput.value
    };

    

    if ((user.email == "") || (user.password == "") || (user.name == "")) {
        msgInput.innerHTML = `all fields are required`;
    }
    else if (validateForm(nameInput) && validateForm(emailInput) && validateForm(passInput)) {
        var registeredUsersList = JSON.parse(localStorage.getItem("registeredUsersList"));
        if (registeredUsersList==null) {
            registeredUsersList = [];
            registeredUsersList.push(user);
            localStorage.setItem("registeredUsersList", JSON.stringify(registeredUsersList));
            msgInput.innerHTML = `sign up is successful`;
            // go to login
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000); // 2000ms = 2 seconds
        }
        else {
            var found = false;
            for (let index = 0; index < registeredUsersList.length; index++) {
                if (user.email == registeredUsersList[index].email) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                registeredUsersList.push(user);
                localStorage.setItem("registeredUsersList", JSON.stringify(registeredUsersList));
                msgInput.innerHTML = `sign up is successful`;
                // go to login
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000); // 2000ms = 2 seconds
            }
            else {
                msgInput.innerHTML = `You already have an acount. you can sign in`;
            }
        }

    }

})


nameInput.addEventListener('keyup', function (e) {
    validateForm(e.target);
})
emailInput.addEventListener('keyup', function (e) {
    validateForm(e.target);
})
passInput.addEventListener('keyup', function (e) {
    validateForm(e.target);
})

function validateForm(element){
    var regex = {
        nameInput : /^[a-zA-Z][a-zA-Z0-9]{1,12}[_\-.]?[a-zA-Z0-9]{1,12}$/,
        mailInput : /^[a-zA-Z][a-zA-Z0-9._-]{1,18}[a-zA-Z0-9]@(gmail|icloud)\.com$/,
        passInput : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,20}$/
    };
    if (regex[element.id].test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.add("d-none");
        return true;
    }
    else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.classList.remove("d-none");
        return false;
    }

}