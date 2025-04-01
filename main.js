function insert(num){
    var numero = document.getElementById('result').innerHTML;
    var numero2 = document.getElementById('result').innerHTML = numero + num;  
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function calculate(){
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result)
    }
}

backgroundColor