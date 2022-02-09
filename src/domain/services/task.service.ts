import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { TaskStatus } from 'src/infrastructure/database/entities/task-entity';
import CreateTaskCommand from '../commands/create-task-action/create-task-command';
import DeleteTaskCommand from '../commands/delete-task-action/delete-task-command';
import UpdateTaskCommand from '../commands/update-task-action/update-task-command';
import FetchAllQuery from '../queries/fetch-all/fetch-all-query';
import FetchOneQuery from '../queries/fetch-one/fetch-one-query';

@Injectable()
export class TaskService {
  constructor(readonly commandBus: CommandBus, readonly queryBus: QueryBus) {}

  createTask(title: string, description: string) {
    return this.commandBus.execute(
      new CreateTaskCommand(title, description)
    );
  }

  updateTask(id: string, title: string, description: string, status: TaskStatus) {
    return this.commandBus.execute(
      new UpdateTaskCommand(id, title, description, status)
    );
  }

  deleteTask(id: string) {
    return this.commandBus.execute(
      new DeleteTaskCommand(id)
    );
  }

  findOne(id: string) {
    return this.queryBus.execute(
      new FetchOneQuery(id)
    );
  }

  fetchAll() {
    return this.queryBus.execute(
      new FetchAllQuery()
    )
  }
}
