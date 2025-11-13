import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateProyectoParticipanteDto {
  @IsInt()
  id_proyecto: number;

  @IsOptional()
  @IsInt()
  id_usuario?: number;

  @IsOptional()
  @IsInt()
  id_cliente?: number;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
