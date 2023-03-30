import { Livro } from "../entity/livro.entity";

export interface ILivroRepository{


  criar(livro: Livro): Livro;

  buscarTodos( ): Livro []; 

   buscarUm(id: string); 

   atualizar(objAtualizado: Livro): Livro;
   
   deletar(id: string): void;

}

// IRepository agora é uma interface generica, que pode ser usada para criar qualquer classe repository
// se que quiser criar um repository autor uso essa interface
// qual melhor lugar para salvar? um modulo interface?