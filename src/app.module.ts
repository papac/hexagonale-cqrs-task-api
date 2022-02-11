import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { AppController } from './app/app.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TaskService } from './domain/task.service';
import { DatabaseModule } from './db/db.module';
import LoggerService from './shared/infrastructure/logger.service';

@Module({
  controllers: [AppController],
  providers: [TaskService, LoggerService],
  imports: [
    CqrsModule,
    DomainModule,
    DatabaseModule,
  ],
})
export class AppModule {}