import { Injectable, NotFoundException, ConflictException, Param } from "@nestjs/common";
import { Livro } from "../../domain/entity/livro.entity";

@Injectable( )
export class LivroRepository{
  private livros: Livro [] = [ ];

//     {
//     id: 1, 
//     titulo:  "GenteAnsiosa",
//     autor: "Fredrik Backman",
//     ano: 2021,
//     edição: 1,
//     editora: "Rocco"
// }

  criar(livro: Livro): Livro  {
    const existeLivro = this.livros.find(livroBase => livroBase.id == livro.id);
    if (existeLivro){
      throw new ConflictException('Já existe um livro com esse ID');
    }
    this.livros.push(livro);
    return livro;
  
  }

  buscarTodos( ): Livro [] {
    return this.livros;
  }

   buscarUm(id: string ) {    
    const livroId = this.livros.find(livro => livro.id == id ); 
    if(!livroId){
      throw new NotFoundException(`O livro com id ${id} não foi encontrado`);
    }  
    return livroId
    
   }

   atualizar(livroAtualizado: Livro): Livro {
    const livroIndex = this.livros.findIndex(livro => livro.id === livroAtualizado.id);
      if(livroIndex < 0){
        throw new NotFoundException(`O livro com id ${livroAtualizado.id} não foi encontrado`);
      }
    const atualizado = this.livros[livroIndex] = livroAtualizado;
    return atualizado;

   }

   deletar(id: string): void{
    const livroIndex = this.livros.findIndex(livro => livro.id === id);
    if(livroIndex < 0){
      throw new NotFoundException( `Livro com id ${id} não foi encontrado`);
    }
    this.livros.splice(livroIndex,1);
   }

  

  
}