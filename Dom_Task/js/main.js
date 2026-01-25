document.querySelector("#myform").addEventListener("submit", function (event) {
    var works = document.querySelector("#works").value;
    var result = document.querySelector("#result");
    var btn = document.getElementById("btn");
    
    if (works == "") {
        btn.setAttribute("class", "alert alert-danger text-center p-1 mt-2");
        btn.innerHTML = "Please Enter Your Task";
        event.preventDefault();
    } else {
        var myli = document.createElement("li");
        myli.innerHTML = works;
        result.appendChild(myli);
        document.querySelector("#works").value = "";
        event.preventDefault();
    }
});
document.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var scrollValue = window.scrollY;
    if (scrollValue > 350) {
        navbar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark");
    } else {
        navbar.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
    }
});
