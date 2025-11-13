import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EnfoqueInvestigacion } from 'src/modules/enfoque-investigacion/entities/enfoque-investigacion.entity';
import { TipoInvestigacion } from 'src/modules/tipo-investigacion/entities/tipo-investigacion.entity';
import { NivelInvestigacion } from 'src/modules/nivel-investigacion/entities/nivel-investigacion.entity';
import { DisenoInvestigacion } from 'src/modules/diseno-investigacion/entities/diseno-investigacion.entity';
import { MetodoInvestigacion } from 'src/modules/metodo-investigacion/entities/metodo-investigacion.entity';

@Entity('idea_investigacion')
export class IdeaInvestigacion {
  @PrimaryGeneratedColumn()
  id_idea: number;

  @Column({ length: 255 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'text', nullable: true })
  palabras_clave: string;

  @Column({ nullable: true })
  id_enfoque: number;

  @Column({ nullable: true })
  id_tipo: number;

  @Column({ nullable: true })
  id_nivel: number;

  @Column({ nullable: true })
  id_diseno: number;

  @Column({ nullable: true })
  id_metodo: number;

  @Column({ length: 50, default: 'activo' })
  estado: string;

  // Relaciones
  @ManyToOne(() => EnfoqueInvestigacion)
  @JoinColumn({ name: 'id_enfoque' })
  enfoque: EnfoqueInvestigacion;

  @ManyToOne(() => TipoInvestigacion)
  @JoinColumn({ name: 'id_tipo' })
  tipo: TipoInvestigacion;

  @ManyToOne(() => NivelInvestigacion)
  @JoinColumn({ name: 'id_nivel' })
  nivel: NivelInvestigacion;

  @ManyToOne(() => DisenoInvestigacion)
  @JoinColumn({ name: 'id_diseno' })
  diseno: DisenoInvestigacion;

  @ManyToOne(() => MetodoInvestigacion)
  @JoinColumn({ name: 'id_metodo' })
  metodo: MetodoInvestigacion;
}
