function generateCat(){
    document.getElementById("cats").innerHTML += "<img src =\"https://www.catgifpage.com/gifs/318.gif\"/>"
}
function resetPage(){
    document.getElementById("cats").innerHTML =null;
}
document.getElementById("makeCat").onclick = function() {generateCat()};
document.getElementById("reset").onclick = function() {resetPage()};