import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateIdeaInvestigacionDto {
  @IsString()
  @MaxLength(255)
  titulo: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  palabras_clave?: string;

  @IsOptional()
  @IsInt()
  id_enfoque?: number;

  @IsOptional()
  @IsInt()
  id_tipo?: number;

  @IsOptional()
  @IsInt()
  id_nivel?: number;

  @IsOptional()
  @IsInt()
  id_diseno?: number;

  @IsOptional()
  @IsInt()
  id_metodo?: number;

  @IsOptional()
  @IsString()
  estado?: string;
}
