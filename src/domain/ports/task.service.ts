import { TaskStatus } from "./status.enum";

export interface ITaskService {
  createTask(title: string, description: string);
  updateTask(id: string, title: string, description: string, status?: TaskStatus);
  deleteTask(ids: Array<string>);
  findOne(id: string);
  fetchAll();
}