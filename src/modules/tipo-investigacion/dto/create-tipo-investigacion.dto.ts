import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTipoInvestigacionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;
}
