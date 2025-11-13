import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdeaInvestigacion } from './entities/idea-investigacion.entity';
import { CreateIdeaInvestigacionDto } from './dto/create-idea-investigacion.dto';
import { UpdateIdeaInvestigacionDto } from './dto/update-idea-investigacion.dto';

@Injectable()
export class IdeaInvestigacionService {
  constructor(
    @InjectRepository(IdeaInvestigacion)
    private readonly ideaRepo: Repository<IdeaInvestigacion>,
  ) {}

  async create(dto: CreateIdeaInvestigacionDto): Promise<IdeaInvestigacion> {
    const nueva = this.ideaRepo.create(dto);
    return this.ideaRepo.save(nueva);
  }

  async findAll(): Promise<IdeaInvestigacion[]> {
    return this.ideaRepo.find({
      relations: ['enfoque', 'tipo', 'nivel', 'diseno', 'metodo'],
      order: { id_idea: 'DESC' },
    });
  }

  async findOne(id: number): Promise<IdeaInvestigacion> {
    const idea = await this.ideaRepo.findOne({
      where: { id_idea: id },
      relations: ['enfoque', 'tipo', 'nivel', 'diseno', 'metodo'],
    });
    if (!idea)
      throw new NotFoundException(`Idea de investigación ${id} no encontrada`);
    return idea;
  }

  async update(
    id: number,
    dto: UpdateIdeaInvestigacionDto,
  ): Promise<IdeaInvestigacion> {
    const idea = await this.findOne(id);
    Object.assign(idea, dto);
    return this.ideaRepo.save(idea);
  }

  async remove(id: number): Promise<void> {
    const idea = await this.findOne(id);
    await this.ideaRepo.remove(idea);
  }
}
