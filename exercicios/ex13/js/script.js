/*Faça um algoritmo que faz uma conversão de temperaturas onde . 
Converter Celsius para Fahrenheit. formula: (celsius * 9/5) + 32
Converter Fahrenheit para Celsius. formula: (fahrenheit - 32) * 5/9
*/
function converterTemperatura() {
    let temperatura = parseFloat(document.querySelector("#temperatura").value);
    let op = parseInt(document.querySelector("#operador").value);
    switch (op) {
        case 1:
            document.querySelector('h2').innerHTML =
                `A temperatura de ${temperatura}ºC equivale a ${((temperatura * 9 / 5) + 32)}ºF`;
            break;
        case 2:
            document.querySelector('h2').innerHTML =
                `A temperatura de ${temperatura}ºF equivale a ${((temperatura - 32) * 5 / 9)}ºC`;
            break;
    }

}
document.querySelector('button')
    .addEventListener('click', converterTemperatura)
