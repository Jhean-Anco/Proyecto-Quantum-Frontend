import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloDocumentacion } from './entities/modelo-documentacion.entity';
import { ModeloDocumentacionService } from './modelo-documentacion.service';
import { ModeloDocumentacionController } from './modelo-documentacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ModeloDocumentacion])],
  controllers: [ModeloDocumentacionController],
  providers: [ModeloDocumentacionService],
  exports: [TypeOrmModule],
})
export class ModeloDocumentacionModule {}
