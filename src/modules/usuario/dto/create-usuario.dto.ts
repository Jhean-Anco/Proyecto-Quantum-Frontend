import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre: string;

  @IsEmail()
  @MaxLength(150)
  correo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  contrasena: string;

  @IsString()
  @MaxLength(20)
  dni: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;

  @IsInt()
  id_rol: number;
}
