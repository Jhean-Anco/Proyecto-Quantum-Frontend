import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Interesado } from 'src/modules/interesado/entities/interesado.entity';
import { CarreraLinea } from 'src/modules/carrera-linea/entities/carrera-linea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Interesado, CarreraLinea])],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [TypeOrmModule],
})
export class ClienteModule {}
