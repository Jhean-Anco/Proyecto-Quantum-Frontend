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
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Post()
  create(@Body() dto: CreateCarreraDto) {
    return this.carreraService.create(dto);
  }

  @Get()
  findAll() {
    return this.carreraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carreraService.findOne(id);
  }

  @Get('facultad-universidad/:id_fu')
  findByFacultadUniversidad(@Param('id_fu', ParseIntPipe) id_fu: number) {
    return this.carreraService.findByFacultadUniversidad(id_fu);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCarreraDto) {
    return this.carreraService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.carreraService.remove(id);
  }
}
