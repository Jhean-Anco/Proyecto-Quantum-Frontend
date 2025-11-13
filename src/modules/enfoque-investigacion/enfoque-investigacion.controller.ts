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
import { EnfoqueInvestigacionService } from './enfoque-investigacion.service';
import { CreateEnfoqueInvestigacionDto } from './dto/create-enfoque-investigacion.dto';
import { UpdateEnfoqueInvestigacionDto } from './dto/update-enfoque-investigacion.dto';

@Controller('enfoque-investigacion')
export class EnfoqueInvestigacionController {
  constructor(private readonly enfoqueService: EnfoqueInvestigacionService) {}

  @Post()
  create(@Body() dto: CreateEnfoqueInvestigacionDto) {
    return this.enfoqueService.create(dto);
  }

  @Get()
  findAll() {
    return this.enfoqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.enfoqueService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEnfoqueInvestigacionDto,
  ) {
    return this.enfoqueService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.enfoqueService.remove(id);
  }
}
