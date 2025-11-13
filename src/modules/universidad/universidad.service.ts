import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Universidad } from './entities/universidad.entity';
import { CreateUniversidadDto } from './dto/create-universidad.dto';
import { UpdateUniversidadDto } from './dto/update-universidad.dto';

@Injectable()
export class UniversidadService {
  constructor(
    @InjectRepository(Universidad)
    private readonly universidadRepo: Repository<Universidad>,
  ) {}

  async create(dto: CreateUniversidadDto): Promise<Universidad> {
    const nueva = this.universidadRepo.create(dto);
    return this.universidadRepo.save(nueva);
  }

  async findAll(): Promise<Universidad[]> {
    return this.universidadRepo.find({ order: { id_universidad: 'ASC' } });
  }

  async findOne(id: number): Promise<Universidad> {
    const universidad = await this.universidadRepo.findOneBy({
      id_universidad: id,
    });
    if (!universidad)
      throw new NotFoundException(`Universidad con ID ${id} no encontrada`);
    return universidad;
  }

  async update(id: number, dto: UpdateUniversidadDto): Promise<Universidad> {
    const universidad = await this.findOne(id);
    Object.assign(universidad, dto);
    return this.universidadRepo.save(universidad);
  }

  async remove(id: number): Promise<void> {
    const universidad = await this.findOne(id);
    await this.universidadRepo.remove(universidad);
  }
}
