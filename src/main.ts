import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.enableCors({
    origin: 'https://quantum-proyect.grupo-digital-nextri.com',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  const port = process.env.PORT || 3000; // 👈 PUERTO DINÁMICO
  await app.listen(port, '0.0.0.0'); // 👈 ESCUCHAR GLOBALMENTE

  console.log(`🔥 Backend corriendo en el puerto: ${port}`);
}
bootstrap();
