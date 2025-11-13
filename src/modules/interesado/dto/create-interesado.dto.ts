import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateInteresadoDto {
  @IsString()
  @MaxLength(150)
  nombre: string;

  @IsEmail()
  @MaxLength(150)
  correo: string;

  @IsString()
  @MaxLength(20)
  telefono: string;

  @IsString()
  @MaxLength(100)
  tipo_interesado: string;

  @IsOptional()
  @IsString()
  @MaxLength(15)
  dni?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1)
  genero?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  pais?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  ciudad?: string;
}
