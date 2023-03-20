import { ApiProperty } from '@nestjs/swagger';

export class LivroResponse { 
  @ApiProperty( )
    id: string;
    
  @ApiProperty()
    titulo:  string;
    
  @ApiProperty()
    autor: string;
    
  @ApiProperty()
  ano: number;
    
  @ApiProperty()
    edição: number;

  @ApiProperty()
    editora: string;


}