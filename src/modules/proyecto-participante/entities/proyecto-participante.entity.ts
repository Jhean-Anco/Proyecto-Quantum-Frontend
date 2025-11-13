import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Proyecto } from 'src/modules/proyecto/entities/proyecto.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Cliente } from 'src/modules/cliente/entities/cliente.entity';

@Entity('proyecto_participante')
export class ProyectoParticipante {
  @PrimaryGeneratedColumn()
  id_participante: number;

  @Column()
  id_proyecto: number;

  @Column({ nullable: true })
  id_usuario: number;

  @Column({ nullable: true })
  id_cliente: number;

  @Column({ default: true })
  estado: boolean;

  // Relaciones
  @ManyToOne(() => Proyecto)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToOne(() => Cliente, { nullable: true })
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;
}
