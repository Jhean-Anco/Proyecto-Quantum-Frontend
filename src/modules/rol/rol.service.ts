import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './entities/rol.entity';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepo: Repository<Rol>,
  ) {}

  async create(dto: CreateRolDto): Promise<Rol> {
    const nuevo = this.rolRepo.create(dto);
    return this.rolRepo.save(nuevo);
  }

  async findAll(): Promise<Rol[]> {
    return this.rolRepo.find({
      order: { id_rol: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Rol> {
    const rol = await this.rolRepo.findOneBy({ id_rol: id });
    if (!rol) throw new NotFoundException(`Rol ${id} no encontrado`);
    return rol;
  }

  async update(id: number, dto: UpdateRolDto): Promise<Rol> {
    const rol = await this.findOne(id);
    Object.assign(rol, dto);
    return this.rolRepo.save(rol);
  }

  async remove(id: number): Promise<void> {
    const rol = await this.findOne(id);
    await this.rolRepo.remove(rol);
  }
}
