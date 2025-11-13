import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VariableInvestigacion } from './entities/variable-investigacion.entity';
import { VariableInvestigacionService } from './variable-investigacion.service';
import { VariableInvestigacionController } from './variable-investigacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VariableInvestigacion])],
  controllers: [VariableInvestigacionController],
  providers: [VariableInvestigacionService],
  exports: [TypeOrmModule],
})
export class VariableInvestigacionModule {}
