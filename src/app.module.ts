import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VariableInvestigacionModule } from './modules/variable-investigacion/variable-investigacion.module';
import { IdeaInvestigacionModule } from './modules/idea-investigacion/idea-investigacion.module';
import { InteresadoModule } from './modules/interesado/interesado.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { LineaInvestigacionModule } from './modules/linea-investigacion/linea-investigacion.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { RolModule } from './modules/rol/rol.module';
import { DatabaseModule } from './database/database.module';
import { ServicioModule } from './modules/servicio/servicio.module';
import { UniversidadModule } from './modules/universidad/universidad.module';
import { FacultadModule } from './modules/facultad/facultad.module';
import { FacultadUniversidadModule } from './modules/facultad-universidad/facultad-universidad.module';
import { CarreraModule } from './modules/carrera/carrera.module';
import { CarreraLineaModule } from './modules/carrera-linea/carrera-linea.module';
import { EnfoqueInvestigacionModule } from './modules/enfoque-investigacion/enfoque-investigacion.module';
import { TipoInvestigacionModule } from './modules/tipo-investigacion/tipo-investigacion.module';
import { NivelInvestigacionModule } from './modules/nivel-investigacion/nivel-investigacion.module';
import { DisenoInvestigacionModule } from './modules/diseno-investigacion/diseno-investigacion.module';
import { MetodoInvestigacionModule } from './modules/metodo-investigacion/metodo-investigacion.module';
import { ProyectoModule } from './modules/proyecto/proyecto.module';
import { ProyectoParticipanteModule } from './modules/proyecto-participante/proyecto-participante.module';
import { ArchivoProyectoModule } from './modules/archivo-proyecto/archivo-proyecto.module';
import { NotificacionProyectoModule } from './modules/notificacion-proyecto/notificacion-proyecto.module';
import { ModeloDocumentacionModule } from './modules/modelo-documentacion/modelo-documentacion.module';
import { ProyectoModeloModule } from './modules/proyecto-modelo/proyecto-modelo.module';
import { ProyectoVariableModule } from './modules/proyecto-variable/proyecto-variable.module';

@Module({
  imports: [
    DatabaseModule,
    RolModule,
    UsuarioModule,
    LineaInvestigacionModule,
    ServicioModule,
    IdeaInvestigacionModule,
    VariableInvestigacionModule,
    ClienteModule,
    InteresadoModule,
    UniversidadModule,
    FacultadModule,
    FacultadUniversidadModule,
    CarreraModule,
    CarreraLineaModule,
    EnfoqueInvestigacionModule,
    TipoInvestigacionModule,
    NivelInvestigacionModule,
    DisenoInvestigacionModule,
    MetodoInvestigacionModule,
    ProyectoModule,
    ProyectoParticipanteModule,
    ArchivoProyectoModule,
    NotificacionProyectoModule,
    ModeloDocumentacionModule,
    ProyectoModeloModule,
    ProyectoVariableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
