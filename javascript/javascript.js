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
    'percentage': 'porcento',
    'neg_pos': 'negativo',
    'period': 'ponto',
    'arrow': 'apagar'
};

const audioCache = {};
Object.keys(botoes).forEach(id => {
    audioCache[botoes[id]] = new Audio(`audios/${botoes[id]}.mp3`);
    audioCache[botoes[id]].load(); // Forca o pre-loading dos audios, revisar isso
});

// play dos audios
function playAudio(nome) {
    if (audioCache[nome]) {
        audioCache[nome].currentTime = 0;
        audioCache[nome].play().catch(e => console.log("Erro ao tocar:", e));
    }
}

Object.keys(botoes).forEach(id => {
    const botao = document.getElementById(id);
    if (botao) {
        let timeoutId;

        botao.addEventListener('mouseenter', () => {
            timeoutId = setTimeout(() => {
                playAudio(botoes[id]); 
            }, 500);
        });

        botao.addEventListener('mouseleave', () => {
            clearTimeout(timeoutId);
        });
    }
});

function pressEqual() {
    try {
        let expression = document.getElementById('enter').value;
        
        expression = expression.replace(/x/g, '*'); // * no lugar do x para calculo
        expression = expression.replace(/%/g, '/100'); // porcentagem, ja divide

        let result = eval(expression);
        result = parseFloat(result.toFixed(2));
        if (result === Infinity || isNaN(result)) {
            document.getElementById('enter').value = 'Erro';
        } else {
            document.getElementById('enter').value = result;
        }
        if ('speechSynthesis' in window) {
          //  if (result="Erro") {
             //   var utterance = new SpeechSynthesisUtterance(result);
          //  } else {
                var utterance = new SpeechSynthesisUtterance(result.toString());
        //    }
            window.speechSynthesis.speak(utterance);
        } else {
            alert("Este navegador não suporta a Web Speech API.");
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
    //Obs, acrescentar memoria com essas variaveis
}

// function pressNegativePositive() {
//     let inputElement = document.getElementById('enter');
//     let value = inputElement.value;

//     if (value === "" || value === "0" || value === "Erro") {
//         return; //nao negativa nessas condicoes acima
//     }
//     if (value.startsWith('-(') && value.endsWith(')')) {
//         inputElement.value = value.substring(2, value.length - 1);
//     } else {        
//         inputElement.value = "-(" + value + ")";
//     }
// }


function pressArrow() {
    let currentValue = document.getElementById('enter').value;
    if (currentValue === "0" || currentValue === "Erro") {
        return; //se erro ou zero, faz nada, nada faz
    }

    if (currentValue.length <= 1) {
        document.getElementById('enter').value = "0";
    } else {
        document.getElementById('enter').value = currentValue.slice(0, -1);
    }
}

function pressPeriod() {
    let currentValue = document.getElementById('enter').value;
    let lastNumberMatch = currentValue.match(/(\d+\.?\d*)$/); // "Regex para encontrar o último número com decimal se tiver


    if (lastNumberMatch && !lastNumberMatch[0].includes('.')) {
        document.getElementById('enter').value = currentValue + ".";
    } else if (!lastNumberMatch && currentValue === "0") {
        document.getElementById('enter').value = "0.";
    }
  
    else if (/[+\-*/%]/.test(currentValue[currentValue.length - 1])) {
        document.getElementById('enter').value = currentValue + "0.";
    }
}

function pressOperator(operator) {
    let currentValue = document.getElementById('enter').value;
    let lastChar = currentValue[currentValue.length - 1];

    if (currentValue === "Erro") {
        document.getElementById('enter').value = "0"; // Reseta erro
        return;
    }

    // Substitui o caractere se ja for um operador matematico
    if (/[+\-*/%]/.test(lastChar)) {
        document.getElementById('enter').value = currentValue.slice(0, -1) + operator;
    }
    else if (currentValue === "0" && operator !== '%') {
        document.getElementById('enter').value = "0" + operator;
    } else {
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

    // Aula do Wellington de acessibilidade adaptando para zoom também
    if (visibilitySlider && calculatorContainer) {
        visibilitySlider.addEventListener('input', (event) => {
            calculatorContainer.style.opacity = event.target.value;
        });
    }


    if (zoomSlider && calculatorContainer) {
        zoomSlider.addEventListener('input', (event) => {
            const scaleValue = event.target.value;
            calculatorContainer.style.transform = `scale(${scaleValue})`;
            calculatorContainer.style.transformOrigin = 'center center'; // Finalmente escalou corretamente lambrar que tem que ser do centro
        });
    }

    // Contraste
    if (highContrastToggle && body) {
        highContrastToggle.addEventListener('click', () => {
            body.classList.toggle('high-contrast');
            // Usando localStorage mesmo, meio gambiarra mas funciona
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
