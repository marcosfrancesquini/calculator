let total = 0;
let greatTotal = 0;
let seven;
let eight;
let nine;
let sumSeven;

function clean(){
    document.getElementById('enter').value='0';    
    let total = 0;
    let greatTotal = 0;    
}

function pressPerCent(){
    document.getElementById('enter').value="%";
    //let value = document.getElementById('percentage').value;
}

function pressSeven(){
    
    seven = document.getElementById('enter').value;
    console.log(seven);
    sumSeven = ("7"+seven)
    console.log(sumSeven);
    document.getElementById('enter').value=sumSeven;
    


}

function pressEight(){
    document.getElementById('enter').value="8";
}

function pressNine(){
    document.getElementById('enter').value="9";
}