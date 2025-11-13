import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,
  ) {}

  async create(dto: CreateClienteDto): Promise<Cliente> {
    const nuevo = this.clienteRepo.create(dto);
    return this.clienteRepo.save(nuevo);
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepo.find({
      relations: ['interesado', 'carrera_linea'],
    });
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepo.findOne({
      where: { id_cliente: id },
      relations: ['interesado', 'carrera_linea'],
    });
    if (!cliente) throw new NotFoundException(`Cliente ${id} no encontrado`);
    return cliente;
  }

  async update(id: number, dto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.findOne(id);
    Object.assign(cliente, dto);
    return this.clienteRepo.save(cliente);
  }

  async remove(id: number): Promise<void> {
    const cliente = await this.findOne(id);
    await this.clienteRepo.remove(cliente);
  }

  async findByInteresado(id_interesado: number): Promise<Cliente[]> {
    return this.clienteRepo.find({
      where: { id_interesado },
      relations: ['interesado', 'carrera_linea'],
    });
  }
}
