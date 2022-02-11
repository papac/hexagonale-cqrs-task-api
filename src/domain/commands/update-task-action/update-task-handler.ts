import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import TaskEntity from "src/db/entities/task-entity";
import { InjectRepository } from "@nestjs/typeorm";
import UpdateTaskCommand from "./update-task-command";
import ITaskRespository from "src/domain/ports/task-respository";

@CommandHandler(UpdateTaskCommand)
export default class UpdateTaskCommandHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(private readonly repository: ITaskRespository) {}

  async execute(command: UpdateTaskCommand): Promise<any> {
    const { id, title, description, status } = command
    return await this.repository.updateTask(id, title, description, status)
  }
}