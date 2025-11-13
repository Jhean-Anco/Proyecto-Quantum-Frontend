import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_investigacion')
export class TipoInvestigacion {
  @PrimaryGeneratedColumn()
  id_tipo: number;

  @Column({ length: 100 })
  nombre: string;
}
