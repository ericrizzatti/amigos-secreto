let amigos = [];
let contador = 0;

function exibirTextoNaTela(tag, texto) {
    // Cria um novo elemento <li>
    let novoLinha = document.createElement('li');
    novoLinha.textContent = texto;
    
    // Adiciona o novo <li> à lista (ul)
    let campo = document.querySelector(tag);
    campo.appendChild(novoLinha);
    console.log (amigos)
}

function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value; // Seleciona o input pelo id

    if (nome !== '') {
        amigos.push(nome);
        console.log(amigos);

        // Exibe o novo amigo na lista
        exibirTextoNaTela('#listaAmigos', nome); // Adiciona o amigo à lista de amigos
        limparCampo('#amigo', '');  // Limpa o campo de input
        contador++;  // Atualiza o contador
    } else {
        alert('Por favor, insira um nome.');
    }
}

function limparCampo(tag, texto) {
    let nome = document.querySelector(tag);
    nome.value = texto;
}

function sortearAmigo() {
    let campoResultado = document.querySelector('ul');
    
    // Remove todos os <li> da lista de resultados
    while (campoResultado.firstChild) {
        campoResultado.removeChild(campoResultado.firstChild);
    }

    if (contador > 0) { // Verifica se há amigos para sortear
        let resultado = Math.floor(Math.random() * contador); // Sorteia um amigo
        let textoDaTela = amigos[resultado];

        // Cria um novo <li> para exibir o amigo sorteado
        let novoResultado = document.createElement('li');
        novoResultado.classList.add('result-list'); // Adiciona a classe result-list
        novoResultado.textContent = 'Seu amigo secreto é: ' + textoDaTela; // Define o texto do amigo sorteado

        // Adiciona o novo elemento ao DOM
        campoResultado.appendChild(novoResultado); // Adiciona o <li> ao <ul> com id "resultado"

        console.log(amigos[resultado]);
    } else {
        alert('Adicione amigos antes de sortear!');
    }
}
