import { PartialType } from '@nestjs/mapped-types';
import { CreateVariableInvestigacionDto } from './create-variable-investigacion.dto';

export class UpdateVariableInvestigacionDto extends PartialType(
  CreateVariableInvestigacionDto,
) {}
