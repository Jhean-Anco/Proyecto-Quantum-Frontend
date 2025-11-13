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
import { LineaInvestigacionService } from './linea-investigacion.service';
import { CreateLineaInvestigacionDto } from './dto/create-linea-investigacion.dto';
import { UpdateLineaInvestigacionDto } from './dto/update-linea-investigacion.dto';

@Controller('linea-investigacion')
export class LineaInvestigacionController {
  constructor(private readonly lineaService: LineaInvestigacionService) {}

  @Post()
  create(@Body() dto: CreateLineaInvestigacionDto) {
    return this.lineaService.create(dto);
  }

  @Get()
  findAll() {
    return this.lineaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lineaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateLineaInvestigacionDto,
  ) {
    return this.lineaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lineaService.remove(id);
  }
}
