import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnfoqueInvestigacion } from './entities/enfoque-investigacion.entity';
import { CreateEnfoqueInvestigacionDto } from './dto/create-enfoque-investigacion.dto';
import { UpdateEnfoqueInvestigacionDto } from './dto/update-enfoque-investigacion.dto';

@Injectable()
export class EnfoqueInvestigacionService {
  constructor(
    @InjectRepository(EnfoqueInvestigacion)
    private readonly enfoqueRepo: Repository<EnfoqueInvestigacion>,
  ) {}

  async create(
    dto: CreateEnfoqueInvestigacionDto,
  ): Promise<EnfoqueInvestigacion> {
    const nuevo = this.enfoqueRepo.create(dto);
    return this.enfoqueRepo.save(nuevo);
  }

  async findAll(): Promise<EnfoqueInvestigacion[]> {
    return this.enfoqueRepo.find();
  }

  async findOne(id: number): Promise<EnfoqueInvestigacion> {
    const registro = await this.enfoqueRepo.findOne({
      where: { id_enfoque: id },
    });
    if (!registro) throw new NotFoundException(`Enfoque ${id} no encontrado`);
    return registro;
  }

  async update(
    id: number,
    dto: UpdateEnfoqueInvestigacionDto,
  ): Promise<EnfoqueInvestigacion> {
    const registro = await this.findOne(id);
    Object.assign(registro, dto);
    return this.enfoqueRepo.save(registro);
  }

  async remove(id: number): Promise<void> {
    const registro = await this.findOne(id);
    await this.enfoqueRepo.remove(registro);
  }
}
