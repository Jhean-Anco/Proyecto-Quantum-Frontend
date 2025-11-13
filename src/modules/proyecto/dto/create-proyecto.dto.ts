import {
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  IsDateString,
} from 'class-validator';

export class CreateProyectoDto {
  @IsString()
  @MaxLength(200)
  titulo: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsInt()
  id_idea: number;

  @IsInt()
  id_servicio: number;

  @IsOptional()
  @IsDateString()
  fecha_inicio?: string;

  @IsOptional()
  @IsDateString()
  fecha_fin?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  estado?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  prioridad?: string;

  @IsOptional()
  @IsString()
  url_carpeta?: string;
}
