import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Proyecto } from 'src/modules/proyecto/entities/proyecto.entity';
import { ModeloDocumentacion } from 'src/modules/modelo-documentacion/entities/modelo-documentacion.entity';

@Entity('proyecto_modelo')
export class ProyectoModelo {
  @PrimaryGeneratedColumn()
  id_proyecto_modelo: number;

  @Column()
  id_proyecto: number;

  @Column()
  id_modelo: number;

  @Column({ type: 'text', nullable: true })
  url_archivo_subido: string;

  @Column({ length: 20, nullable: true })
  version: string;

  @Column({ length: 50, default: 'PENDIENTE' })
  estado: string;

  @CreateDateColumn({ type: 'timestamp' })
  fecha_entrega: Date;

  @Column({ type: 'text', nullable: true })
  comentario_revision: string;

  // Relaciones
  @ManyToOne(() => Proyecto)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @ManyToOne(() => ModeloDocumentacion)
  @JoinColumn({ name: 'id_modelo' })
  modelo: ModeloDocumentacion;
}
