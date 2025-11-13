import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('nivel_investigacion')
export class NivelInvestigacion {
  @PrimaryGeneratedColumn()
  id_nivel: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ default: true })
  estado: boolean;
}
