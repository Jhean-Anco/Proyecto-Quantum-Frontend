import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NivelInvestigacion } from './entities/nivel-investigacion.entity';
import { CreateNivelInvestigacionDto } from './dto/create-nivel-investigacion.dto';
import { UpdateNivelInvestigacionDto } from './dto/update-nivel-investigacion.dto';

@Injectable()
export class NivelInvestigacionService {
  constructor(
    @InjectRepository(NivelInvestigacion)
    private readonly nivelRepo: Repository<NivelInvestigacion>,
  ) {}

  async create(dto: CreateNivelInvestigacionDto): Promise<NivelInvestigacion> {
    const nuevo = this.nivelRepo.create(dto);
    return this.nivelRepo.save(nuevo);
  }

  async findAll(): Promise<NivelInvestigacion[]> {
    return this.nivelRepo.find({ order: { id_nivel: 'DESC' } });
  }

  async findOne(id: number): Promise<NivelInvestigacion> {
    const nivel = await this.nivelRepo.findOne({ where: { id_nivel: id } });
    if (!nivel)
      throw new NotFoundException(`Nivel de investigación ${id} no encontrado`);
    return nivel;
  }

  async update(
    id: number,
    dto: UpdateNivelInvestigacionDto,
  ): Promise<NivelInvestigacion> {
    const nivel = await this.findOne(id);
    Object.assign(nivel, dto);
    return this.nivelRepo.save(nivel);
  }

  async remove(id: number): Promise<void> {
    const nivel = await this.findOne(id);
    await this.nivelRepo.remove(nivel);
  }
}
