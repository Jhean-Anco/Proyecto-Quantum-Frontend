import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateMetodoInvestigacionDto {
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
