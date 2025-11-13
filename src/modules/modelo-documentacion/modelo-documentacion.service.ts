import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModeloDocumentacion } from './entities/modelo-documentacion.entity';
import { CreateModeloDocumentacionDto } from './dto/create-modelo-documentacion.dto';
import { UpdateModeloDocumentacionDto } from './dto/update-modelo-documentacion.dto';

@Injectable()
export class ModeloDocumentacionService {
  constructor(
    @InjectRepository(ModeloDocumentacion)
    private readonly modeloRepo: Repository<ModeloDocumentacion>,
  ) {}

  async create(
    dto: CreateModeloDocumentacionDto,
  ): Promise<ModeloDocumentacion> {
    const nuevo = this.modeloRepo.create(dto);
    return this.modeloRepo.save(nuevo);
  }

  async findAll(): Promise<ModeloDocumentacion[]> {
    return this.modeloRepo.find({ order: { id_modelo: 'DESC' } });
  }

  async findOne(id: number): Promise<ModeloDocumentacion> {
    const modelo = await this.modeloRepo.findOne({ where: { id_modelo: id } });
    if (!modelo)
      throw new NotFoundException(
        `Modelo de documentación ${id} no encontrado`,
      );
    return modelo;
  }

  async update(
    id: number,
    dto: UpdateModeloDocumentacionDto,
  ): Promise<ModeloDocumentacion> {
    const modelo = await this.findOne(id);
    Object.assign(modelo, dto);
    return this.modeloRepo.save(modelo);
  }

  async remove(id: number): Promise<void> {
    const modelo = await this.findOne(id);
    await this.modeloRepo.remove(modelo);
  }
}
