/*Crie 1 input e ao clicar no botão “Exibir” 
exiba no alert o que foi digitado no campo.
 */

function ExibirTexto() {
    let campo = document.querySelector("input");
    let mensagem = campo.value;

    alert("O valor digitado é: '" + mensagem + "'");
}
let button = document.querySelector('button');
button.addEventListener('click', ExibirTexto);
