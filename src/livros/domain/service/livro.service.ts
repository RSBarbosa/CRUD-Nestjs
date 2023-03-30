import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { ILivroRepository } from "../repository/i-livro.repository";
import { Livro } from "./../entity/livro.entity";

@Injectable( ) 
export class LivroService {
    constructor (
      @Inject("ILivroRepository") private readonly livroRepository: ILivroRepository
      ) {}

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


