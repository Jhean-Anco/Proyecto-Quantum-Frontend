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
import { VariableInvestigacionService } from './variable-investigacion.service';
import { CreateVariableInvestigacionDto } from './dto/create-variable-investigacion.dto';
import { UpdateVariableInvestigacionDto } from './dto/update-variable-investigacion.dto';

@Controller('variable-investigacion')
export class VariableInvestigacionController {
  constructor(private readonly variableService: VariableInvestigacionService) {}

  @Post()
  create(@Body() dto: CreateVariableInvestigacionDto) {
    return this.variableService.create(dto);
  }

  @Get()
  findAll() {
    return this.variableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.variableService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateVariableInvestigacionDto,
  ) {
    return this.variableService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.variableService.remove(id);
  }
}
