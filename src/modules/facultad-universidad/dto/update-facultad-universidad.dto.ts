import { PartialType } from '@nestjs/mapped-types';
import { CreateFacultadUniversidadDto } from './create-facultad-universidad.dto';

export class UpdateFacultadUniversidadDto extends PartialType(
  CreateFacultadUniversidadDto,
) {}
