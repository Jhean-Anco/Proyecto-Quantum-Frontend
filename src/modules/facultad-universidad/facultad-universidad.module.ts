import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultadUniversidad } from './entities/facultad-universidad.entity';
import { FacultadUniversidadService } from './facultad-universidad.service';
import { FacultadUniversidadController } from './facultad-universidad.controller';
import { Facultad } from 'src/modules/facultad/entities/facultad.entity';
import { Universidad } from 'src/modules/universidad/entities/universidad.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FacultadUniversidad, Facultad, Universidad]),
  ],
  controllers: [FacultadUniversidadController],
  providers: [FacultadUniversidadService],
  exports: [TypeOrmModule],
})
export class FacultadUniversidadModule {}
