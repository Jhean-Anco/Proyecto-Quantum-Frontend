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
import { InteresadoService } from './interesado.service';
import { CreateInteresadoDto } from './dto/create-interesado.dto';
import { UpdateInteresadoDto } from './dto/update-interesado.dto';

@Controller('interesado')
export class InteresadoController {
  constructor(private readonly interesadoService: InteresadoService) {}

  @Post()
  create(@Body() dto: CreateInteresadoDto) {
    return this.interesadoService.create(dto);
  }

  @Get()
  findAll() {
    return this.interesadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.interesadoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateInteresadoDto,
  ) {
    return this.interesadoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.interesadoService.remove(id);
  }
}
