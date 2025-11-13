import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { IdeaInvestigacion } from 'src/modules/idea-investigacion/entities/idea-investigacion.entity';
import { Servicio } from 'src/modules/servicio/entities/servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto, IdeaInvestigacion, Servicio])],
  controllers: [ProyectoController],
  providers: [ProyectoService],
  exports: [TypeOrmModule],
})
export class ProyectoModule {}
