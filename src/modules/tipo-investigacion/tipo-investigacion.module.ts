import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoInvestigacion } from './entities/tipo-investigacion.entity';
import { TipoInvestigacionService } from './tipo-investigacion.service';
import { TipoInvestigacionController } from './tipo-investigacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoInvestigacion])],
  controllers: [TipoInvestigacionController],
  providers: [TipoInvestigacionService],
  exports: [TypeOrmModule],
})
export class TipoInvestigacionModule {}
