import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificacionProyecto } from './entities/notificacion-proyecto.entity';
import { ProyectoParticipante } from 'src/modules/proyecto-participante/entities/proyecto-participante.entity';
import { NotificacionProyectoService } from './notificacion-proyecto.service';
import { NotificacionProyectoController } from './notificacion-proyecto.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([NotificacionProyecto, ProyectoParticipante]),
  ],
  controllers: [NotificacionProyectoController],
  providers: [NotificacionProyectoService],
  exports: [TypeOrmModule],
})
export class NotificacionProyectoModule {}
