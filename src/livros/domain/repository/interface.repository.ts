export interface IRepository{


  criar(obj: Object): Object;

  buscarTodos( ): Object []; 

   buscarUm(id: string); 

   atualizar(objAtualizado: Object): Object;
   
   deletar(id: string): void;

}

// IRepository agora é uma interface generica, que pode ser usada para criar qualquer classe repository
// se que quiser criar um repository autor uso essa interface
// qual melhor lugar para salvar? um modulo interface?