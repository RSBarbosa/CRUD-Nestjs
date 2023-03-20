import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Max } from "class-validator";


export class Livro {

  id: string;
  titulo: string;
  autor: string;
  ano: number;
  edicao: number;
  editora: string
}