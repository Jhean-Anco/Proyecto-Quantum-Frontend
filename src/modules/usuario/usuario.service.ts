import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    const nuevo = this.usuarioRepo.create(dto);
    return this.usuarioRepo.save(nuevo);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepo.find({
      relations: ['rol'],
      order: { id_usuario: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepo.findOne({
      where: { id_usuario: id },
      relations: ['rol'],
    });
    if (!usuario)
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    return usuario;
  }

  async update(id: number, dto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);
    Object.assign(usuario, dto);
    return this.usuarioRepo.save(usuario);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id);
    await this.usuarioRepo.remove(usuario);
  }

  async findByCorreo(correo: string): Promise<Usuario | null> {
    return this.usuarioRepo.findOne({ where: { correo }, relations: ['rol'] });
  }
}
