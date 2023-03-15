import { BadRequestException, Injectable } from "@nestjs/common";
import {Livro} from "./../entity/livro.entity"
import { LivroRepository } from "../../adapter/repositoty/livro.repository";
import{ v4 as uuidv4 } from 'uuid';

@Injectable( )
  export class LivroService {
    constructor (private readonly livroRepository: LivroRepository) {}

    generateIs( ): string{
      return uuidv4( );
    }
   
    criarLivro(livro: Livro) : Livro {
      livro.id = this.generateIs( );
      const livroCriado = this.livroRepository.criar(livro);
      return livroCriado;
    }

    buscarLivros( ) : Livro [] {
      const livrosBuscados = this.livroRepository.buscarTodos( );
      return livrosBuscados
    }

     buscarLivro(id: string) : Livro {
    return this.livroRepository.buscarUm(id);
     }

     atualizarLivro(id: string, livro:Livro): Livro{
      //existe esse id no repositorio?
      const livroEncontrado =  this.buscarLivro(id)
      if (livroEncontrado){
        livroEncontrado.titulo = livro.titulo;
        livroEncontrado.autor = livro.autor;
        livroEncontrado.ano = livro.ano;
        livroEncontrado.edicao = livro.edicao
        livroEncontrado.editora = livro.editora
        
        return this.livroRepository.atualizar(livroEncontrado)

      }else{
        throw new BadRequestException ("O ID do livro não pode ser alterado")
      }
     }

     deletarLivro(id: string): void {
      return this.livroRepository.deletar(id)
     }

  }

