import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

const isProd = process.env.NODE_ENV === 'production';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      ...(process.env.DATABASE_URL
        ? {
            // 🌐 Modo Railway / producción
            url: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
          }
        : {
            // 🖥️ Modo local (usa tu .env con DB_HOST, etc.)
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT ?? '5432', 10),
            username: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASS || 'admin',
            database: process.env.DB_NAME || 'GestorTesis',
          }),
      autoLoadEntities: true,
      synchronize: !isProd, // true solo en desarrollo
    }),
  ],
})
export class DatabaseModule {}
