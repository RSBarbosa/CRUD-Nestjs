import { IsDefined, IsNumber, IsOptional, IsString } from "class-validator";


export class Livro {

@IsOptional()
 
  id: string;

  @IsDefined()
  @IsString()
  titulo: string;

  @IsDefined()
  @IsString()
  autor: string;

  @IsDefined()
  @IsNumber( )
  ano: number;

@IsOptional()
@IsNumber( )
  edicao: number

  @IsDefined()
  @IsString()
  editora: string
}