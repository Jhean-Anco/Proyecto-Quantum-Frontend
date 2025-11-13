import { IsOptional, IsString, MaxLength, IsInt } from 'class-validator';

export class CreateNotificacionProyectoDto {
  @IsInt()
  id_participante: number;

  @IsString()
  @MaxLength(150)
  titulo: string;

  @IsString()
  mensaje: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  tipo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  prioridad?: string;
}
