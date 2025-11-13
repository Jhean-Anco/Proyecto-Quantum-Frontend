import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArchivoProyecto } from './entities/archivo-proyecto.entity';
import { CreateArchivoProyectoDto } from './dto/create-archivo-proyecto.dto';
import { UpdateArchivoProyectoDto } from './dto/update-archivo-proyecto.dto';

@Injectable()
export class ArchivoProyectoService {
  constructor(
    @InjectRepository(ArchivoProyecto)
    private readonly archivoProyectoRepo: Repository<ArchivoProyecto>,
  ) {}

  async create(dto: CreateArchivoProyectoDto): Promise<ArchivoProyecto> {
    const nuevo = this.archivoProyectoRepo.create(dto);
    return this.archivoProyectoRepo.save(nuevo);
  }

  async findAll(): Promise<ArchivoProyecto[]> {
    return this.archivoProyectoRepo.find({ relations: ['proyecto'] });
  }

  async findOne(id: number): Promise<ArchivoProyecto> {
    const registro = await this.archivoProyectoRepo.findOne({
      where: { id_archivo: id },
      relations: ['proyecto'],
    });
    if (!registro)
      throw new NotFoundException(`Archivo de proyecto ${id} no encontrado`);
    return registro;
  }

  async update(
    id: number,
    dto: UpdateArchivoProyectoDto,
  ): Promise<ArchivoProyecto> {
    const registro = await this.findOne(id);
    Object.assign(registro, dto);
    return this.archivoProyectoRepo.save(registro);
  }

  async remove(id: number): Promise<void> {
    const registro = await this.findOne(id);
    await this.archivoProyectoRepo.remove(registro);
  }

  async findByProyecto(id_proyecto: number): Promise<ArchivoProyecto[]> {
    return this.archivoProyectoRepo.find({
      where: { id_proyecto },
      order: { fecha_subida: 'DESC' },
    });
  }
}
