import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FacultadUniversidad } from './entities/facultad-universidad.entity';
import { CreateFacultadUniversidadDto } from './dto/create-facultad-universidad.dto';
import { UpdateFacultadUniversidadDto } from './dto/update-facultad-universidad.dto';

@Injectable()
export class FacultadUniversidadService {
  constructor(
    @InjectRepository(FacultadUniversidad)
    private readonly fuRepo: Repository<FacultadUniversidad>,
  ) {}

  async create(
    dto: CreateFacultadUniversidadDto,
  ): Promise<FacultadUniversidad> {
    const nuevo = this.fuRepo.create(dto);
    return this.fuRepo.save(nuevo);
  }

  async findAll(): Promise<FacultadUniversidad[]> {
    return this.fuRepo.find({
      relations: ['universidad', 'facultad'],
    });
  }

  async findOne(id: number): Promise<FacultadUniversidad> {
    const registro = await this.fuRepo.findOne({
      where: { id_fu: id },
      relations: ['universidad', 'facultad'],
    });
    if (!registro) throw new NotFoundException(`Relación ${id} no encontrada`);
    return registro;
  }

  async update(
    id: number,
    dto: UpdateFacultadUniversidadDto,
  ): Promise<FacultadUniversidad> {
    const registro = await this.findOne(id);
    Object.assign(registro, dto);
    return this.fuRepo.save(registro);
  }

  async remove(id: number): Promise<void> {
    const registro = await this.findOne(id);
    await this.fuRepo.remove(registro);
  }

  async findByUniversidad(
    id_universidad: number,
  ): Promise<FacultadUniversidad[]> {
    return this.fuRepo.find({
      where: { id_universidad },
      relations: ['universidad', 'facultad'],
    });
  }
}
