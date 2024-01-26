// Função para adicionar um item ao carrinho
function addToCart(nome, preco) {
    // Verifique se o carrinho existe no localStorage e, se não, crie-o como um array vazio.
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Criar um objeto representando o item a ser adicionado ao carrinho.
    const item = {
        nome: nome,
        preco: preco
    };

    // Adicionar o item ao carrinho.
    carrinho.push(item);

    // Salvar o carrinho atualizado no localStorage.
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");
}
