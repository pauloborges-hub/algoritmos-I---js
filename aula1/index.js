const livros = require("./listaLivros");

//const livros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0;

for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato, tem nome ${livros[maisBarato].titulo} e custa ${livros[maisBarato].preco}`);