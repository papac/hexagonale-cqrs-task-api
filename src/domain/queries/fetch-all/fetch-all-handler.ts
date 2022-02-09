import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import ITaskRespository from "src/domain/ports/task-respository";
import FetchAllQuery from "./fetch-all-query";

@QueryHandler(FetchAllQuery)
export default class FetchAllQueryHandler implements IQueryHandler<FetchAllQuery> {
  constructor(private readonly repository: ITaskRespository) {}

  execute(query: FetchAllQuery): Promise<any> {
    return this.repository.findAll();
  }
}