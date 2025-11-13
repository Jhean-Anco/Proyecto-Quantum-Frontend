import { PartialType } from '@nestjs/mapped-types';
import { CreateNivelInvestigacionDto } from './create-nivel-investigacion.dto';

export class UpdateNivelInvestigacionDto extends PartialType(
  CreateNivelInvestigacionDto,
) {}
