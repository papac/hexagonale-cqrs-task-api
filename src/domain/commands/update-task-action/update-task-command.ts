import { TaskStatus } from "src/domain/ports/task-status-enum";

export default class UpdateTaskCommand {
  constructor(readonly id: string, readonly title: string, readonly description: string, readonly status: TaskStatus) {}
}