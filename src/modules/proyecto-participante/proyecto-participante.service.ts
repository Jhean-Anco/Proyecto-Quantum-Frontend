import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProyectoParticipante } from './entities/proyecto-participante.entity';
import { CreateProyectoParticipanteDto } from './dto/create-proyecto-participante.dto';
import { UpdateProyectoParticipanteDto } from './dto/update-proyecto-participante.dto';

@Injectable()
export class ProyectoParticipanteService {
  constructor(
    @InjectRepository(ProyectoParticipante)
    private readonly participanteRepo: Repository<ProyectoParticipante>,
  ) {}

  async create(
    dto: CreateProyectoParticipanteDto,
  ): Promise<ProyectoParticipante> {
    const nuevo = this.participanteRepo.create(dto);
    return this.participanteRepo.save(nuevo);
  }

  async findAll(): Promise<ProyectoParticipante[]> {
    return this.participanteRepo.find({
      relations: ['proyecto', 'usuario', 'cliente'],
      order: { id_participante: 'DESC' },
    });
  }

  async findOne(id: number): Promise<ProyectoParticipante> {
    const participante = await this.participanteRepo.findOne({
      where: { id_participante: id },
      relations: ['proyecto', 'usuario', 'cliente'],
    });
    if (!participante)
      throw new NotFoundException(`Participante ${id} no encontrado`);
    return participante;
  }

  async update(
    id: number,
    dto: UpdateProyectoParticipanteDto,
  ): Promise<ProyectoParticipante> {
    const participante = await this.findOne(id);
    Object.assign(participante, dto);
    return this.participanteRepo.save(participante);
  }

  async remove(id: number): Promise<void> {
    const participante = await this.findOne(id);
    await this.participanteRepo.remove(participante);
  }

  async findByProyecto(id_proyecto: number): Promise<ProyectoParticipante[]> {
    return this.participanteRepo.find({
      where: { id_proyecto },
      relations: ['usuario', 'cliente'],
      order: { id_participante: 'ASC' },
    });
  }
}
