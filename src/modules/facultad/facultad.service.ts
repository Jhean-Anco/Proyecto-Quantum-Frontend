import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Facultad } from './entities/facultad.entity';
import { CreateFacultadDto } from './dto/create-facultad.dto';
import { UpdateFacultadDto } from './dto/update-facultad.dto';

@Injectable()
export class FacultadService {
  constructor(
    @InjectRepository(Facultad)
    private readonly facultadRepo: Repository<Facultad>,
  ) {}

  async create(dto: CreateFacultadDto): Promise<Facultad> {
    const nueva = this.facultadRepo.create(dto);
    return this.facultadRepo.save(nueva);
  }

  async findAll(): Promise<Facultad[]> {
    return this.facultadRepo.find();
  }

  async findOne(id: number): Promise<Facultad> {
    const facultad = await this.facultadRepo.findOne({
      where: { id_facultad: id },
    });
    if (!facultad) throw new NotFoundException(`Facultad ${id} no encontrada`);
    return facultad;
  }

  async update(id: number, dto: UpdateFacultadDto): Promise<Facultad> {
    const facultad = await this.findOne(id);
    Object.assign(facultad, dto);
    return this.facultadRepo.save(facultad);
  }

  async remove(id: number): Promise<void> {
    const facultad = await this.findOne(id);
    await this.facultadRepo.remove(facultad);
  }
}
