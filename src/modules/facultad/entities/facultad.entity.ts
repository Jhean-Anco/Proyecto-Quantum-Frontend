import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('facultad')
export class Facultad {
  @PrimaryGeneratedColumn()
  id_facultad: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ default: true })
  estado: boolean;
}
