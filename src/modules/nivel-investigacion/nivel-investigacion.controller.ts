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
import { NivelInvestigacionService } from './nivel-investigacion.service';
import { CreateNivelInvestigacionDto } from './dto/create-nivel-investigacion.dto';
import { UpdateNivelInvestigacionDto } from './dto/update-nivel-investigacion.dto';

@Controller('nivel-investigacion')
export class NivelInvestigacionController {
  constructor(private readonly nivelService: NivelInvestigacionService) {}

  @Post()
  create(@Body() dto: CreateNivelInvestigacionDto) {
    return this.nivelService.create(dto);
  }

  @Get()
  findAll() {
    return this.nivelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.nivelService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateNivelInvestigacionDto,
  ) {
    return this.nivelService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.nivelService.remove(id);
  }
}
