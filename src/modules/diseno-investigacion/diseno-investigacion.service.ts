import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DisenoInvestigacion } from './entities/diseno-investigacion.entity';
import { CreateDisenoInvestigacionDto } from './dto/create-diseno-investigacion.dto';
import { UpdateDisenoInvestigacionDto } from './dto/update-diseno-investigacion.dto';

@Injectable()
export class DisenoInvestigacionService {
  constructor(
    @InjectRepository(DisenoInvestigacion)
    private readonly disenoRepo: Repository<DisenoInvestigacion>,
  ) {}

  async create(
    dto: CreateDisenoInvestigacionDto,
  ): Promise<DisenoInvestigacion> {
    const nuevo = this.disenoRepo.create(dto);
    return this.disenoRepo.save(nuevo);
  }

  async findAll(): Promise<DisenoInvestigacion[]> {
    return this.disenoRepo.find();
  }

  async findOne(id: number): Promise<DisenoInvestigacion> {
    const registro = await this.disenoRepo.findOne({
      where: { id_diseno: id },
    });
    if (!registro) throw new NotFoundException(`Diseño ${id} no encontrado`);
    return registro;
  }

  async update(
    id: number,
    dto: UpdateDisenoInvestigacionDto,
  ): Promise<DisenoInvestigacion> {
    const registro = await this.findOne(id);
    Object.assign(registro, dto);
    return this.disenoRepo.save(registro);
  }

  async remove(id: number): Promise<void> {
    const registro = await this.findOne(id);
    await this.disenoRepo.remove(registro);
  }
}
