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
import { FacultadUniversidadService } from './facultad-universidad.service';
import { CreateFacultadUniversidadDto } from './dto/create-facultad-universidad.dto';
import { UpdateFacultadUniversidadDto } from './dto/update-facultad-universidad.dto';

@Controller('facultad-universidad')
export class FacultadUniversidadController {
  constructor(private readonly fuService: FacultadUniversidadService) {}

  @Post()
  create(@Body() dto: CreateFacultadUniversidadDto) {
    return this.fuService.create(dto);
  }

  @Get()
  findAll() {
    return this.fuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.fuService.findOne(id);
  }

  @Get('universidad/:id_universidad')
  findByUniversidad(
    @Param('id_universidad', ParseIntPipe) id_universidad: number,
  ) {
    return this.fuService.findByUniversidad(id_universidad);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateFacultadUniversidadDto,
  ) {
    return this.fuService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fuService.remove(id);
  }
}
