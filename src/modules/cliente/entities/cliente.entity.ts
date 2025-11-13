import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Interesado } from 'src/modules/interesado/entities/interesado.entity';
import { CarreraLinea } from 'src/modules/carrera-linea/entities/carrera-linea.entity';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente: number;

  @Column()
  id_interesado: number;

  @Column()
  id_carrera_linea: number;

  @Column({ length: 100 })
  tipo_cliente: string;

  @Column({ length: 100 })
  nivel_academico: string;

  @Column({ default: true })
  estado: boolean;

  // Relaciones
  @ManyToOne(() => Interesado)
  @JoinColumn({ name: 'id_interesado' })
  interesado: Interesado;

  @ManyToOne(() => CarreraLinea)
  @JoinColumn({ name: 'id_carrera_linea' })
  carrera_linea: CarreraLinea;
}
