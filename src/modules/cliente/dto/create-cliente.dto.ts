import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateClienteDto {
  @IsInt()
  id_interesado: number;

  @IsInt()
  id_carrera_linea: number;

  @IsString()
  @MaxLength(100)
  tipo_cliente: string;

  @IsString()
  @MaxLength(100)
  nivel_academico: string;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
