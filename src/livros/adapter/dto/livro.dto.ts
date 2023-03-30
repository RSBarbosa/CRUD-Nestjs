import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Max, Min } from "class-validator";

export class Livro {

    @IsOptional()
     id: string;
   
   
     @IsNotEmpty( )
     @IsDefined()
     @IsString()
     @Min(1)
     @Matches(/^[^\s]+/, { message: 'Título não pode ser uma string vazia ou conter apenas espaços em branco' })
     titulo: string;
   
   
     @IsNotEmpty( )
     @IsDefined()
     @IsString()
     @Matches(/^[^\s]+/, { message: 'Autor não pode ser uma string vazia ou conter apenas espaços em branco' })
     autor: string;
   
     @IsNotEmpty( )
     @IsDefined()
     @IsNumber( )
     @Max( new Date( ).getFullYear( ),  { message: 'O ano de publicação não pode ser maior que a data atual' })
     ano: number;
   
     @IsNotEmpty( )
     @IsOptional()
     @IsNumber( )
     edicao: number
   
     @IsNotEmpty( )
     @IsString()
     @Matches(/^[^\s]+/, { message: 'Editora não pode ser uma string vazia ou conter apenas espaços em branco' })
     editora: string
   }
  