import { IsNumber } from "class-validator";


export class Livro {

  @IsNumber( )
  id: number;


  titulo: string;
  autor: string;
  ano: number;
  edição: number
  editora: string
}