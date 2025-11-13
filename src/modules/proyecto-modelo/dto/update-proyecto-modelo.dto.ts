import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoModeloDto } from './create-proyecto-modelo.dto';

export class UpdateProyectoModeloDto extends PartialType(
  CreateProyectoModeloDto,
) {}
