import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VariableInvestigacion } from './entities/variable-investigacion.entity';
import { CreateVariableInvestigacionDto } from './dto/create-variable-investigacion.dto';
import { UpdateVariableInvestigacionDto } from './dto/update-variable-investigacion.dto';

@Injectable()
export class VariableInvestigacionService {
  constructor(
    @InjectRepository(VariableInvestigacion)
    private readonly variableRepo: Repository<VariableInvestigacion>,
  ) {}

  async create(
    dto: CreateVariableInvestigacionDto,
  ): Promise<VariableInvestigacion> {
    const nueva = this.variableRepo.create(dto);
    return this.variableRepo.save(nueva);
  }

  async findAll(): Promise<VariableInvestigacion[]> {
    return this.variableRepo.find({ order: { id_variable: 'ASC' } });
  }

  async findOne(id: number): Promise<VariableInvestigacion> {
    const variable = await this.variableRepo.findOneBy({ id_variable: id });
    if (!variable)
      throw new NotFoundException(
        `Variable de investigación ${id} no encontrada`,
      );
    return variable;
  }

  async update(
    id: number,
    dto: UpdateVariableInvestigacionDto,
  ): Promise<VariableInvestigacion> {
    const variable = await this.findOne(id);
    Object.assign(variable, dto);
    return this.variableRepo.save(variable);
  }

  async remove(id: number): Promise<void> {
    const variable = await this.findOne(id);
    await this.variableRepo.remove(variable);
  }
}
