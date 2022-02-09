import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import TaskEntity from "src/infrastructure/database/entities/task-entity";
import CreateTaskCommand from "./create-task-command";
import ITaskRespository from "src/domain/ports/task-respository";

@CommandHandler(CreateTaskCommand)
export default class CreateTaskCommandHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly repository: ITaskRespository) {}

  async execute(command: CreateTaskCommand): Promise<TaskEntity> {
    const { title, description } = command;
    return await this.repository.createTask(title, description);
  }
}