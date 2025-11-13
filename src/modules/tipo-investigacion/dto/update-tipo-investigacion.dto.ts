import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoInvestigacionDto } from './create-tipo-investigacion.dto';

export class UpdateTipoInvestigacionDto extends PartialType(
  CreateTipoInvestigacionDto,
) {}
