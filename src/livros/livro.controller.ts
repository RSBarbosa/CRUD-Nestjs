import { Controller, Post, Body, Get, Param, Put } from "@nestjs/common";
import { Livro } from "./livro.entity";
import { LivroService } from "./livro.service";



@Controller( 'livro')
export class LivroController {
     constructor (private livroService: LivroService){ }


    @Post( )
      criar(@Body( ) livro: Livro) {
        const livroCriado = this.livroService.criarLivro(livro);
      return livroCriado

    }

    @Get( )
    buscarTodosLivros( ): Livro[] {
      const livrosBuscados = this.livroService.buscarLivros( );
      return livrosBuscados
    }

    @Get(':id')
      buscarUmLivro(@Param('id') id: number): Livro  {
      return this.livroService.buscarLivro(id);      
    }

    @Put(':id' )
    atualizarLivroPorId(@Param('id') id: string, @Body( ) livro: Livro): Livro {
      console.log("atualizarLivroPorId", typeof(id));
      return this.livroService.atualizarLivro(parseInt(id), livro);


    }

}


