let amigos = [];
console.log(amigos);
let contador = 0;

function exibirTextoNaTela(tag, texto) {
    // Cria um novo elemento <li>
    let novoItem = document.createElement('li');
    novoItem.textContent = texto;
    
    // Adiciona o novo <li> à lista (ul)
    let campo = document.querySelector(tag);
    campo.appendChild(novoItem);
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome != '') {
        amigos.push(nome);
        console.log(amigos);

        // Exibe todos os amigos na lista, um abaixo do outro
        
            exibirTextoNaTela('ul', amigos[contador]);
        limparCampo();  // Limpa o campo de input
        contador++;  // Atualiza o contador
    } else {
        alert('Por favor, insira um nome.');
    }
}

function limparCampo() {
    let nome = document.querySelector('input');
    nome.value = '';
}
