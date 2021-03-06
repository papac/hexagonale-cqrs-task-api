import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from 'src/domain/ports/status.enum';

export class TaskDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	description: string;

	@IsString()
	@IsOptional()
	status?: TaskStatus.completed;
}
