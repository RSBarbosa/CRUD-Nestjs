import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Max } from "class-validator";


export class Livro {

 @IsOptional()
  id: string;


  @IsNotEmpty( )
  @IsDefined()
  @IsString()
  @Matches(/^[^\s]+$/, { message: 'Não pode ser uma string vazia ou conter apenas espaços em branco' })
  titulo: string;


  @IsNotEmpty( )
  @IsDefined()
  @IsString()
  @Matches(/^[^\s]+$/, { message: 'Não pode ser uma string vazia ou conter apenas espaços em branco' })
  autor: string;

  @IsNotEmpty( )
  @IsDefined()
  @IsNumber( )
  @Max( new Date( ).getFullYear( ))
  ano: number;

  @IsNotEmpty( )
  @IsOptional()
  @IsNumber( )
  edicao: number

  @IsNotEmpty( )
  @IsString()
  @Matches(/^[^\s]+$/, { message: 'Não pode ser uma string vazia ou conter apenas espaços em branco' })
  editora: string
}