import { Controller, Post, Body, Get, Param, Put, Delete, BadRequestException } from "@nestjs/common";
import { Livro } from "../../domain/entity/livro.entity";
import { LivroService } from "../.././domain/service/livro.service";



@Controller( 'livro')
export class LivroController {
     constructor (private readonly livroService: LivroService){ }


    @Post( )
      criar(@Body( ) livro: Livro): Livro {
        const livroCriado = this.livroService.criarLivro(livro);
      return livroCriado

    }

    @Get( )
    buscarTodosLivros( ): Livro[] {
      const livrosBuscados = this.livroService.buscarLivros( );
      return livrosBuscados
    }

    @Get(':id')
      buscarUmLivro(@Param('id') id: string): Livro  {
      return this.livroService.buscarLivro(id);      
    }

    @Put(':id' )
    atualizarLivroPorId(@Param('id') id: string, @Body( ) livro: Livro): Livro {
    return this.livroService.atualizarLivro(id, livro);
    }

    @Delete(':id')
    deletarLivroPorId(@Param( 'id') id: string): void {
      this.livroService.deletarLivro(id)
    }
    

}


