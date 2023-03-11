import { Injectable } from "@nestjs/common";
import {Livro} from "./livro.entity"
import { LivroRepository } from "./livro.repository";

@Injectable( )
  export class LivroService {
    constructor (private livroRepository: LivroRepository) {}
   
    criarLivro(livro: Livro) : Livro {
      const livroCriado = this.livroRepository.criar(livro);
      return livroCriado;
    }

    buscarLivros( ) : Livro [] {
      const livrosBuscados = this.livroRepository.buscarTodos( );
      return livrosBuscados
      
    }

     buscarLivro(id: number): Livro {
    return this.livroRepository.buscarUm(id);
       
     }

     atualizarLivro(id: number, livro:Livro): Livro{
      return this.livroRepository.atualizar(id, livro)
     }

  }

