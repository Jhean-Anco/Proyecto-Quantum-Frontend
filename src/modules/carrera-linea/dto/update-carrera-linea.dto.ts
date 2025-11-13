import { PartialType } from '@nestjs/mapped-types';
import { CreateCarreraLineaDto } from './create-carrera-linea.dto';

export class UpdateCarreraLineaDto extends PartialType(CreateCarreraLineaDto) {}
