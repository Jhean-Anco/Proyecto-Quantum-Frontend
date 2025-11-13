import { IsInt, IsString, IsOptional, IsUrl, MaxLength } from 'class-validator';

export class CreateArchivoProyectoDto {
  @IsInt()
  id_proyecto: number;

  @IsString()
  @MaxLength(200)
  nombre_archivo: string;

  @IsString()
  @MaxLength(100)
  tipo_archivo: string;

  @IsUrl()
  url_drive: string;

  @IsString()
  @MaxLength(255)
  drive_file_id: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  estado?: string;
}
