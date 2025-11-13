import { IsString, MaxLength } from 'class-validator';

export class CreateEnfoqueInvestigacionDto {
  @IsString()
  @MaxLength(150)
  nombre: string;
}
