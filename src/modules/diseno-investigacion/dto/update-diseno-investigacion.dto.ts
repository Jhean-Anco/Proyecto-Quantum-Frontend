import { PartialType } from '@nestjs/mapped-types';
import { CreateDisenoInvestigacionDto } from './create-diseno-investigacion.dto';

export class UpdateDisenoInvestigacionDto extends PartialType(
  CreateDisenoInvestigacionDto,
) {}
