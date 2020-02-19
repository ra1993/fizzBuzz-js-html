theOutput = document.getElementById("theOutput");

output = document.getElementById("output").textContent;

theButton = document.getElementById("theButton");
let start_num = document.getElementById("start_num").value;
let end_num =  document.getElementById("end_num").value;


var fizzBuzz = function(start_num, end_num) {

    output = []

    for(var i = start_num; i <= end_num; i++){

        if(i % 3 === 0 && i % 5 === 0){
           output.push("FizzBuzz");
        }else if(i % 3 === 0){

            output.push("Fizz");
        }
        else if(i % 5 === 0){

            output.push("Buzz");
        }
        else{

           output.push(i);
        };
    }