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
import { CarreraLineaService } from './carrera-linea.service';
import { CreateCarreraLineaDto } from './dto/create-carrera-linea.dto';
import { UpdateCarreraLineaDto } from './dto/update-carrera-linea.dto';

@Controller('carrera-linea')
export class CarreraLineaController {
  constructor(private readonly carreraLineaService: CarreraLineaService) {}

  @Post()
  create(@Body() dto: CreateCarreraLineaDto) {
    return this.carreraLineaService.create(dto);
  }

  @Get()
  findAll() {
    return this.carreraLineaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carreraLineaService.findOne(id);
  }

  @Get('carrera/:id_carrera')
  findByCarrera(@Param('id_carrera', ParseIntPipe) id_carrera: number) {
    return this.carreraLineaService.findByCarrera(id_carrera);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCarreraLineaDto,
  ) {
    return this.carreraLineaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.carreraLineaService.remove(id);
  }
}
