import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import ITaskRespository from "src/domain/ports/task.respository";

export class DeleteTaskCommand {
  constructor(readonly ids: Array<string>) {}
}

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskCommandHandler implements ICommandHandler<DeleteTaskCommand> {
  constructor(private readonly repository: ITaskRespository) {}

  async execute(command: DeleteTaskCommand): Promise<any> {
    const { ids } = command;
    const deleted = this.repository.deleteTask(ids);
    return deleted;
  }
}