import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepo: Repository<Proyecto>,
  ) {}

  async create(dto: CreateProyectoDto): Promise<Proyecto> {
    const nuevo = this.proyectoRepo.create(dto);
    return this.proyectoRepo.save(nuevo);
  }

  async findAll(): Promise<Proyecto[]> {
    return this.proyectoRepo.find({
      relations: ['idea', 'servicio'],
      order: { id_proyecto: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Proyecto> {
    const proyecto = await this.proyectoRepo.findOne({
      where: { id_proyecto: id },
      relations: ['idea', 'servicio'],
    });
    if (!proyecto) throw new NotFoundException(`Proyecto ${id} no encontrado`);
    return proyecto;
  }

  async update(id: number, dto: UpdateProyectoDto): Promise<Proyecto> {
    const proyecto = await this.findOne(id);
    Object.assign(proyecto, dto);
    return this.proyectoRepo.save(proyecto);
  }

  async remove(id: number): Promise<void> {
    const proyecto = await this.findOne(id);
    await this.proyectoRepo.remove(proyecto);
  }
}
