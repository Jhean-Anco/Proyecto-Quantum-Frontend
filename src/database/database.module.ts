import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// Detecta produccion automáticamente en Railway
const isProd = !!process.env.DATABASE_URL;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: () => {
        if (isProd) {
          // 🌐 PRODUCCIÓN (Railway)
          return {
            type: 'postgres',
            url: process.env.DATABASE_URL,
            autoLoadEntities: true,
            synchronize: false,
            ssl: {
              rejectUnauthorized: false,
            },
          };
        }

        // 🖥️ DESARROLLO LOCAL
        return {
          type: 'postgres',
          host: process.env.PGHOST || 'localhost',
          port: parseInt(process.env.PGPORT ?? '5432', 10),
          username: process.env.PGUSER || 'postgres',
          password: process.env.PGPASSWORD || 'admin',
          database: process.env.PGDATABASE || 'GestorTesis',
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
