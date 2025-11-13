import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoInvestigacion } from './entities/metodo-investigacion.entity';
import { MetodoInvestigacionService } from './metodo-investigacion.service';
import { MetodoInvestigacionController } from './metodo-investigacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoInvestigacion])],
  controllers: [MetodoInvestigacionController],
  providers: [MetodoInvestigacionService],
  exports: [TypeOrmModule],
})
export class MetodoInvestigacionModule {}
