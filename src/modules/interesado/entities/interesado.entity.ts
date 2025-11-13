import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('interesado')
export class Interesado {
  @PrimaryGeneratedColumn()
  id_interesado: number;

  @Column({ length: 150 })
  nombre: string;

  @Column({ length: 150 })
  correo: string;

  @Column({ length: 20 })
  telefono: string;

  @Column({ length: 100 })
  tipo_interesado: string;

  @Column({ length: 15, nullable: true })
  dni: string;

  @Column({ length: 1, nullable: true })
  genero: string;

  @Column({ length: 100, nullable: true })
  pais: string;

  @Column({ length: 100, nullable: true })
  ciudad: string;
}
