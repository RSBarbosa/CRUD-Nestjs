import { Injectable, NotFoundException, Param } from "@nestjs/common";
import { Livro } from "./livro.entity";

@Injectable( )
export class LivroRepository{
  private livros: Livro [] = [ 
//     {
//     id: 1, 
//     titulo:  "GenteAnsiosa",
//     autor: "Fredrik Backman",
//     ano: 2021,
//     edição: 1,
//     editora: "Rocco"
// }
];

  criar(livro: Livro): Livro  {
    this.livros.push(livro);
    return livro;
  
  }

  buscarTodos( ): Livro [] {
    return this.livros;
  }

   buscarUm(id: number ) {    
    const livroId = this.livros.find(livro => livro.id == id );   
    
    return livroId
    
   }

   atualizar(id: number, livro: Livro): Livro {
    
    const livroIndex = this.livros.findIndex(livro => livro.id === id);
    
    if(livroIndex < 0){
      throw new NotFoundException(`O livro com id ${id} não foi encontrado`);
    }
    const atualizado = this.livros[livroIndex] = livro;
    return atualizado;

   }

  

  
}