import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificacionProyecto } from './entities/notificacion-proyecto.entity';
import { CreateNotificacionProyectoDto } from './dto/create-notificacion-proyecto.dto';
import { UpdateNotificacionProyectoDto } from './dto/update-notificacion-proyecto.dto';

@Injectable()
export class NotificacionProyectoService {
  constructor(
    @InjectRepository(NotificacionProyecto)
    private readonly notificacionRepo: Repository<NotificacionProyecto>,
  ) {}

  async create(
    dto: CreateNotificacionProyectoDto,
  ): Promise<NotificacionProyecto> {
    const nueva = this.notificacionRepo.create(dto);
    return this.notificacionRepo.save(nueva);
  }

  async findAll(): Promise<NotificacionProyecto[]> {
    return this.notificacionRepo.find({
      order: { fecha_envio: 'DESC' },
      relations: ['participante'],
    });
  }

  async findOne(id: number): Promise<NotificacionProyecto> {
    const noti = await this.notificacionRepo.findOne({
      where: { id_notificacion: id },
      relations: ['participante'],
    });
    if (!noti) throw new NotFoundException(`Notificación ${id} no encontrada`);
    return noti;
  }

  async update(
    id: number,
    dto: UpdateNotificacionProyectoDto,
  ): Promise<NotificacionProyecto> {
    const noti = await this.findOne(id);
    Object.assign(noti, dto);
    return this.notificacionRepo.save(noti);
  }

  async remove(id: number): Promise<void> {
    const noti = await this.findOne(id);
    await this.notificacionRepo.remove(noti);
  }

  async findByParticipante(
    id_participante: number,
  ): Promise<NotificacionProyecto[]> {
    return this.notificacionRepo.find({
      where: { id_participante },
      order: { fecha_envio: 'DESC' },
    });
  }
}
