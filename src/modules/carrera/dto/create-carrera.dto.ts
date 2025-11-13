import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCarreraDto {
  @IsString()
  @MaxLength(150)
  nombre: string;

  @IsString()
  @MaxLength(50)
  nivel: string;

  @IsInt()
  id_fu: number;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
