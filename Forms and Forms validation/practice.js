
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#emailError").textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailAns) {
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if(!passwordAns) {
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }

    if(isValid) {
        document.querySelector("#result").textContent = "Everything is correct";
    }

});



// confusion questions

// diff b/w value and textCOntent
// ANswer -> value aap use krte ho input ki value ko nikalne ke liye 
// or textContent use krte ho koi bhi text nikalne/ manipulate krne ke liye   // teswt vale html tags ke liye.. like paragraph





























