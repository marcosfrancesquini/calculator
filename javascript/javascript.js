let total = 0;
let greatTotal = 0;
// let one, two, three, four, five, six, seven, eight, nine, zero;
// let sumOne, sumTwo, sumThree, sumFour, sumFive, sumSix, sumSeven, sumEight, sumNine, sumZero;

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
    'arrow': 'apagar' // Changed 'arrow' to 'apagar' for better audio context
};

const audioCache = {};
Object.keys(botoes).forEach(id => {
    audioCache[botoes[id]] = new Audio(`audios/${botoes[id]}.mp3`);
    audioCache[botoes[id]].load(); // Force pre-loading
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
        // Replace 'x' with '*' for multiplication if it's not already handled in HTML
        expression = expression.replace(/x/g, '*');
        expression = expression.replace(/%/g, '/100'); // Handle percentage correctly

        // Evaluate the expression and update the display
        let result = eval(expression);
        if (result === Infinity || isNaN(result)) {
            document.getElementById('enter').value = 'Erro';
        } else {
            document.getElementById('enter').value = result;
        }
    } catch (e) {
        document.getElementById('enter').value = 'Erro';
        console.error("Calculation error:", e);
    }
}

function clean() {
    document.getElementById('enter').value = '0';
    total = 0; // Reset total
    greatTotal = 0; // Reset greatTotal
}

function pressNegativePositive() {
    let inputElement = document.getElementById('enter');
    let value = inputElement.value;

    if (value === "" || value === "0" || value === "Erro") {
        return; // Do nothing if display is empty, 0, or error
    }

    // If the value is currently negative (e.g., "-(123)"), remove the wrapping
    if (value.startsWith('-(') && value.endsWith(')')) {
        inputElement.value = value.substring(2, value.length - 1);
    } else {
        // Otherwise, wrap the current value in "-(...)"
        inputElement.value = "-(" + value + ")";
    }
}


function pressArrow() {
    let currentValue = document.getElementById('enter').value;
    if (currentValue === "0" || currentValue === "Erro") {
        return; // No action if already 0 or error
    }

    if (currentValue.length <= 1) {
        document.getElementById('enter').value = "0";
    } else {
        document.getElementById('enter').value = currentValue.slice(0, -1);
    }
}

function pressPeriod() {
    let currentValue = document.getElementById('enter').value;
    let lastNumberMatch = currentValue.match(/(\d+\.?\d*)$/); // Regex to find the last number (including existing decimal)

    // If there's a last number and it doesn't already contain a decimal, add one
    if (lastNumberMatch && !lastNumberMatch[0].includes('.')) {
        document.getElementById('enter').value = currentValue + ".";
    } else if (!lastNumberMatch && currentValue === "0") {
        // If it's '0' and no number yet, allow '0.'
        document.getElementById('enter').value = "0.";
    }
    // If the last character is an operator, add '0.' for new number
    else if (/[+\-*/%]/.test(currentValue[currentValue.length - 1])) {
        document.getElementById('enter').value = currentValue + "0.";
    }
}

function pressOperator(operator) {
    let currentValue = document.getElementById('enter').value;
    let lastChar = currentValue[currentValue.length - 1];

    if (currentValue === "Erro") {
        document.getElementById('enter').value = "0"; // Reset if there was an error
        return;
    }

    // If the last character is already an operator, replace it
    if (/[+\-*/%]/.test(lastChar)) {
        document.getElementById('enter').value = currentValue.slice(0, -1) + operator;
    }
    // If the display is '0' and operator is not percent, start with '0' + operator
    else if (currentValue === "0" && operator !== '%') {
        document.getElementById('enter').value = "0" + operator;
    }
    // Otherwise, just append the operator
    else {
        document.getElementById('enter').value = currentValue + operator;
    }
}

function pressNumber(number) {
    let typed = document.getElementById('enter').value;

    if (typed === "0" || typed === "Erro") {
        document.getElementById('enter').value = number;
    } else {
        document.getElementById('enter').value = typed + number;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculatorContainer = document.getElementById('container');
    const visibilitySlider = document.getElementById('visibility-slider');
    const zoomSlider = document.getElementById('zoom-slider');
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    const body = document.body;

    // Aula do Wellington de acessibilidade
    if (visibilitySlider && calculatorContainer) {
        visibilitySlider.addEventListener('input', (event) => {
            calculatorContainer.style.opacity = event.target.value;
        });
    }


    if (zoomSlider && calculatorContainer) {
        zoomSlider.addEventListener('input', (event) => {
            const scaleValue = event.target.value;
            calculatorContainer.style.transform = `scale(${scaleValue})`;
            calculatorContainer.style.transformOrigin = 'center center'; // Scale from the center
        });
    }

    // Contraste
    if (highContrastToggle && body) {
        highContrastToggle.addEventListener('click', () => {
            body.classList.toggle('high-contrast');
            // Usando localStorage mesmo
            if (body.classList.contains('high-contrast')) {
                localStorage.setItem('highContrastMode', 'enabled');
            } else {
                localStorage.removeItem('highContrastMode');
            }
        });

        if (localStorage.getItem('highContrastMode') === 'enabled') {
            body.classList.add('high-contrast');
        }
    }
});

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

// if ('speechSynthesis' in window) {
//     var resultado = 10 + 5; // Exemplo de cálculo
//     var utterance = new SpeechSynthesisUtterance(resultado.toString()); // Transforma o resultado em texto
//     window.speechSynthesis.speak(utterance); // Fala o texto
// } else {
//     alert("Este navegador não suporta a Web Speech API.");
// }
