import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('linea_investigacion')
export class LineaInvestigacion {
  @PrimaryGeneratedColumn()
  id_linea: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'text', nullable: true })
  objetivo: string;

  @Column({ default: true })
  estado: boolean;
}
