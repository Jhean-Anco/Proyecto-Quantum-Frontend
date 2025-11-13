import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarreraLinea } from './entities/carrera-linea.entity';
import { CreateCarreraLineaDto } from './dto/create-carrera-linea.dto';
import { UpdateCarreraLineaDto } from './dto/update-carrera-linea.dto';

@Injectable()
export class CarreraLineaService {
  constructor(
    @InjectRepository(CarreraLinea)
    private readonly carreraLineaRepo: Repository<CarreraLinea>,
  ) {}

  async create(dto: CreateCarreraLineaDto): Promise<CarreraLinea> {
    const nueva = this.carreraLineaRepo.create(dto);
    return this.carreraLineaRepo.save(nueva);
  }

  async findAll(): Promise<CarreraLinea[]> {
    return this.carreraLineaRepo.find({
      relations: ['carrera', 'linea'],
    });
  }

  async findOne(id: number): Promise<CarreraLinea> {
    const registro = await this.carreraLineaRepo.findOne({
      where: { id_carrera_linea: id },
      relations: ['carrera', 'linea'],
    });
    if (!registro)
      throw new NotFoundException(`Relación carrera–línea ${id} no encontrada`);
    return registro;
  }

  async update(id: number, dto: UpdateCarreraLineaDto): Promise<CarreraLinea> {
    const registro = await this.findOne(id);
    Object.assign(registro, dto);
    return this.carreraLineaRepo.save(registro);
  }

  async remove(id: number): Promise<void> {
    const registro = await this.findOne(id);
    await this.carreraLineaRepo.remove(registro);
  }

  async findByCarrera(id_carrera: number): Promise<CarreraLinea[]> {
    return this.carreraLineaRepo.find({
      where: { id_carrera },
      relations: ['carrera', 'linea'],
    });
  }
}
