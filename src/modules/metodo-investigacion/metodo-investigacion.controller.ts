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
import { MetodoInvestigacionService } from './metodo-investigacion.service';
import { CreateMetodoInvestigacionDto } from './dto/create-metodo-investigacion.dto';
import { UpdateMetodoInvestigacionDto } from './dto/update-metodo-investigacion.dto';

@Controller('metodo-investigacion')
export class MetodoInvestigacionController {
  constructor(private readonly metodoService: MetodoInvestigacionService) {}

  @Post()
  create(@Body() dto: CreateMetodoInvestigacionDto) {
    return this.metodoService.create(dto);
  }

  @Get()
  findAll() {
    return this.metodoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.metodoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMetodoInvestigacionDto,
  ) {
    return this.metodoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.metodoService.remove(id);
  }
}
