/*Crie 1 input e ao clicar no botão “Exibir” 
exiba no alert o que foi digitado no campo.
 */

function exibirTexto() {
    let campo = document.querySelector("input");
    let mensagem = campo.value;

    alert("O valor digitado é: '" + mensagem + "'");
}