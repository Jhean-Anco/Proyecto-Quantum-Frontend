import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateFacultadUniversidadDto {
  @IsInt()
  id_universidad: number;

  @IsInt()
  id_facultad: number;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
