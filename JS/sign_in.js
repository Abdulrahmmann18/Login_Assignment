var emailInput = document.querySelector('.mailInput');
var passInput  = document.querySelector('.passInput');
var signInBtn  = document.querySelector('.signInBtn');
var msgInput   = document.querySelector('.msg');
 

signInBtn.addEventListener('click', function (e) {

    var user = {
        email : emailInput.value,
        password : passInput.value
    };

    if ((user.email == "") || (user.password == "")) {
        msgInput.innerHTML = `all fields are required`;
    }
    else {
        var registeredUsersList = JSON.parse(localStorage.getItem("registeredUsersList"));
        if (registeredUsersList==null) {
            msgInput.innerHTML = `Login is failed, you do not have an account. please sign up`;
        }
        else {
            var found = false;
            var mail_found = false;
            for (let index = 0; index < registeredUsersList.length; index++) {
                if ((user.password == registeredUsersList[index].password) && (user.email == registeredUsersList[index].email)) {
                    found = true;
                    mail_found = true;
                    break;
                }
                else if ( user.email == registeredUsersList[index].email ) 
                {
                    found = false;
                    mail_found = true;
                    break;
                }
                else {
                    found = false;
                    mail_found = false;                    
                }
            }

            if (found) {
                msgInput.innerHTML = `Login is successful`;
                // go to home page
                window.location.href = "Home.html";
            }
            else if (mail_found) {
                msgInput.innerHTML = `Login is failed, Incorrect password`; 
            }
            else {
                msgInput.innerHTML = `Login is failed, Incorrect email`;
            }
        }
    }
})
