import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('enfoque_investigacion')
export class EnfoqueInvestigacion {
  @PrimaryGeneratedColumn()
  id_enfoque: number;

  @Column({ length: 150 })
  nombre: string;
}
