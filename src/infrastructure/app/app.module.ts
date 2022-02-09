import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { TaskService } from 'src/domain/services/task.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [AppController],
  providers: [TaskService, AppService],
  imports: [
    CqrsModule,
    DomainModule,
    DatabaseModule,
  ],
})
export class AppModule {}