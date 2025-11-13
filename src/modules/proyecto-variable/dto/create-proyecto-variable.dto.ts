import { IsInt, IsString, MaxLength } from 'class-validator';

export class CreateProyectoVariableDto {
  @IsInt()
  id_proyecto: number;

  @IsInt()
  id_variable: number;

  @IsString()
  @MaxLength(100)
  tipo_relacion: string;
}
