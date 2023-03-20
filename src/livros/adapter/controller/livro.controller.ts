import { Controller, Post, Body, Get, Param, Put, Delete,  ValidationPipe, UsePipes, HttpCode } from "@nestjs/common";
import { Livro } from "../../domain/entity/livro.entity";
import { LivroService } from "../.././domain/service/livro.service";
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger'
import {LivroResponse} from "../schema/response/livroResponse"
import { ErrorResponse } from "../schema/response/errorResponse";
import {UpdateLivroSchema} from "../schema/dto/UpdateLivro.dto"

@ApiTags( "Livro")
@Controller( 'livro')
@UsePipes(ValidationPipe)
export class LivroController {
     constructor (private readonly livroService: LivroService){ }



  @Get( )
  @HttpCode(200)
  @ApiOperation({ summary: 'Pesquisa todos os livros'})
  @ApiOkResponse({ type: [LivroResponse], description: 'Os livros foram encontrados com sucesso' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
     buscarTodosLivros( ): Livro[] {
       const livrosBuscados = this.livroService.buscarLivros( );
       return livrosBuscados
     }

  @Post( )
  @HttpCode(201)
  @ApiOperation({ summary: 'Cria um novo livro',  })
  @ApiCreatedResponse({  type: LivroResponse, description: 'Os livros foram criados com sucesso'})
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  @ApiBody({ description: 'Dados do livro que podem ser atualizados', type: UpdateLivroSchema })
    criar(@Body( ) livro: Livro): Livro {
        const livroCriado = this.livroService.criarLivro(livro);
      return livroCriado

    }


  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Busca um livro por ID' })
  @ApiOkResponse({ type: LivroResponse, description: 'O livro foi encontrado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
      buscarUmLivro(@Param('id') id: string): Livro  {
      return this.livroService.buscarLivro(id);      
    }

  @Put(':id' )
  @HttpCode(200)
  @ApiOperation({ summary: 'Atualiza um livro' })
  @ApiOkResponse({ type: LivroResponse, description: 'Livro atualizado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  @ApiBody({ description: 'Dados do livro que podem ser atualizados', type: UpdateLivroSchema })
    atualizarLivroPorId(@Param('id') id: string, @Body( ) livro: Livro): Livro {
    return this.livroService.atualizarLivro(id, livro);
    }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Deleta um livro' })
  @ApiNoContentResponse({ description: 'Livro deletado' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' }) 
    deletarLivroPorId(@Param( 'id') id: string): void {
      this.livroService.deletarLivro(id)
    }
    

}


