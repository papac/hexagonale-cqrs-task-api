import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TYPEORM_DATABASE_CONFIGURATION: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'task_user',
  password: 'password',
  database: "task_database",
  entities: [__dirname + '/entities/*-entity.{ts,js}'],
  subscribers: [],
  migrationsTableName: 'migrations',
  synchronize: true,
};

@Module({
  imports: [CqrsModule, TypeOrmModule.forRoot(TYPEORM_DATABASE_CONFIGURATION)],
})
export class DatabaseModule {}
