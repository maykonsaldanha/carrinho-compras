function adicionar(){
    //recuperar nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; 
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço e subtotal  
    let preco = quantidade * valorUnitario;
    //adicionar no carrinho
    let listaCarrinho = document.getElementById('lista-produtos');//id do section que representa a lista do carrinho
    listaCarrinho.innerHTML = listaCarrinho.innerHTML +  `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${valorUnitario}</span>
        </section>`;
    //atualizar o valor total
}


/* Seleciono o produto
Seleciono a quantidade (number)
Botão adicionar (onclick)
As informações ficam visíveis em "produtos no carrinho" e no valor total*/