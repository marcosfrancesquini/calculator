let total = 0;
let greatTotal = 0;
let one, two, three, four, five, six, seven, eight, nine, zero;
let sumOne, sumTwo, sumThree, sumFour, sumFive, sumSix, sumSeven, sumEight, sumNine, sumZero;
// let value = inputElement.value;
// let lastChar = value[value.length - 1];


//parte do audio que fala

// const botoes = {
//     'one': 'um',
//     'two': 'dois',
//     'plus': 'mais',
//     'equal': 'igual'
//     // Adicione todos os outros...
// };

// // Aplica a todos os botões mapeados
// Object.keys(botoes).forEach(id => {
//     const botao = document.getElementById(id);
//     if (botao) {
//         botao.addEventListener('mouseenter', () => playAudio(botoes[id]));
//     }
// });

// // function playAudio(numero) {
// //     const audio = new Audio(`audios/${numero}.mp3`);
// //     audio.play().catch(e => console.log("Erro ao tocar áudio:", e));
// // }
// // document.getElementById('one').addEventListener('mouseenter', () => playAudio('um'));

// const audios = {};
// Object.keys(botoes).forEach(id => {
//     audios[botoes[id]] = new Audio(`audios/${botoes[id]}.mp3`);
// });

// function playAudio(numero) {
//     audios[numero]?.play().catch(e => console.log("Erro ao tocar áudio:", e));
// }

// carregar os audios por garantia e eficiencia
// const audioCache = {};
// Object.keys(botoes).forEach(id => {
//     audioCache[botoes[id]] = new Audio(`audios/${botoes[id]}.mp3`);
// });

// function playAudio(nome) {
//     const audio = new Audio(`audios/${nome}.mp3`);
//     audio.play().catch(e => console.log("Erro ao tocar:", e));
// }

// // Mapeamento dos botões para áudios
// const botoes = {
//     'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5',
//     'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'zero': '0',
//     'plus': 'mais', 'minus': 'menos', 'times': 'multiplica',
//     'divide': 'divide', 'equal': 'igual', 'clean': 'limpa',
//     'percentage': 'porcento', 'neg_pos': 'negativo', 'period': 'ponto'
// };

// // Adiciona eventos de hover a todos os botões
// Object.keys(botoes).forEach(id => {
//     const botao = document.getElementById(id);
//     if (botao) {
//         botao.addEventListener('mouseenter', () => playAudio(botoes[id]));
//     }
// });
const botoes = {
    'one': '1', 
    'two': '2', 
    'three': '3', 
    'four': '4', 
    'five': '5',
    'six': '6', 
    'seven': '7', 
    'eight': '8', 
    'nine': '9', 
    'zero': '0',
    'plus': 'mais', 
    'minus': 'menos', 
    'times': 'multiplica',
    'divide': 'divide', 
    'equal': 'igual', 
    'clean': 'limpa',
    'percentage': 
    'porcento', 
    'neg_pos': 'negativo', 
    'period': 'ponto',
    'arrow': 'arrow'
};

// so p garantir
const audioCache = {};
Object.keys(botoes).forEach(id => {
    audioCache[botoes[id]] = new Audio(`audios/${botoes[id]}.mp3`);
});

// play dos audios 
function playAudio(nome) {
    if (audioCache[nome]) {
        audioCache[nome].currentTime = 0;
        audioCache[nome].play().catch(e => console.log("Erro ao tocar:", e));
    }
}

// addevent
Object.keys(botoes).forEach(id => {
    const botao = document.getElementById(id);
    if (botao) {
        botao.addEventListener('mouseenter', () => playAudio(botoes[id]));
    }
});

function pressEqual() {
    try {
        let expression = document.getElementById('enter').value;
        expression = expression.replace(/%/g, '/100');
        document.getElementById('enter').value = eval(expression) || '0';
    } catch {
        document.getElementById('enter').value = 'Erro';
    }
}

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
                console.log("!isNaN(lastChar)-> " + !isNaN(lastChar))
                inputElement.value = "-(" + value + ")";
            } else {
                console.log("O último caractere não é um número.");
            }
        }
    }
}

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

function pressPeriod() {
    let currentValue = document.getElementById('enter').value;
    let lastNumber = currentValue.split(/[+\-*/%]/).pop();
    console.log(lastNumber);
    if (!lastNumber.includes('.')) {
        document.getElementById('enter').value = currentValue + ".";
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

    if (typed === "0" && number !== '.') { // Impede que o ponto seja adicionado se o valor atual for 0
        document.getElementById('enter').value = number;
    } else if (/[+\-*/(]/.test(lastChar) || lastChar === '.') { // Se o último caractere é um operador ou um ponto, apenas adicione o número
        document.getElementById('enter').value = typed + number;
    } else {
        document.getElementById('enter').value = typed + number;
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