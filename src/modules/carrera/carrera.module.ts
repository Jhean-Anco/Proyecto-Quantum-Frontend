import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';
import { FacultadUniversidad } from 'src/modules/facultad-universidad/entities/facultad-universidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrera, FacultadUniversidad])],
  controllers: [CarreraController],
  providers: [CarreraService],
  exports: [TypeOrmModule],
})
export class CarreraModule {}
