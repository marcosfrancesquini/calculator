let total = 0;
let greatTotal = 0;
let one, two, three, four, five, six, seven, eight, nine, zero;
let sumOne, sumTwo, sumThree, sumFour, sumFive, sumSix, sumSeven, sumEight, sumNine, sumZero;

function clean() {
    document.getElementById('enter').value = '0';
    let total = 0;
    let greatTotal = 0;
}

function pressPerCent() {
    document.getElementById('enter').value = "%";
    //let value = document.getElementById('percentage').value;
}

function pressOne() {
    one = document.getElementById('enter').value;
    sumOne = (one + "1")
    console.log(one);
    if (one === "0") {
        document.getElementById('enter').value = '';
        console.log(document.getElementById('enter').value)
        document.getElementById('enter').value = sumOne;
    } else {
        document.getElementById('enter').value = sumOne;
    }

}

function pressTwo() {
    two = document.getElementById('enter').value;
    sumTwo = (two + "2")
    document.getElementById('enter').value = sumTwo;
}

function pressThree() {
    three = document.getElementById('enter').value;
    sumThree = (three + "3")
    document.getElementById('enter').value = sumThree;
}

function pressFour() {
    four = document.getElementById('enter').value;
    sumFour = (four + "4")
    document.getElementById('enter').value = sumFour;
}

function pressFive() {
    five = document.getElementById('enter').value;
    sumFive = (five + "5")
    document.getElementById('enter').value = sumFive;
}

function pressSix() {
    six = document.getElementById('enter').value;
    sumSix = (six + "6")
    document.getElementById('enter').value = sumSix;
}

function pressSeven() {
    seven = document.getElementById('enter').value;
    sumSeven = (seven + "7")
    document.getElementById('enter').value = sumSeven;
}

function pressEight() {
    eight = document.getElementById('enter').value;
    sumEight = (eight + "8")
    document.getElementById('enter').value = sumEight;
}

function pressNine() {
    nine = document.getElementById('enter').value;
    sumNine = (nine + "9")
    document.getElementById('enter').value = sumNine;
}

function pressZero() {
    zero = document.getElementById('enter').value;
    sumZero = (zero + "0")
    document.getElementById('enter').value = sumZero;
}