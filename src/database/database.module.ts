import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

const isProd = process.env.NODE_ENV === 'production';

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
          host: process.env.DB_HOST || 'localhost',
          port: parseInt(process.env.DB_PORT ?? '5432', 10),
          username: process.env.DB_USER || 'postgres',
          password: process.env.DB_PASS || 'admin',
          database: process.env.DB_NAME || 'GestorTesis',
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
