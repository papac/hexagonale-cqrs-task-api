import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import TaskEntity from 'src/infrastructure/db/entities/task.entity';
import ITaskRespository from 'src/domain/ports/task.respository';

export class CreateTaskCommand {
	constructor(readonly title: string, readonly description: string) {}
}

@CommandHandler(CreateTaskCommand)
export class CreateTaskCommandHandler
	implements ICommandHandler<CreateTaskCommand>
{
	constructor(private readonly repository: ITaskRespository) {}

	async execute(command: CreateTaskCommand): Promise<TaskEntity> {
		const { title, description } = command;
		return await this.repository.createTask(title, description);
	}
}
