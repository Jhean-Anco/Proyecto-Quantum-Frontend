import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Carrera } from 'src/modules/carrera/entities/carrera.entity';
import { LineaInvestigacion } from 'src/modules/linea-investigacion/entities/linea-investigacion.entity';

@Entity('carrera_linea')
export class CarreraLinea {
  @PrimaryGeneratedColumn()
  id_carrera_linea: number;

  @Column()
  id_carrera: number;

  @Column()
  id_linea: number;

  @Column({ default: true })
  estado: boolean;

  @ManyToOne(() => Carrera)
  @JoinColumn({ name: 'id_carrera' })
  carrera: Carrera;

  @ManyToOne(() => LineaInvestigacion)
  @JoinColumn({ name: 'id_linea' })
  linea: LineaInvestigacion;
}
