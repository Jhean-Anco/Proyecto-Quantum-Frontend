import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoInvestigacion } from './entities/metodo-investigacion.entity';
import { CreateMetodoInvestigacionDto } from './dto/create-metodo-investigacion.dto';
import { UpdateMetodoInvestigacionDto } from './dto/update-metodo-investigacion.dto';

@Injectable()
export class MetodoInvestigacionService {
  constructor(
    @InjectRepository(MetodoInvestigacion)
    private readonly metodoRepo: Repository<MetodoInvestigacion>,
  ) {}

  async create(
    dto: CreateMetodoInvestigacionDto,
  ): Promise<MetodoInvestigacion> {
    const nuevo = this.metodoRepo.create(dto);
    return this.metodoRepo.save(nuevo);
  }

  async findAll(): Promise<MetodoInvestigacion[]> {
    return this.metodoRepo.find({ order: { id_metodo: 'DESC' } });
  }

  async findOne(id: number): Promise<MetodoInvestigacion> {
    const metodo = await this.metodoRepo.findOne({ where: { id_metodo: id } });
    if (!metodo)
      throw new NotFoundException(
        `Método de investigación ${id} no encontrado`,
      );
    return metodo;
  }

  async update(
    id: number,
    dto: UpdateMetodoInvestigacionDto,
  ): Promise<MetodoInvestigacion> {
    const metodo = await this.findOne(id);
    Object.assign(metodo, dto);
    return this.metodoRepo.save(metodo);
  }

  async remove(id: number): Promise<void> {
    const metodo = await this.findOne(id);
    await this.metodoRepo.remove(metodo);
  }
}
