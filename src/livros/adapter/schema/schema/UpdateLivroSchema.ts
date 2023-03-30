import { ApiProperty, PartialType } from '@nestjs/swagger';
// import { Livro } from '../../../domain/entity/livro.entity';
import { Livro} from '../../../adapter/dto/livro.dto'


export class UpdateLivroSchema extends PartialType(Livro) {

  @ApiProperty({ example: 'Gente Ansiosa' })
    titulo:  string;
    
  @ApiProperty({ example: 'Fredrik Backman' })
    autor: string;
    
  @ApiProperty({ example: 2021 })
    ano: number;
    
  @ApiProperty({ example: 1 })
    edicao: number;

  @ApiProperty({ example: 'Rocco' })
    editora: string;
}
