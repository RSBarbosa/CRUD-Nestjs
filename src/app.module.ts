import { Module } from '@nestjs/common';
import { LivroModule } from './livros/livro.module';


@Module({
  imports: [LivroModule],
  controllers: [],
  providers: [ ],
})
export class AppModule {}
