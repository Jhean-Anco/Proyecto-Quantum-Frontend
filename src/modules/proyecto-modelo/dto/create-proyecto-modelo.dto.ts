import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProyectoModeloDto {
  @IsInt()
  id_proyecto: number;

  @IsInt()
  id_modelo: number;

  @IsOptional()
  @IsString()
  url_archivo_subido?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  version?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  estado?: string;

  @IsOptional()
  @IsString()
  comentario_revision?: string;
}
