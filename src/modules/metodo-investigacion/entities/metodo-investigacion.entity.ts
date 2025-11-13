import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('metodo_investigacion')
export class MetodoInvestigacion {
  @PrimaryGeneratedColumn()
  id_metodo: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ default: true })
  estado: boolean;
}
