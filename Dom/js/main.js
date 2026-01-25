// document.querySelector('#red').onclick=function(item) {
//     document.querySelector('#demo').style.color='red'; 
//     document.querySelector('#demo').style.textAlign=item.target.dataset.align;
// }
// document.querySelector('#green').onclick=function(item) {
//     document.querySelector('#demo').style.color='green'; 
//     document.querySelector('#demo').style.textAlign=item.target.dataset.align;
// }
// document.querySelector('#blue').onclick=function(item) {
//     document.querySelector('#demo').style.color='blue'; 
//     document.querySelector('#demo').style.textAlign=item.target.dataset.align;
// }

document.querySelectorAll('.pen').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('#demo').style.color=item.dataset.color; 
        document.querySelector('#demo').style.textAlign=item.dataset.align;
    });
});