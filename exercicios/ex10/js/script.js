/* Faça um algoritmo que o usuário escreva o nome e o preço de 
três produtos e assim que terminar de escrever o ultimo produto, 
mostre o nome e o valor do produto mais barato. */

function menorPrecoProduto() {

    let nmProd1 = document.querySelector('#nome1').value;
    let nmProd2 = document.querySelector('#nome2').value;
    let nmProd3 = document.querySelector('#nome3').value;
    let valProd1 = parseFloat(document.querySelector('#preco1').value);
    let valProd2 = parseFloat(document.querySelector('#preco2').value);
    let valProd3 = parseFloat(document.querySelector('#preco3').value);
    let menorValor = 0;
    let menorNome = "";

    if ((valProd1 <= valProd2) && (valProd1 <= valProd3)) {
        menorValor = valProd1;
        menorNome = nmProd1;
    }
    else if ((valProd2 <= valProd1) && (valProd2 <= valProd3)) {
        menorValor = valProd2;
        menorNome = nmProd2;
    }
    else {
        menorValor = valProd3;
        menorNome = nmProd3;
    }
    document.querySelector("section>h2").innerHTML =
        `O Produto mais barato é ${menorNome} custando R$ ${menorValor.toFixed(2)}`;

}
document
    .querySelector("button")
    .addEventListener("click", menorPrecoProduto);
