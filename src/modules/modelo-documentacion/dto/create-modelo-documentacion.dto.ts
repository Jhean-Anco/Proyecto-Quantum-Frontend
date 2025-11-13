import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateModeloDocumentacionDto {
  @IsString()
  @MaxLength(150)
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  url_archivo?: string;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
