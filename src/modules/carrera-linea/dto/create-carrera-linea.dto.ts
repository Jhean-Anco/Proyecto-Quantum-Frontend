import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateCarreraLineaDto {
  @IsInt()
  id_carrera: number;

  @IsInt()
  id_linea: number;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
