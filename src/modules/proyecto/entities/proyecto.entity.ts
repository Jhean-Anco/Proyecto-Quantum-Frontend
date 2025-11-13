import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IdeaInvestigacion } from 'src/modules/idea-investigacion/entities/idea-investigacion.entity';
import { Servicio } from 'src/modules/servicio/entities/servicio.entity';

@Entity('proyecto')
export class Proyecto {
  @PrimaryGeneratedColumn()
  id_proyecto: number;

  @Column({ length: 200 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column()
  id_idea: number;

  @Column()
  id_servicio: number;

  @Column({ type: 'date', nullable: true })
  fecha_inicio: Date;

  @Column({ type: 'date', nullable: true })
  fecha_fin: Date;

  @Column({ length: 50, default: 'EN_PROCESO' })
  estado: string;

  @Column({ length: 50, nullable: true })
  prioridad: string;

  @Column({ type: 'text', nullable: true })
  url_carpeta: string;

  @CreateDateColumn()
  creado_en: Date;

  @UpdateDateColumn()
  actualizado_en: Date;

  // Relaciones
  @ManyToOne(() => IdeaInvestigacion)
  @JoinColumn({ name: 'id_idea' })
  idea: IdeaInvestigacion;

  @ManyToOne(() => Servicio)
  @JoinColumn({ name: 'id_servicio' })
  servicio: Servicio;
}
