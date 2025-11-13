import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Universidad } from 'src/modules/universidad/entities/universidad.entity';
import { Facultad } from 'src/modules/facultad/entities/facultad.entity';

@Entity('facultad_universidad')
export class FacultadUniversidad {
  @PrimaryGeneratedColumn()
  id_fu: number;

  @Column()
  id_universidad: number;

  @Column()
  id_facultad: number;

  @Column({ default: true })
  estado: boolean;

  // Relaciones
  @ManyToOne(() => Universidad)
  @JoinColumn({ name: 'id_universidad' })
  universidad: Universidad;

  @ManyToOne(() => Facultad)
  @JoinColumn({ name: 'id_facultad' })
  facultad: Facultad;
}
