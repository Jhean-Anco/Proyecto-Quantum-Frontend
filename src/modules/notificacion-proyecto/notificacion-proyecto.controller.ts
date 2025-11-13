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
import { NotificacionProyectoService } from './notificacion-proyecto.service';
import { CreateNotificacionProyectoDto } from './dto/create-notificacion-proyecto.dto';
import { UpdateNotificacionProyectoDto } from './dto/update-notificacion-proyecto.dto';

@Controller('notificacion-proyecto')
export class NotificacionProyectoController {
  constructor(
    private readonly notificacionService: NotificacionProyectoService,
  ) {}

  @Post()
  create(@Body() dto: CreateNotificacionProyectoDto) {
    return this.notificacionService.create(dto);
  }

  @Get()
  findAll() {
    return this.notificacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.notificacionService.findOne(id);
  }

  @Get('participante/:id_participante')
  findByParticipante(@Param('id_participante', ParseIntPipe) id: number) {
    return this.notificacionService.findByParticipante(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateNotificacionProyectoDto,
  ) {
    return this.notificacionService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.notificacionService.remove(id);
  }
}
