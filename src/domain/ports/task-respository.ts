import { TaskStatus } from "./task-status-enum";

export default interface ITaskRespository {
  createTask(title: string, description: string);

  deleteTask(id: string);

  updateTask(id: string, title: string, description: string, status: TaskStatus);

  findOne(id: string);

  findAll();
}