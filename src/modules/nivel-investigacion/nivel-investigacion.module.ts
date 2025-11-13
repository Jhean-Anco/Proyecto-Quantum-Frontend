import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelInvestigacion } from './entities/nivel-investigacion.entity';
import { NivelInvestigacionService } from './nivel-investigacion.service';
import { NivelInvestigacionController } from './nivel-investigacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NivelInvestigacion])],
  controllers: [NivelInvestigacionController],
  providers: [NivelInvestigacionService],
  exports: [TypeOrmModule],
})
export class NivelInvestigacionModule {}
