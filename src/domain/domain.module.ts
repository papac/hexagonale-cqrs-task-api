import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import TaskRepository from 'src/infrastructure/db/adapters/task.repository';
import { CreateTaskCommandHandler } from './commands/create-task.command';
import { DeleteTaskCommandHandler } from './commands/delete-task.command';
import { UpdateTaskCommandHandler } from './commands/update-task.command';
import { FetchAllQueryHandler } from './queries/fetch-all.query';
import { FetchOneHandler } from './queries/fetch-one.query';
import { TaskService } from '../app/task.service';
import ITaskRespository from "./ports/task.respository";
import TaskEntity from 'src/infrastructure/db/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

export const CommandHandlers = [
  CreateTaskCommandHandler,
  DeleteTaskCommandHandler,
  UpdateTaskCommandHandler
];

export const EventHandlers = [
  FetchAllQueryHandler,
  FetchOneHandler,
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskService, ...CommandHandlers, ...EventHandlers, {
    provide: ITaskRespository,
    useClass: TaskRepository
  }]
})
export class DomainModule {}
