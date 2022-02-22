import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ITaskService } from 'src/domain/ports/task.service';
import { CreateTaskCommand } from '../domain/commands/create-task.command';
import { DeleteTaskCommand } from '../domain/commands/delete-task.command';
import { UpdateTaskCommand } from '../domain/commands/update-task.command';
import { TaskStatus } from '../domain/ports/task-status-enum';
import { FetchAllQuery } from '../domain/queries/fetch-all.query';
import { FetchOneQuery } from '../domain/queries/fetch-one.query';

@Injectable()
export class TaskService implements ITaskService {
  constructor(readonly commandBus: CommandBus, readonly queryBus: QueryBus) {}

  createTask(title: string, description: string) {
    return this.commandBus.execute(
      new CreateTaskCommand(title, description)
    );
  }

  updateTask(id: string, title: string, description: string, status?: TaskStatus) {
    return this.commandBus.execute(
      new UpdateTaskCommand(id, title, description, status)
    );
  }

  deleteTask(ids: Array<string>) {
    return this.commandBus.execute(
      new DeleteTaskCommand(ids)
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
