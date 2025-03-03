let totalGeral = 0;
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade == '0' || quantidade == '') {
        alert('Selecione a quantidade do produto para continuar com sua compra');
        return;
    }
    let preco = quantidade * valorUnitario;
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${valorUnitario}</span>
        </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').textContent = 'R$ 0'

}
