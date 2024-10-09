/*
Faça um algoritmo que leia um número inteiro menos que 1000 e imprima a quantidade de centenas, dezenas e unidades.
*/

function gerarTabela() {
    let preco = document.querySelector('#preco').value;
    preco = preco.replace(',','.');
    if (isNaN(preco) || preco == '') {
        alert("Valor inválido!");
    }
    else {
        preco = parseFloat(preco);
        let htmlPreco = "";
        for (let i = 1; i <= 50; i++) {
            if (i == 1) {
                htmlPreco += `
                    <tr><td>1 pão</td>
                        <td>R$ ${preco.toFixed(2)}</td>
                    </tr>`;
            } else {
                htmlPreco += `
                    <tr><td>${i} pães</td>
                        <td>R$ ${(preco * i).toFixed(2)}</td>
                    </tr>`;
            }
        }
        document.querySelector('.tabelaPreco').innerHTML = htmlPreco;
    }
}
document
    .querySelector('.btn-danger')
    .addEventListener('click', gerarTabela);




