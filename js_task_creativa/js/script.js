function validate() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");
    var btn = document.getElementById("btn");

    btn.style.backgroundColor = "red";
    btn.style.padding = "8px 10px";
    btn.style.color = "white";
    result.setAttribute("class", "alert alert-danger text-center p-1");

    if (user == "" && email == "" && pass == "" && confirm == "") {
        result.innerHTML = "Enter Data";
        return false;
    } else if (user.length < 5 || user.length > 15) {
        result.innerHTML = "Enter 5-15 caracter in username";
        return false;
    } else if (email.indexOf("@", 3) == -1 || email.indexOf(".com") == -1) {
        result.innerHTML = "Enter valid Email";
        return false;
    } else if (pass.length < 8) {
        result.innerHTML = "Weak Password";
        return false;
    } else if (pass != confirm) {
        result.innerHTML = "Enter Matched Password";
        return false;
    }
}
