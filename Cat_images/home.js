function generateCat(){
    document.getElementById("cats").innerHTML = "<img src = \"https://www.shropshirestar.com/resizer/Gz0w8rBS97PJj3ksgPQHrYbDQew=/1000x0/filters:quality(100)/arc-anglerfish-arc2-prod-shropshirestar-mna.s3.amazonaws.com/public/HIQBCXT7UVGRRBNNL63AFZ6B2M.jpg\">";
}
function resetPage(){
    document.getElementById("cats").innerHTML =null;
}
document.getElementById("makeCat").onclick = function() {generateCat()};
document.getElementById("reset").onclick = function() {resetPage()};