import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import CreateTaskCommandHandler from './commands/create-task-action/create-task-handler';
import DeleteTaskCommandHandler from './commands/delete-task-action/delete-task-handler';
import UpdateTaskCommandHandler from './commands/update-task-action/update-task-handler';
import FetchAllQueryHandler from './queries/fetch-all/fetch-all-handler';
import FetchOneHandler from './queries/fetch-one/fetch-one-handler';
import { TaskService } from './services/task.service';

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
  imports: [CqrsModule],
  providers: [TaskService, ...CommandHandlers, ...EventHandlers]
})
export class DomainModule {}
