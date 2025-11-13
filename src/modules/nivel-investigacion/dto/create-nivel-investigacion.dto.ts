import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateNivelInvestigacionDto {
  @IsString()
  @MaxLength(150)
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
