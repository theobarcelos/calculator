function insert(num){
    var number = document.getElementById('result').innerHTML;
    var number2 = document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function calculate(){
    var result = document.getElementById('result').innerHTML;
    var validValue = document.getElementById('validValue');
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }
}

