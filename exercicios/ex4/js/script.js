/*Solicite ao usuário um número de 1 a 7 e 
exiba em texto o dia da semana 
representado conforme abaixo. 
Domingo
Segunda-feira
Terça-feira
Quarta-feira 
Quinta-feira
Sexta-feira
Sábado
*/

function exibirSemana() {
    let dSemana = document.querySelector("#diaSemana").value;
    let resultado = "";
    if (dSemana == "1")
        resultado = "Domingo";
    else if (dSemana == "2")
        resultado = "Segunda-feira";
    else if (dSemana == "3")
        resultado = "Terça-feira";
    else if (dSemana == "4")
        resultado = "Quarta-feira";
    else if (dSemana == "5")
        resultado = "Quinta-feira";
    else if (dSemana == "6")
        resultado = "Sexta-feira";
    else if (dSemana == "7")
        resultado = "Sábado";
    else
        resultado = "Dia Inválido";

    let h1 = document.querySelector("h1");
    h1.innerHTML = resultado;

}
document
    .querySelector('button')
    .addEventListener('click', exibirSemana);

