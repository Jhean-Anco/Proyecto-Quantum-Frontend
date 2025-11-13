import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interesado } from './entities/interesado.entity';
import { InteresadoService } from './interesado.service';
import { InteresadoController } from './interesado.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Interesado])],
  controllers: [InteresadoController],
  providers: [InteresadoService],
  exports: [TypeOrmModule],
})
export class InteresadoModule {}
