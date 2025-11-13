import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('servicio')
export class Servicio {
  @PrimaryGeneratedColumn()
  id_servicio: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  precio_base: number;

  @Column({ type: 'int', default: 0 })
  tiempo_estimado_dias: number;

  @Column({ default: true })
  estado: boolean;
}
