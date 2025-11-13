import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LineaInvestigacion } from './entities/linea-investigacion.entity';
import { CreateLineaInvestigacionDto } from './dto/create-linea-investigacion.dto';
import { UpdateLineaInvestigacionDto } from './dto/update-linea-investigacion.dto';

@Injectable()
export class LineaInvestigacionService {
  constructor(
    @InjectRepository(LineaInvestigacion)
    private readonly lineaRepo: Repository<LineaInvestigacion>,
  ) {}

  async create(dto: CreateLineaInvestigacionDto): Promise<LineaInvestigacion> {
    const nueva = this.lineaRepo.create(dto);
    return this.lineaRepo.save(nueva);
  }

  async findAll(): Promise<LineaInvestigacion[]> {
    return this.lineaRepo.find({ order: { id_linea: 'DESC' } });
  }

  async findOne(id: number): Promise<LineaInvestigacion> {
    const linea = await this.lineaRepo.findOne({ where: { id_linea: id } });
    if (!linea)
      throw new NotFoundException(`Línea de investigación ${id} no encontrada`);
    return linea;
  }

  async update(
    id: number,
    dto: UpdateLineaInvestigacionDto,
  ): Promise<LineaInvestigacion> {
    const linea = await this.findOne(id);
    Object.assign(linea, dto);
    return this.lineaRepo.save(linea);
  }

  async remove(id: number): Promise<void> {
    const linea = await this.findOne(id);
    await this.lineaRepo.remove(linea);
  }
}
