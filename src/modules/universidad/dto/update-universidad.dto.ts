import { PartialType } from '@nestjs/mapped-types';
import { CreateUniversidadDto } from './create-universidad.dto';

export class UpdateUniversidadDto extends PartialType(CreateUniversidadDto) {}
