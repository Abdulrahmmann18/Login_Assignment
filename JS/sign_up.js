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
    else {
        var registeredUsersList = JSON.parse(localStorage.getItem("registeredUsersList"));
        if (registeredUsersList==null) {
            registeredUsersList = [];
            registeredUsersList.push(user);
            localStorage.setItem("registeredUsersList", JSON.stringify(registeredUsersList));
            msgInput.innerHTML = `sign up is successful`;
            // go to login
            window.location.href = "index.html";
        }
        else {
            var found = false;
            for (let index = 0; index < registeredUsersList.length; index++) {
                if ((user.email == registeredUsersList[index].email) && (user.name == registeredUsersList[index].name) && (user.password == registeredUsersList[index].password)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                registeredUsersList.push(user);
                localStorage.setItem("registeredUsersList", JSON.stringify(registeredUsersList));
                msgInput.innerHTML = `sign up is successful`;
                // go to login
                window.location.href = "index.html";
            }
            else {
                msgInput.innerHTML = `You already have an acount. you can sign in`;
            }
        }

    }

})
