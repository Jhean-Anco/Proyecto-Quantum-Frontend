import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ArchivoProyectoService } from './archivo-proyecto.service';
import { CreateArchivoProyectoDto } from './dto/create-archivo-proyecto.dto';
import { UpdateArchivoProyectoDto } from './dto/update-archivo-proyecto.dto';

@Controller('archivo-proyecto')
export class ArchivoProyectoController {
  constructor(
    private readonly archivoProyectoService: ArchivoProyectoService,
  ) {}

  @Post()
  create(@Body() dto: CreateArchivoProyectoDto) {
    return this.archivoProyectoService.create(dto);
  }

  @Get()
  findAll() {
    return this.archivoProyectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.archivoProyectoService.findOne(id);
  }

  @Get('proyecto/:id_proyecto')
  findByProyecto(@Param('id_proyecto', ParseIntPipe) id_proyecto: number) {
    return this.archivoProyectoService.findByProyecto(id_proyecto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateArchivoProyectoDto,
  ) {
    return this.archivoProyectoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.archivoProyectoService.remove(id);
  }
}
