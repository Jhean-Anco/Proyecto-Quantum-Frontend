import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUniversidadDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  siglas: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  pais: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  ciudad: string;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
