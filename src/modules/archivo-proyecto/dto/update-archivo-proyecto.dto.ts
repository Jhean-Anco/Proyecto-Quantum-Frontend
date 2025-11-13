import { PartialType } from '@nestjs/mapped-types';
import { CreateArchivoProyectoDto } from './create-archivo-proyecto.dto';

export class UpdateArchivoProyectoDto extends PartialType(
  CreateArchivoProyectoDto,
) {}
