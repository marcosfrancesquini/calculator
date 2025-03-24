let total = 0;
let greatTotal = 0;

function clean(){
    document.getElementById('enter').value='';
    //Note: It is necessary also clear the variables' values
}

function pressPerCent(){
    let value = document.getElementById('enter').value;
    total = total + parseFloat(value);
    document.getElementById('enter').value = total;
    clean();
}