import { Module } from "@nestjs/common";
import { LivroController } from "./adapter/controller/livro.controller";
import { LivroRepository } from "./adapter/repositoty/livro.repository";
import { LivroService } from "./domain/service/livro.service";



@Module({
  imports: [],
  controllers:[LivroController],
  providers: [ LivroService, LivroRepository ]
})

export class LivroModule{ }