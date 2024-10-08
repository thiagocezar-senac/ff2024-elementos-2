/*Faça um algoritmo para montar uma calculadora simples, 
onde o usuário vai optar em escolher conforme o menu adiante.
Observação: no caso de divisão, 
o denominador não pode ser zero, invalidando a operação.
Soma.
Subtração.
Multiplicação.
Divisão
Potenciação
Radiciação*/

function calcular() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let op = parseInt(document.querySelector("#operador").value);


    switch (op) {
        case 1:
            document.querySelector("h2").innerHTML =
                `A Soma é ${num1 + num2}`;
            break;
        case 2:
            document.querySelector("h2").innerHTML =
                `A Subtração é ${num1 - num2}`;
            break;
        case 3:
            document.querySelector("h2").innerHTML =
                `A Multiplicação é ${num1 * num2}`;
            break;
        case 4:
            if (num2 == 0) {
                document.querySelector("h2").innerHTML =
                    `Não pode ser dividido por Zero!`;
            } else {
                document.querySelector("h2").innerHTML =
                    `A Divisão é ${num1 / num2}`;
            }
            break;
        case 5:
            document.querySelector("h2").innerHTML =
                `A Potenciação é ${num1 ** num2}`;
            break;
        case 6:
            document.querySelector("h2").innerHTML =
                `A Raiz de ${num1} é ${num1 ** (1 / num2)}`;
            break;
    }


}
document
    .querySelector("button")
    .addEventListener("click", calcular);