import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ModeloDocumentacionService } from './modelo-documentacion.service';
import { CreateModeloDocumentacionDto } from './dto/create-modelo-documentacion.dto';
import { UpdateModeloDocumentacionDto } from './dto/update-modelo-documentacion.dto';

@Controller('modelo-documentacion')
export class ModeloDocumentacionController {
  constructor(private readonly modeloService: ModeloDocumentacionService) {}

  @Post()
  create(@Body() dto: CreateModeloDocumentacionDto) {
    return this.modeloService.create(dto);
  }

  @Get()
  findAll() {
    return this.modeloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.modeloService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateModeloDocumentacionDto,
  ) {
    return this.modeloService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.modeloService.remove(id);
  }
}
