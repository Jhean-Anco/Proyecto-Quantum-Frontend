import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoInvestigacion } from './entities/tipo-investigacion.entity';
import { CreateTipoInvestigacionDto } from './dto/create-tipo-investigacion.dto';
import { UpdateTipoInvestigacionDto } from './dto/update-tipo-investigacion.dto';

@Injectable()
export class TipoInvestigacionService {
  constructor(
    @InjectRepository(TipoInvestigacion)
    private readonly tipoRepo: Repository<TipoInvestigacion>,
  ) {}

  async create(dto: CreateTipoInvestigacionDto): Promise<TipoInvestigacion> {
    const nuevo = this.tipoRepo.create(dto);
    return this.tipoRepo.save(nuevo);
  }

  async findAll(): Promise<TipoInvestigacion[]> {
    return this.tipoRepo.find({ order: { id_tipo: 'ASC' } });
  }

  async findOne(id: number): Promise<TipoInvestigacion> {
    const tipo = await this.tipoRepo.findOneBy({ id_tipo: id });
    if (!tipo)
      throw new NotFoundException(`Tipo de investigación ${id} no encontrado`);
    return tipo;
  }

  async update(
    id: number,
    dto: UpdateTipoInvestigacionDto,
  ): Promise<TipoInvestigacion> {
    const tipo = await this.findOne(id);
    Object.assign(tipo, dto);
    return this.tipoRepo.save(tipo);
  }

  async remove(id: number): Promise<void> {
    const tipo = await this.findOne(id);
    await this.tipoRepo.remove(tipo);
  }
}
