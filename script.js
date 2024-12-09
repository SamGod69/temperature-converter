let userInput = document.getElementById('userInput');

//<-from->
let fromCelsius = document.getElementById('fromCelsius');
let fromFahrenheit = document.getElementById('fromFahrenheit');
let fromKelvin = document.getElementById('fromKelvin');
//<-to->
let toCelsius = document.getElementById('toCelsius');
let toFahrenheit = document.getElementById('toFahrenheit');
let toKelvin = document.getElementById('toKelvin');

let convertBtn = document.getElementById('convertBtn');
let switchBtn = document.getElementById('switchBtn');
let result = document.getElementById('result');

function fromCtoF(fromUnit){
    return fromUnit * (9/5) + 32;
}
function fromCtoK(fromUnit){
    return (fromUnit + 273.15);
}
function fromFtoC(fromUnit){
    return (fromUnit - 32) * 5/9;
}
function fromFtoK(fromUnit){
    return (fromUnit - 32) * 5 / 9 + 273.15;
}
function fromKtoC(fromUnit){
    return fromUnit - 273.15;
}
function fromKtoF(fromUnit){
    return (fromUnit - 273.15) * 1.8 + 32; 
}

function convertTemperature(){ 
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let input = Number(document.getElementById('userInput').value);

    switch(true){
        case (from == 'fromCelsius' && to == 'toCelsius') || (from == 'fromFahrenheit' && to == 'toFahrenheit') || (from == 'fromKelvin' && to == 'toKelvin'):
            result.textContent = input;
            break;
        case from == 'fromCelsius' && to == 'toFahrenheit':
            result.textContent = fromCtoF(input);
            break;
        case from == 'fromCelsius' && to == 'toKelvin':
            result.textContent = fromCtoK(input);
            break;
        case from == 'fromFahrenheit' && to == 'toCelsius':
            result.textContent = fromFtoC(input);
            break;
        case from == 'fromFahrenheit' && to == 'toKelvin':
            result.textContent = fromFtoK(input);
            break;  
        case from == 'fromKelvin' && to == 'toCelsius':
            result.textContent = fromKtoC(input);
            break; 
        case from == 'fromKelvin' && to == 'toFahrenheit':
            result.textContent = fromKtoF(input);
            break;
    }
}

document.addEventListener('input',convertTemperature);
switchBtn.onclick = () =>  {
    let from = document.getElementById('from');
    let to = document.getElementById('to');
    let fromValue = document.getElementById('from').value;
    let toValue = document.getElementById('to').value;
    from.value = toValue.replace('to','from');
    to.value = fromValue.replace('from','to');
    convertTemperature();
}

// convertBtn.onclick = () => {
//     input = Number(userInput.value);
//     switch(true){
//         case fromCelsius.checked && toCelsius.checked:
//             result.textContent = input;
//             break;
//         case fromCelsius.checked && toFahrenheit.checked:
//             result.textContent = fromCtoF(input);
//             break;
//         case fromCelsius.checked && toKelvin.checked:
//             result.textContent = fromCtoK(input);
//             break;
//         case fromFahrenheit.checked && toFahrenheit.checked:
//             result.textContent = input;
//             break;
//         case fromFahrenheit && toCelsius.checked:
//             result.textContent = fromFtoC(input);
//             break;
//         case fromFahrenheit.checked && toKelvin.checked:
//             result.textContent = fromFtoK(input);
//             break; 
//         case fromKelvin.checked && toKelvin.checked:
//             result.textContent = input;
//             break; 
//         case fromKelvin.checked && toCelsius.checked:
//             result.textContent = fromKtoC(input);
//             break; 
//         case fromKelvin.checked && toFahrenheit.checked:
//             result.textContent = fromKtoF(input);
//             break;
//     }
// }

// <==Prashanna Dai's Code==>
// convertBtn.onclick = () => {
//     let fromValue = parseInt(userInput.value)
//     let from = document.querySelector('input[name="first"]:checked').value;
//     let to = document.querySelector('input[name="second"]:checked').value;
    
//     result.textContent = convertUnit(from, to, fromValue);
// }

// conversionToCelsius = {
//     celsius(value) {
//         return value;
//     },
//     fahrenheit(value) {
//         return (value - 32) * 5/9;
//     },
//     kelvin(value) {
//         return (value - 32) * 5 / 9 + 273.15;
//     }
// }

// celsiusToUnit = {
//     fahrenheit(value) {
//         return value * (9/5) + 32;
//     },
//     kelvin(value) {
//         return (value + 273.15);
//     }
// }

// function convertUnit(from, to, value) {
//     if (from == to)
//         return value;

//     let celsius = conversionToCelsius[from](value);

//     if (to == 'celsius')
//         return celsius;

//     return celsiusToUnit[to](celsius);
// }