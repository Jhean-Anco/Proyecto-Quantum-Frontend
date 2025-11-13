import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Proyecto } from 'src/modules/proyecto/entities/proyecto.entity';

@Entity('archivo_proyecto')
export class ArchivoProyecto {
  @PrimaryGeneratedColumn()
  id_archivo: number;

  @Column()
  id_proyecto: number;

  @Column({ length: 200 })
  nombre_archivo: string;

  @Column({ length: 100 })
  tipo_archivo: string;

  @Column({ type: 'text' })
  url_drive: string;

  @Column({ length: 255 })
  drive_file_id: string;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_subida: Date;

  @Column({ length: 50 })
  estado: string;

  // Relaciones
  @ManyToOne(() => Proyecto)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;
}
