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
import { TipoInvestigacionService } from './tipo-investigacion.service';
import { CreateTipoInvestigacionDto } from './dto/create-tipo-investigacion.dto';
import { UpdateTipoInvestigacionDto } from './dto/update-tipo-investigacion.dto';

@Controller('tipo-investigacion')
export class TipoInvestigacionController {
  constructor(private readonly tipoService: TipoInvestigacionService) {}

  @Post()
  create(@Body() dto: CreateTipoInvestigacionDto) {
    return this.tipoService.create(dto);
  }

  @Get()
  findAll() {
    return this.tipoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTipoInvestigacionDto,
  ) {
    return this.tipoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoService.remove(id);
  }
}
