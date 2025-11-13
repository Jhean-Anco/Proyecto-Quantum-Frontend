import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('diseno_investigacion')
export class DisenoInvestigacion {
  @PrimaryGeneratedColumn()
  id_diseno: number;

  @Column({ length: 150 })
  nombre: string;
}
