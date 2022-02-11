import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import TaskRepository from 'src/db/adapters/task-repository';
import CreateTaskCommandHandler from './commands/create-task-action/create-task-handler';
import DeleteTaskCommandHandler from './commands/delete-task-action/delete-task-handler';
import UpdateTaskCommandHandler from './commands/update-task-action/update-task-handler';
import FetchAllQueryHandler from './queries/fetch-all/fetch-all-handler';
import FetchOneHandler from './queries/fetch-one/fetch-one-handler';
import { TaskService } from './task.service';
import ITaskRespository from "./ports/task-respository";
import TaskEntity from 'src/db/entities/task-entity';
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
