import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnfoqueInvestigacion } from './entities/enfoque-investigacion.entity';
import { EnfoqueInvestigacionService } from './enfoque-investigacion.service';
import { EnfoqueInvestigacionController } from './enfoque-investigacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EnfoqueInvestigacion])],
  controllers: [EnfoqueInvestigacionController],
  providers: [EnfoqueInvestigacionService],
  exports: [TypeOrmModule],
})
export class EnfoqueInvestigacionModule {}
