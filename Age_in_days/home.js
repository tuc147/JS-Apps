console.log("Striiing");

document.getElementById("ClickMe").onclick = function(){ makeAlert()};
document.getElementById("Reset").onclick = function(){ reset()};

function makeAlert () {
    var age = parseInt(prompt("How old are you?"))
    if(typeof age == "string"){
        document.getElementById("returnText").innerHTML = "Please try again with a valid age";

    }else{
        var ageInDays = age *365;
        document.getElementById("returnText").innerHTML = "You are "+ageInDays+" old";
    }
}
function reset(){
    document.getElementById("returnText").innerHTML = "Please select \"Click Me\" to find out";
}