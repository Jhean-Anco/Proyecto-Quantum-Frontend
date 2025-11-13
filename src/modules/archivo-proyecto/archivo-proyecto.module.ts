import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchivoProyecto } from './entities/archivo-proyecto.entity';
import { ArchivoProyectoService } from './archivo-proyecto.service';
import { ArchivoProyectoController } from './archivo-proyecto.controller';
import { Proyecto } from '../proyecto/entities/proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArchivoProyecto, Proyecto])],
  controllers: [ArchivoProyectoController],
  providers: [ArchivoProyectoService],
  exports: [TypeOrmModule],
})
export class ArchivoProyectoModule {}
