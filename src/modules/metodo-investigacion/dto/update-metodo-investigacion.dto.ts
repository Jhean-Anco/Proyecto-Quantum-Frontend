import { PartialType } from '@nestjs/mapped-types';
import { CreateMetodoInvestigacionDto } from './create-metodo-investigacion.dto';

export class UpdateMetodoInvestigacionDto extends PartialType(
  CreateMetodoInvestigacionDto,
) {}
