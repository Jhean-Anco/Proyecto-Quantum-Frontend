import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisenoInvestigacion } from './entities/diseno-investigacion.entity';
import { DisenoInvestigacionService } from './diseno-investigacion.service';
import { DisenoInvestigacionController } from './diseno-investigacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DisenoInvestigacion])],
  controllers: [DisenoInvestigacionController],
  providers: [DisenoInvestigacionService],
  exports: [TypeOrmModule],
})
export class DisenoInvestigacionModule {}
