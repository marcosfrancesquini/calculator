let total = 0;
let greatTotal = 0;
let one, two, three, four, five, six, seven, eight, nine, zero;
let sumOne, sumTwo, sumThree, sumFour, sumFive, sumSix, sumSeven, sumEight, sumNine, sumZero;
// let value = inputElement.value;
// let lastChar = value[value.length - 1];

function checkChars(str) {
    const strToString = (str.split(''));
    const reversedString = strToString.reverse();
    console.log(reversedString);
}

function clean() {
    document.getElementById('enter').value = '0';
    let total = 0;
    let greatTotal = 0;
}

function pressNegativePositive() {
    let inputElement = document.getElementById('enter');
    let value = inputElement.value;
    let lastChar = value[value.length - 1];
    checkChars(value);
    console.log(checkChars(value));
    
    if (value !== "" && value !== "0") {
        if (value.endsWith(')')) {
            inputElement.value = value.substring(2, value.length - 1);
        } else {
            if (!isNaN(lastChar) || lastChar === '.') {
                console.log("!isNaN(lastChar)-> "+!isNaN(lastChar))
                inputElement.value = "-(" + value + ")";
            } else {
                console.log("O último caractere não é um número.");
            }
        }
    }   

}

function pressOperator(operator) {
    let currentValue = document.getElementById('enter').value;
    let lastChar = currentValue[currentValue.length - 1];
    if (currentValue !== "0" && !/[+\-*/%]/.test(lastChar)) {
        document.getElementById('enter').value = currentValue + operator;
    }
    else if (/[+\-*/%]/.test(lastChar)) {
        document.getElementById('enter').value = currentValue.slice(0, -1) + operator;
    }
}

function pressNumber(number) {
    let typed = document.getElementById('enter').value;
    let lastChar = typed[typed.length - 1];

    if (typed === "0") {
        document.getElementById('enter').value = number;
    } 
    else {
        // Esse regex aqui, verifica se o último caractere é um operador ou parêntese aberto
        if (/[+\-*/(]/.test(lastChar)) {
            document.getElementById('enter').value = typed + number;
        }
        else if (lastChar === '.') {
            if (!typed.split(/[+\-*/]/).pop().includes('.')) {
                document.getElementById('enter').value = typed + number;
            }
        }
        else {
            document.getElementById('enter').value = typed + number;
        }
    }
}

function pressOne() { pressNumber('1'); };
function pressTwo() { pressNumber('2'); };
function pressThree() { pressNumber('3'); };
function pressFour() { pressNumber('4'); };
function pressFive() { pressNumber('5'); };
function pressSix() { pressNumber('6'); };
function pressSeven() { pressNumber('7'); };
function pressEight() { pressNumber('8'); };
function pressNine() { pressNumber('9'); };
function pressZero() { pressNumber('0'); };

function pressTimes() { pressOperator('*'); }
function pressMinus() { pressOperator('-'); }
function pressPlus() { pressOperator('+'); }
function pressPerCent() { pressOperator('%'); }
function pressDivide() { pressOperator('/'); }


function pressArrow() {
    arrow = document.getElementById('enter').value;
    if (arrow.length <= 1) {
        document.getElementById('enter').value = "0";
    }

    if (document.getElementById('enter').value !== "0") {
        let lastCharRemoved = arrow.slice(0, -1);
        console.log(lastCharRemoved);
        document.getElementById('enter').value = lastCharRemoved;
    }
}

f