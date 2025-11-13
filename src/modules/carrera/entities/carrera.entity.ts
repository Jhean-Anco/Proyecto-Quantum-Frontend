import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { FacultadUniversidad } from 'src/modules/facultad-universidad/entities/facultad-universidad.entity';

@Entity('carrera')
export class Carrera {
  @PrimaryGeneratedColumn()
  id_carrera: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ length: 50 })
  nivel: string;

  @Column()
  id_fu: number;

  @Column({ default: true })
  estado: boolean;

  @ManyToOne(() => FacultadUniversidad)
  @JoinColumn({ name: 'id_fu' })
  facultad_universidad: FacultadUniversidad;
}
