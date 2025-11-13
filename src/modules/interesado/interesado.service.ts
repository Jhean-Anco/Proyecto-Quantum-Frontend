import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Interesado } from './entities/interesado.entity';
import { CreateInteresadoDto } from './dto/create-interesado.dto';
import { UpdateInteresadoDto } from './dto/update-interesado.dto';

@Injectable()
export class InteresadoService {
  constructor(
    @InjectRepository(Interesado)
    private readonly interesadoRepo: Repository<Interesado>,
  ) {}

  async create(dto: CreateInteresadoDto): Promise<Interesado> {
    const nuevo = this.interesadoRepo.create(dto);
    return this.interesadoRepo.save(nuevo);
  }

  async findAll(): Promise<Interesado[]> {
    return this.interesadoRepo.find();
  }

  async findOne(id: number): Promise<Interesado> {
    const interesado = await this.interesadoRepo.findOne({
      where: { id_interesado: id },
    });
    if (!interesado)
      throw new NotFoundException(`Interesado ${id} no encontrado`);
    return interesado;
  }

  async update(id: number, dto: UpdateInteresadoDto): Promise<Interesado> {
    const interesado = await this.findOne(id);
    Object.assign(interesado, dto);
    return this.interesadoRepo.save(interesado);
  }

  async remove(id: number): Promise<void> {
    const interesado = await this.findOne(id);
    await this.interesadoRepo.remove(interesado);
  }
}
