import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraLinea } from './entities/carrera-linea.entity';
import { CarreraLineaService } from './carrera-linea.service';
import { CarreraLineaController } from './carrera-linea.controller';
import { Carrera } from 'src/modules/carrera/entities/carrera.entity';
import { LineaInvestigacion } from 'src/modules/linea-investigacion/entities/linea-investigacion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarreraLinea, Carrera, LineaInvestigacion]),
  ],
  controllers: [CarreraLineaController],
  providers: [CarreraLineaService],
  exports: [TypeOrmModule],
})
export class CarreraLineaModule {}
