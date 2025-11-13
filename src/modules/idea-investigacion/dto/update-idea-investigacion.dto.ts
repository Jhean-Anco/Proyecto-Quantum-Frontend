import { PartialType } from '@nestjs/mapped-types';
import { CreateIdeaInvestigacionDto } from './create-idea-investigacion.dto';

export class UpdateIdeaInvestigacionDto extends PartialType(
  CreateIdeaInvestigacionDto,
) {}
