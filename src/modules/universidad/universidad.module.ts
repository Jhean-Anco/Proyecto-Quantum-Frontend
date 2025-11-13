import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Universidad } from './entities/universidad.entity';
import { UniversidadService } from './universidad.service';
import { UniversidadController } from './universidad.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Universidad])],
  controllers: [UniversidadController],
  providers: [UniversidadService],
  exports: [TypeOrmModule],
})
export class UniversidadModule {}
