import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import ITaskRespository from "src/domain/ports/task.respository";

export class FetchAllQuery {
  constructor() {}
}

@QueryHandler(FetchAllQuery)
export class FetchAllQueryHandler implements IQueryHandler<FetchAllQuery> {
  constructor(private readonly repository: ITaskRespository) {}

  execute(query: FetchAllQuery): Promise<any> {
    return this.repository.findAll();
  }
}