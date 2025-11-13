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
import { ProyectoVariableService } from './proyecto-variable.service';
import { CreateProyectoVariableDto } from './dto/create-proyecto-variable.dto';
import { UpdateProyectoVariableDto } from './dto/update-proyecto-variable.dto';

@Controller('proyecto-variable')
export class ProyectoVariableController {
  constructor(
    private readonly ProyectoVariableService: ProyectoVariableService,
  ) {}

  @Post()
  create(@Body() dto: CreateProyectoVariableDto) {
    return this.ProyectoVariableService.create(dto);
  }

  @Get()
  findAll() {
    return this.ProyectoVariableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ProyectoVariableService.findOne(id);
  }

  @Get('proyecto/:id_proyecto')
  findByIdea(@Param('id_proyecto', ParseIntPipe) id_proyecto: number) {
    return this.ProyectoVariableService.findByIdea(id_proyecto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProyectoVariableDto,
  ) {
    return this.ProyectoVariableService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ProyectoVariableService.remove(id);
  }
}
