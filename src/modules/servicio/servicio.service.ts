import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepo: Repository<Servicio>,
  ) {}

  async create(dto: CreateServicioDto): Promise<Servicio> {
    const nuevo = this.servicioRepo.create(dto);
    return this.servicioRepo.save(nuevo);
  }

  async findAll(): Promise<Servicio[]> {
    return this.servicioRepo.find({
      order: { id_servicio: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Servicio> {
    const servicio = await this.servicioRepo.findOneBy({ id_servicio: id });
    if (!servicio)
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    return servicio;
  }

  async update(id: number, dto: UpdateServicioDto): Promise<Servicio> {
    const servicio = await this.findOne(id);
    Object.assign(servicio, dto);
    return this.servicioRepo.save(servicio);
  }

  async remove(id: number): Promise<void> {
    const servicio = await this.findOne(id);
    await this.servicioRepo.remove(servicio);
  }
}
