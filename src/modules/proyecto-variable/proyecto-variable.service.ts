import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProyectoVariable } from './entities/proyecto-variable.entity';
import { CreateProyectoVariableDto } from './dto/create-proyecto-variable.dto';
import { UpdateProyectoVariableDto } from './dto/update-proyecto-variable.dto';

@Injectable()
export class ProyectoVariableService {
  constructor(
    @InjectRepository(ProyectoVariable)
    private readonly ProyectoVariableRepo: Repository<ProyectoVariable>,
  ) {}

  async create(dto: CreateProyectoVariableDto): Promise<ProyectoVariable> {
    const nueva = this.ProyectoVariableRepo.create(dto);
    return this.ProyectoVariableRepo.save(nueva);
  }

  async findAll(): Promise<ProyectoVariable[]> {
    return this.ProyectoVariableRepo.find({
      relations: ['proyecto', 'variable'],
    });
  }

  async findByIdea(id_proyecto: number): Promise<ProyectoVariable[]> {
    return this.ProyectoVariableRepo.find({
      where: { id_proyecto },
      relations: ['proyecto', 'variable'],
    });
  }

  async findOne(id: number): Promise<ProyectoVariable> {
    const registro = await this.ProyectoVariableRepo.findOne({
      where: { id_proyecto_variable: id },
      relations: ['proyecto', 'variable'],
    });
    if (!registro)
      throw new NotFoundException(
        `Relación Proyecto–Variable ${id} no encontrada`,
      );
    return registro;
  }

  async update(
    id: number,
    dto: UpdateProyectoVariableDto,
  ): Promise<ProyectoVariable> {
    const registro = await this.findOne(id);
    Object.assign(registro, dto);
    return this.ProyectoVariableRepo.save(registro);
  }

  async remove(id: number): Promise<void> {
    const registro = await this.findOne(id);
    await this.ProyectoVariableRepo.remove(registro);
  }
}
