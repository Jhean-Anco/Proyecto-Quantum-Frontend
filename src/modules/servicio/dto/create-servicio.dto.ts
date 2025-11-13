import {
  IsBoolean,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateServicioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsDecimal()
  precio_base?: number;

  @IsOptional()
  @IsInt()
  tiempo_estimado_dias?: number;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
