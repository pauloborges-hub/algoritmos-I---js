const livros = require("./listaLivros");
const menorValor = require("./menorValor");
/*
for (let atual = 0; atual < livros.length - 1; atual++) {
    // menor recebe índice do menor valor do array inteiro
    let menor = menorValor(livros, atual);

    // livroAtual recebe valor de livros na posição atual
    let livroAtual = livros[atual];
    // livroMenorPreco recebe o valor de livros da posição de menor valor
    let livroMenorPreco = livros[menor];

    // posição atual vale o menor valor, e posição do menor livro vale a posição antiga atual 
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}
*/

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })

console.log(livros);