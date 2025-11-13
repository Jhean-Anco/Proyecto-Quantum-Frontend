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
import { DisenoInvestigacionService } from './diseno-investigacion.service';
import { CreateDisenoInvestigacionDto } from './dto/create-diseno-investigacion.dto';
import { UpdateDisenoInvestigacionDto } from './dto/update-diseno-investigacion.dto';

@Controller('diseno-investigacion')
export class DisenoInvestigacionController {
  constructor(private readonly disenoService: DisenoInvestigacionService) {}

  @Post()
  create(@Body() dto: CreateDisenoInvestigacionDto) {
    return this.disenoService.create(dto);
  }

  @Get()
  findAll() {
    return this.disenoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.disenoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDisenoInvestigacionDto,
  ) {
    return this.disenoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.disenoService.remove(id);
  }
}
