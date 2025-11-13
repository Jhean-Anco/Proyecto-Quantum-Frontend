import { IsString, MaxLength } from 'class-validator';

export class CreateDisenoInvestigacionDto {
  @IsString()
  @MaxLength(150)
  nombre: string;
}
