theOutput = document.getElementById("theOutput");

document.getElementById("output").textContent = output;

theButton = document.getElementById("theButton");
let start_num = document.getElementById("start_num").value;
let end_num =  document.getElementById("end_num").value;


var fizzBuzz = function(start, end) {

    output = []

    for(var i = start; i <= end; i++){

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