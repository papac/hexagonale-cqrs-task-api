import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import TaskEntity from "src/infrastructure/db/entities/task.entity";
import ITaskRespository from "src/domain/ports/task.respository";

export class FetchOneQuery {
  constructor(readonly id: string) {}
}

@QueryHandler(FetchOneQuery)
export class FetchOneHandler implements IQueryHandler<FetchOneQuery> {
  constructor(private readonly repository: ITaskRespository) {}

  async execute(query: FetchOneQuery): Promise<TaskEntity> {
    const { id } = query;
    return await this.repository.findOne(id)
  }
}