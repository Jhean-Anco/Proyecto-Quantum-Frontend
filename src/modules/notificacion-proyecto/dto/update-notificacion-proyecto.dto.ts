import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificacionProyectoDto } from './create-notificacion-proyecto.dto';

export class UpdateNotificacionProyectoDto extends PartialType(
  CreateNotificacionProyectoDto,
) {}
