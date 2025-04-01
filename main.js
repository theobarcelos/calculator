var displayCalc = document.getElementById('result');

function insert(num){
    var number = displayCalc.innerHTML;
    var number2 = displayCalc.innerHTML = number + num;
    if(displayCalc.innerHTML.length > 8){
        displayCalc.style.fontSize = "15px"
        displayCalc.innerHTML = "Characters limit exceeded!";
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