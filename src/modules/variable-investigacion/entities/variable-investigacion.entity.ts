import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('variable_investigacion')
export class VariableInvestigacion {
  @PrimaryGeneratedColumn()
  id_variable: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'text', nullable: true })
  definicion_operacional: string;

  @Column({ length: 50, nullable: true })
  unidad_medida: string;
}
