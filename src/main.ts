import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  // ✅ Habilitar CORS correctamente
  app.enableCors({
    origin: 'http://localhost:4200', // o ['http://localhost:4200'] si prefieres lista
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], // 👈 muy importante para POST JSON
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Servidor NestJS corriendo en http://localhost:${port}`);
}
bootstrap();
