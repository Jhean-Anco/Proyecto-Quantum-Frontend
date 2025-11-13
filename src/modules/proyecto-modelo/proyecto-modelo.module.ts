import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoModelo } from './entities/proyecto-modelo.entity';
import { Proyecto } from 'src/modules/proyecto/entities/proyecto.entity';
import { ModeloDocumentacion } from 'src/modules/modelo-documentacion/entities/modelo-documentacion.entity';
import { ProyectoModeloService } from './proyecto-modelo.service';
import { ProyectoModeloController } from './proyecto-modelo.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProyectoModelo, Proyecto, ModeloDocumentacion]),
  ],
  controllers: [ProyectoModeloController],
  providers: [ProyectoModeloService],
  exports: [TypeOrmModule],
})
export class ProyectoModeloModule {}
