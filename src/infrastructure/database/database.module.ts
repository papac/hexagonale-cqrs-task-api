import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import TaskEntity from './entities/task-entity';
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

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([TaskEntity])],
})
export class DatabaseModule {}
