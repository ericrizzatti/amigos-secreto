# Sorteio de Amigo Secreto

Este projeto é um simples site para adicionar amigos a uma lista e sortear um deles como "amigo secreto".

## 📌 Funcionalidades
- Adicionar amigos a uma lista.
- Listar os amigos adicionados na tela.
- Sortear aleatoriamente um amigo da lista.
- Exibir o nome do amigo sorteado na tela.

## 🚀 Como Usar
1. Digite o nome de um amigo no campo de entrada.
2. Clique no botão para adicionar o amigo à lista.
3. Quando houver amigos suficientes, clique no botão de sorteio para escolher aleatoriamente um.
4. O nome do amigo sorteado será exibido na tela.

## 🛠️ Tecnologias Utilizadas
- HTML
- CSS
- JavaScript (app.js)


Copiar
Editar

## ⚙️ Funcionamento do Código
### `app.js`
- `exibirTextoNaTela(tag, texto)`: Adiciona um item `<li>` na lista de amigos.
- `adicionarAmigo()`: Adiciona um nome à lista e atualiza o DOM.
- `limparCampo(tag, texto)`: Limpa o campo de entrada após adicionar um amigo.
- `sortearAmigo()`: Sorteia um amigo aleatoriamente da lista e exibe o resultado.

## 📌 Observações
- O sorteio só funciona se houver pelo menos um amigo na lista.
- O nome sorteado será mostrado abaixo da lista de amigos adicionados.

## 📜 Licença
Este projeto é de uso livre e pode ser modifi
