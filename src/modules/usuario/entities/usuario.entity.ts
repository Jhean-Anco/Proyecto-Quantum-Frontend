import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Rol } from 'src/modules/rol/entities/rol.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ unique: true, length: 150 })
  correo: string;

  @Column({ length: 255 })
  contrasena: string;

  @Column({ length: 20 })
  dni: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column({ type: 'text', nullable: true })
  direccion: string;

  @Column({ default: true })
  estado: boolean;

  @Column()
  id_rol: number;

  @ManyToOne(() => Rol)
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;
}
