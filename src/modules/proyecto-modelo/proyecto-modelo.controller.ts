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
import { ProyectoModeloService } from './proyecto-modelo.service';
import { CreateProyectoModeloDto } from './dto/create-proyecto-modelo.dto';
import { UpdateProyectoModeloDto } from './dto/update-proyecto-modelo.dto';

@Controller('proyecto-modelo')
export class ProyectoModeloController {
  constructor(private readonly proyectoModeloService: ProyectoModeloService) {}

  @Post()
  create(@Body() dto: CreateProyectoModeloDto) {
    return this.proyectoModeloService.create(dto);
  }

  @Get()
  findAll() {
    return this.proyectoModeloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.proyectoModeloService.findOne(id);
  }

  @Get('proyecto/:id_proyecto')
  findByProyecto(@Param('id_proyecto', ParseIntPipe) id_proyecto: number) {
    return this.proyectoModeloService.findByProyecto(id_proyecto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProyectoModeloDto,
  ) {
    return this.proyectoModeloService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.proyectoModeloService.remove(id);
  }
}
