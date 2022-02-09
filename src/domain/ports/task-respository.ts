import { TaskStatus } from "./task-status-enum";

export default abstract class ITaskRespository {
  abstract createTask(title: string, description: string);

  abstract deleteTask(id: string);

  abstract updateTask(id: string, title: string, description: string, status: TaskStatus);

  abstract findOne(id: string);

  abstract findAll();
}