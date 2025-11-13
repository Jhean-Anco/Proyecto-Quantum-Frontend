import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Proyecto } from 'src/modules/proyecto/entities/proyecto.entity';
import { VariableInvestigacion } from 'src/modules/variable-investigacion/entities/variable-investigacion.entity';

@Entity('proyecto_variable')
export class ProyectoVariable {
  @PrimaryGeneratedColumn()
  id_proyecto_variable: number;

  @Column()
  id_variable: number;

  @Column()
  id_proyecto: number;

  @Column({ length: 100 })
  tipo_relacion: string;

  // Relaciones
  @ManyToOne(() => VariableInvestigacion, (variable) => variable.id_variable)
  @JoinColumn({ name: 'id_variable' })
  variable: VariableInvestigacion;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.id_proyecto)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;
}
