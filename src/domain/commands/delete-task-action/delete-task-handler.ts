import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import ITaskRespository from "src/domain/ports/task-respository";
import DeleteTaskCommand from "./delete-task-command";

@CommandHandler(DeleteTaskCommand)
export default class DeleteTaskCommandHandler implements ICommandHandler<DeleteTaskCommand> {
  constructor(private readonly repository: ITaskRespository) {}

  async execute(command: DeleteTaskCommand): Promise<any> {
    const { ids } = command;
    const deleted = this.repository.deleteTask(ids);
    return deleted;
  }
} 