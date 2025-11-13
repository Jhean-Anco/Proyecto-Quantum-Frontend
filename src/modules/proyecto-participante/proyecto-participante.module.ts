import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoParticipante } from './entities/proyecto-participante.entity';
import { Proyecto } from 'src/modules/proyecto/entities/proyecto.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Cliente } from 'src/modules/cliente/entities/cliente.entity';
import { ProyectoParticipanteService } from './proyecto-participante.service';
import { ProyectoParticipanteController } from './proyecto-participante.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProyectoParticipante,
      Proyecto,
      Usuario,
      Cliente,
    ]),
  ],
  controllers: [ProyectoParticipanteController],
  providers: [ProyectoParticipanteService],
  exports: [TypeOrmModule],
})
export class ProyectoParticipanteModule {}
