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
import { UniversidadService } from './universidad.service';
import { CreateUniversidadDto } from './dto/create-universidad.dto';
import { UpdateUniversidadDto } from './dto/update-universidad.dto';

@Controller('universidad')
export class UniversidadController {
  constructor(private readonly universidadService: UniversidadService) {}

  @Post()
  create(@Body() dto: CreateUniversidadDto) {
    return this.universidadService.create(dto);
  }

  @Get()
  findAll() {
    return this.universidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.universidadService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUniversidadDto,
  ) {
    return this.universidadService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.universidadService.remove(id);
  }
}
