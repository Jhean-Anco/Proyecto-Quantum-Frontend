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
import { ProyectoParticipanteService } from './proyecto-participante.service';
import { CreateProyectoParticipanteDto } from './dto/create-proyecto-participante.dto';
import { UpdateProyectoParticipanteDto } from './dto/update-proyecto-participante.dto';

@Controller('proyecto-participante')
export class ProyectoParticipanteController {
  constructor(
    private readonly participanteService: ProyectoParticipanteService,
  ) {}

  @Post()
  create(@Body() dto: CreateProyectoParticipanteDto) {
    return this.participanteService.create(dto);
  }

  @Get()
  findAll() {
    return this.participanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.participanteService.findOne(id);
  }

  @Get('proyecto/:id_proyecto')
  findByProyecto(@Param('id_proyecto', ParseIntPipe) id_proyecto: number) {
    return this.participanteService.findByProyecto(id_proyecto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProyectoParticipanteDto,
  ) {
    return this.participanteService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.participanteService.remove(id);
  }
}
