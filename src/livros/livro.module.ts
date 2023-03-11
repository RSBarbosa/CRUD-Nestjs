import { Module } from "@nestjs/common";
import { LivroController } from "./livro.controller";
import { LivroRepository } from "./livro.repository";
import { LivroService } from "./livro.service";



@Module({
  imports: [],
  controllers:[LivroController],
  providers: [ LivroService, LivroRepository ]
})

export class LivroModule{ }