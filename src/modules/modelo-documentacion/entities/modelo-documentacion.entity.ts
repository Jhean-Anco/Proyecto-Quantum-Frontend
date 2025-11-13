import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('modelo_documentacion')
export class ModeloDocumentacion {
  @PrimaryGeneratedColumn()
  id_modelo: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'text', nullable: true })
  url_archivo: string;

  @Column({ default: true })
  estado: boolean;
}
