import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import ITaskRespository from "src/domain/ports/task.respository";
import { TaskStatus } from "../ports/status.enum";

export class UpdateTaskCommand {
  constructor(readonly id: string, readonly title: string, readonly description: string, readonly status: TaskStatus) {}
}

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskCommandHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(private readonly repository: ITaskRespository) {}

  async execute(command: UpdateTaskCommand): Promise<any> {
    const { id, title, description, status } = command
    return await this.repository.updateTask(id, title, description, status)
  }
}