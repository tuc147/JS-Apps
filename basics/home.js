alert("gimme the cheese");



//var name = prompt("what is your name");

//Edits the html within the id tag
document.getElementById('testCase').innerHTML = name;

/**
 * Fun takes a string (your name) and returns "hello (and the name)"
 */
function fun(){
    var num1 = prompt("What is the first number to add");
    var num2 = prompt("What is the second");
    calc(num1,num2);
}
// Simple calculator
//fun();
function calc(num1 , num2){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    var sum = num1+num2;
    alert("the answer is "+sum);
}
var fruits  = ["apple",'Banana','Lemon','Strawberry']
for (var x = 0;x<fruits.length;x++){
    console.log(fruits[x]);
}
// var fruit = prompt("Please give a fruit");
// var ind = parseInt(prompt("please give an index 1-4"));
//ind-=1;

//fruits[ind] = fruit;
for (var x = 0;x<fruits.length;x++){
    console.log(fruits[x]+" 2");
}
// Object practice
let Student = {
    first: "Samuel",
    last: "Fekadu",
    email:"samft99@gmail.com"
};

console.log(Student.first+" "+Student.last);

var rename = prompt("please enter your name");
let arr  = rename.split(" ");
console.log(arr);
let Student2 = {
    first: arr[0],
    last: arr[1],
    email:null,
    stuInfo: function (){
        return this.first + "\n" + this.last;
    }
}
alert(Student2.stuInfo());
