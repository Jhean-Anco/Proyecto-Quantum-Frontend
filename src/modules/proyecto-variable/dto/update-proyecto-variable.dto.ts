import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoVariableDto } from './create-proyecto-variable.dto';

export class UpdateProyectoVariableDto extends PartialType(
  CreateProyectoVariableDto,
) {}
