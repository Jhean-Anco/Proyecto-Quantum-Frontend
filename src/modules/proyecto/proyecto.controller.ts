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
import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';

@Controller('proyecto')
export class ProyectoController {
  constructor(private readonly proyectoService: ProyectoService) {}

  @Post()
  create(@Body() dto: CreateProyectoDto) {
    return this.proyectoService.create(dto);
  }

  @Get()
  findAll() {
    return this.proyectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.proyectoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProyectoDto,
  ) {
    return this.proyectoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.proyectoService.remove(id);
  }
}
