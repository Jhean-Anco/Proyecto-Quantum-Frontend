import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoParticipanteDto } from './create-proyecto-participante.dto';

export class UpdateProyectoParticipanteDto extends PartialType(
  CreateProyectoParticipanteDto,
) {}
