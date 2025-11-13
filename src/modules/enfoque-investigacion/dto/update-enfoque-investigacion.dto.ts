import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfoqueInvestigacionDto } from './create-enfoque-investigacion.dto';

export class UpdateEnfoqueInvestigacionDto extends PartialType(
  CreateEnfoqueInvestigacionDto,
) {}
