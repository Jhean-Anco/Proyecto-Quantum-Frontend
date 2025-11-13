import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProyectoModelo } from './entities/proyecto-modelo.entity';
import { CreateProyectoModeloDto } from './dto/create-proyecto-modelo.dto';
import { UpdateProyectoModeloDto } from './dto/update-proyecto-modelo.dto';

@Injectable()
export class ProyectoModeloService {
  constructor(
    @InjectRepository(ProyectoModelo)
    private readonly proyectoModeloRepo: Repository<ProyectoModelo>,
  ) {}

  async create(dto: CreateProyectoModeloDto): Promise<ProyectoModelo> {
    const nuevo = this.proyectoModeloRepo.create(dto);
    return this.proyectoModeloRepo.save(nuevo);
  }

  async findAll(): Promise<ProyectoModelo[]> {
    return this.proyectoModeloRepo.find({
      relations: ['proyecto', 'modelo'],
      order: { id_proyecto_modelo: 'DESC' },
    });
  }

  async findOne(id: number): Promise<ProyectoModelo> {
    const registro = await this.proyectoModeloRepo.findOne({
      where: { id_proyecto_modelo: id },
      relations: ['proyecto', 'modelo'],
    });
    if (!registro)
      throw new NotFoundException(`ProyectoModelo ${id} no encontrado`);
    return registro;
  }

  async update(
    id: number,
    dto: UpdateProyectoModeloDto,
  ): Promise<ProyectoModelo> {
    const registro = await this.findOne(id);
    Object.assign(registro, dto);
    return this.proyectoModeloRepo.save(registro);
  }

  async remove(id: number): Promise<void> {
    const registro = await this.findOne(id);
    await this.proyectoModeloRepo.remove(registro);
  }

  async findByProyecto(id_proyecto: number): Promise<ProyectoModelo[]> {
    return this.proyectoModeloRepo.find({
      where: { id_proyecto },
      relations: ['modelo'],
      order: { fecha_entrega: 'DESC' },
    });
  }
}
