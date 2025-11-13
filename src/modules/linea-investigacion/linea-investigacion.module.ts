import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineaInvestigacion } from './entities/linea-investigacion.entity';
import { LineaInvestigacionService } from './linea-investigacion.service';
import { LineaInvestigacionController } from './linea-investigacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LineaInvestigacion])],
  controllers: [LineaInvestigacionController],
  providers: [LineaInvestigacionService],
  exports: [TypeOrmModule],
})
export class LineaInvestigacionModule {}
