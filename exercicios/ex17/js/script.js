/*
O Sr. Manoel Joaquim acaba de adquirir uma panificadora e 
pretende implantar a metodologia da tabelinha. 
Você foi contratado para desenvolver o programa 
que monta a tabela de preços de pães, de 1 até 50 pães, 
a partir do preço do pão informado pelo usuário, conforme o exemplo abaixo:
Preço do pão: R$ 0,25 unid. 
1 = R$ 0,25
2 = R$ 0,50 
...
50 = R$ 12,50
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




