import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from './entities/carrera.entity';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera)
    private readonly carreraRepo: Repository<Carrera>,
  ) {}

  async create(dto: CreateCarreraDto): Promise<Carrera> {
    const nueva = this.carreraRepo.create(dto);
    return this.carreraRepo.save(nueva);
  }

  async findAll(): Promise<Carrera[]> {
    return this.carreraRepo.find({
      relations: ['facultad_universidad'],
    });
  }

  async findOne(id: number): Promise<Carrera> {
    const carrera = await this.carreraRepo.findOne({
      where: { id_carrera: id },
      relations: ['facultad_universidad'],
    });
    if (!carrera) throw new NotFoundException(`Carrera ${id} no encontrada`);
    return carrera;
  }

  async update(id: number, dto: UpdateCarreraDto): Promise<Carrera> {
    const carrera = await this.findOne(id);
    Object.assign(carrera, dto);
    return this.carreraRepo.save(carrera);
  }

  async remove(id: number): Promise<void> {
    const carrera = await this.findOne(id);
    await this.carreraRepo.remove(carrera);
  }

  async findByFacultadUniversidad(id_fu: number): Promise<Carrera[]> {
    return this.carreraRepo.find({
      where: { id_fu },
      relations: ['facultad_universidad'],
    });
  }
}
