var displayCalc = document.getElementById('result');
var validValue = document.getElementById('validValue');

function insert(num){
    var number = displayCalc.innerHTML;
    var number2 = displayCalc.innerHTML = number + num;
    if(displayCalc.innerHTML.length > 8){
        display.style.fontSize = "15px"
        display.innerHTML = "Characters limit exceeded!";
    }
}

function clean(){
    displayCalc.innerHTML = "";
    displayCalc.style.fontSize = "30px"
}

function calculate(){
    var result = displayCalc.innerHTML;
    if(result){
        displayCalc.innerHTML = eval(result);
    }
}