import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoVariableController } from './proyecto-variable.controller';
import { ProyectoVariableService } from './proyecto-variable.service';
import { ProyectoVariable } from './entities/proyecto-variable.entity';
import { Proyecto } from '../proyecto/entities/proyecto.entity';
import { VariableInvestigacion } from '../variable-investigacion/entities/variable-investigacion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProyectoVariable,
      Proyecto,
      VariableInvestigacion,
    ]),
  ],
  controllers: [ProyectoVariableController],
  providers: [ProyectoVariableService],
  exports: [ProyectoVariableService],
})
export class ProyectoVariableModule {}
