import { PartialType } from '@nestjs/mapped-types';
import { CreateModeloDocumentacionDto } from './create-modelo-documentacion.dto';

export class UpdateModeloDocumentacionDto extends PartialType(
  CreateModeloDocumentacionDto,
) {}
