let total = 0;
let greatTotal = 0;
let one, two, three, four, five, six, seven, eight, nine, zero;
let sumOne, sumTwo, sumThree, sumFour, sumFive, sumSix, sumSeven, sumEight, sumNine, sumZero;

function clean() {
    document.getElementById('enter').value = '0';
    let total = 0;
    let greatTotal = 0;
}

function pressMinus() {
    minus = document.getElementById('enter').value;
    if (document.getElementById('enter').value !== "0") {
        document.getElementById('enter').value = minus + "-";
    }
}

function pressPlus() {
    plus = document.getElementById('enter').value;
    if (document.getElementById('enter').value !== "0") {
        document.getElementById('enter').value = plus + "+";        
    }    
}

function pressPerCent() {
    percent = document.getElementById('enter').value;
    if (document.getElementById('enter').value !== "0") {
        document.getElementById('enter').value = percent + "%";
    }    
}

function pressPeriod() {
    period = document.getElementById('enter').value;
    if (document.getElementById('enter').value !== "0") {
        document.getElementById('enter').value = period + ".";
    }
}

function pressOne() {
    one = document.getElementById('enter').value;
    if (one === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "1";
    } else {
        document.getElementById('enter').value = one + "1";
    }
}

function pressTwo() {
    two = document.getElementById('enter').value;
    if (two === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "2";
    } else {
        document.getElementById('enter').value = two + "2";
    }
}

function pressThree() {
    three = document.getElementById('enter').value;
    if (three === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "3";
    } else {
        document.getElementById('enter').value = three + "3";
    }
}

function pressFour() {
    four = document.getElementById('enter').value;
    if (four === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "4";
    } else {
        document.getElementById('enter').value = four + "4";
    }
}

function pressFive() {
    five = document.getElementById('enter').value;
    if (five === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "5";
    } else {
        document.getElementById('enter').value = five + "5";
    }
}

function pressSix() {
    six = document.getElementById('enter').value;
    if (six === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "6";
    } else {
        document.getElementById('enter').value = six + "6";
    }    
}

function pressSeven() {
    seven = document.getElementById('enter').value;
    if (seven === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "7";
    } else {
        document.getElementById('enter').value = seven + "7";
    }
}

function pressEight() {    
    eight = document.getElementById('enter').value;
    if (eight === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "8";
    } else {
        document.getElementById('enter').value = eight + "8";
    }
}

function pressNine() {
    nine = document.getElementById('enter').value;
    if (nine === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "9";
    } else {
        document.getElementById('enter').value = nine + "9";
    }
}

function pressZero() {
    zero = document.getElementById('enter').value;
    if (zero === "0") {
        document.getElementById('enter').value = '';                
        document.getElementById('enter').value = "0";
    } else {
        document.getElementById('enter').value = zero + "0";
    }    
}