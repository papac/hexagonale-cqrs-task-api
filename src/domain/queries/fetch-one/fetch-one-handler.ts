import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import TaskEntity from "src/db/entities/task-entity";
import FetchOneQuery from "./fetch-one-query";
import ITaskRespository from "src/domain/ports/task-respository";

@QueryHandler(FetchOneQuery)
export default class FetchOneHandler implements IQueryHandler<FetchOneQuery> {
  constructor(private readonly repository: ITaskRespository) {}

  async execute(query: FetchOneQuery): Promise<TaskEntity> {
    const { id } = query;
    return await this.repository.findOne(id)
  }
}