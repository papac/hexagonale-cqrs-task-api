import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TYPEORM_DATABASE_CONFIGURATION: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'task_user',
  password: 'password',
  database: "task_database",
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  subscribers: [],
  migrationsTableName: 'migrations',
  cli: {
    migrationsDir: 'migration',
    subscribersDir: 'subscriber',
  },
  synchronize: true,
};
