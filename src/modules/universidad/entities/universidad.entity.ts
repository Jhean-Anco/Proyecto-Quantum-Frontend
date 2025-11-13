import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('universidad')
export class Universidad {
  @PrimaryGeneratedColumn()
  id_universidad: number;

  @Column({ length: 200 })
  nombre: string;

  @Column({ length: 50 })
  siglas: string;

  @Column({ length: 100 })
  pais: string;

  @Column({ length: 100 })
  ciudad: string;

  @Column({ default: true })
  estado: boolean;
}
