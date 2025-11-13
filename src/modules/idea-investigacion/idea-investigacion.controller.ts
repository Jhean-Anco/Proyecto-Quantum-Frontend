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
import { IdeaInvestigacionService } from './idea-investigacion.service';
import { CreateIdeaInvestigacionDto } from './dto/create-idea-investigacion.dto';
import { UpdateIdeaInvestigacionDto } from './dto/update-idea-investigacion.dto';

@Controller('idea-investigacion')
export class IdeaInvestigacionController {
  constructor(private readonly ideaService: IdeaInvestigacionService) {}

  @Post()
  create(@Body() dto: CreateIdeaInvestigacionDto) {
    return this.ideaService.create(dto);
  }

  @Get()
  findAll() {
    return this.ideaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ideaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateIdeaInvestigacionDto,
  ) {
    return this.ideaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ideaService.remove(id);
  }
}
