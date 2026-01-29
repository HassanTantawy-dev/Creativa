// function getApi() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var result = JSON.parse(this.responseText);
//             var myText = "";
//             for (var i = 0; i < result.length; i++) {
//                 var cartoona = `
//                 <div class="col-md-4 text-center mb-5">
//                 <img src="${result[i].url}">
//                 <h4>${result[i].title}</h4>
//                 <h6>${result[i].id}</h6>
//             </div>                
//                 `;
//                 myText = myText + cartoona;
//             }
//             document.querySelector(".text").innerHTML = myText;
//         }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
//     xhttp.send();
// }
// getApi();

// ============================== Using Fetch Api =============================

// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(function(result){
//     return result.json();
// })
// .then(function(Mohamed){
//     var myText = "";
//     for (var i = 0; i < Mohamed.length; i++) {
//         var cartoona = `
//         <div class="col-md-4 text-center mb-5">
//         <img src="${Mohamed[i].url}">
//         <h4>${Mohamed[i].title}</h4>
//         <h6>${Mohamed[i].id}</h6>
//         </div>                
//         `;
//         myText = myText + cartoona;
//     }
//     document.querySelector(".text").innerHTML = myText;
// });

// ============================== Using Async Await =============================

async function getApi() {
    var result = await fetch("https://dummyjson.com/products");
    var ali = await result.json();
    var Mohamed = ali.products;
    var myText = "";
    for (var i = 0; i < Mohamed.length; i++) {
        var cartoona = `
        <div class="col-md-4 text-center mb-5">
        <img src="${Mohamed[i].images[0]}" class="w-100" style="height:350px; object-fit:cover;">
        <h4>${Mohamed[i].title}</h4>
        <h4>${Mohamed[i].brand}</h4>
        <h4>${Mohamed[i].category}</h4>
        <h6>${Mohamed[i].price}</h6>
        <h6>${Mohamed[i].id}</h6>
        </div>                
        `;
        myText = myText + cartoona;
    }
    document.querySelector(".text").innerHTML = myText;
}
getApi();