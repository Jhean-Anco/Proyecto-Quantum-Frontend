import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateVariableInvestigacionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  definicion_operacional?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  unidad_medida?: string;
}
