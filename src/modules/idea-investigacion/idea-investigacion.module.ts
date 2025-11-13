import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaInvestigacion } from './entities/idea-investigacion.entity';
import { IdeaInvestigacionService } from './idea-investigacion.service';
import { IdeaInvestigacionController } from './idea-investigacion.controller';
import { EnfoqueInvestigacion } from 'src/modules/enfoque-investigacion/entities/enfoque-investigacion.entity';
import { TipoInvestigacion } from 'src/modules/tipo-investigacion/entities/tipo-investigacion.entity';
import { NivelInvestigacion } from 'src/modules/nivel-investigacion/entities/nivel-investigacion.entity';
import { DisenoInvestigacion } from 'src/modules/diseno-investigacion/entities/diseno-investigacion.entity';
import { MetodoInvestigacion } from 'src/modules/metodo-investigacion/entities/metodo-investigacion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      IdeaInvestigacion,
      EnfoqueInvestigacion,
      TipoInvestigacion,
      NivelInvestigacion,
      DisenoInvestigacion,
      MetodoInvestigacion,
    ]),
  ],
  controllers: [IdeaInvestigacionController],
  providers: [IdeaInvestigacionService],
  exports: [TypeOrmModule],
})
export class IdeaInvestigacionModule {}
