import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ProyectoParticipante } from 'src/modules/proyecto-participante/entities/proyecto-participante.entity';

@Entity('notificacion_proyecto')
export class NotificacionProyecto {
  @PrimaryGeneratedColumn()
  id_notificacion: number;

  @Column()
  id_participante: number;

  @Column({ length: 150 })
  titulo: string;

  @Column({ type: 'text' })
  mensaje: string;

  @Column({ length: 50, nullable: true })
  tipo: string;

  @Column({ length: 50, nullable: true })
  prioridad: string;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_envio: Date;

  @ManyToOne(() => ProyectoParticipante)
  @JoinColumn({ name: 'id_participante' })
  participante: ProyectoParticipante;
}
