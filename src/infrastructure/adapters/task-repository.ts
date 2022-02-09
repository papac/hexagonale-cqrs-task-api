import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import ITaskRespository from "src/domain/ports/task-respository";
import { TaskStatus } from "src/domain/ports/task-status-enum";
import TaskEntity from "../database/entities/task-entity";
import { Repository } from 'typeorm';

@Injectable()
export default class TaskRepository implements ITaskRespository {
  constructor(@InjectRepository(TaskEntity) readonly repository: Repository<TaskEntity>) {}

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  findAll() {
    return this.repository.find();
  }

  async createTask(title: string, description: string) {
    const task = new TaskEntity;
    task.title = title;
    task.description = description;
    return await this.repository.save(task);
  }

  async deleteTask(id: string) {
    const task = await this.repository.delete(id);
    if (!task) {
      throw new TaskNotFoundException;
    }
    return await this.repository.delete(id);
  }

  async updateTask(id: string, title: string, description: string, status: TaskStatus) {
    const task = await this.repository.findOne(id);
    if (!task) {
      throw new TaskNotFoundException();
    }
    task.title = title;
    task.status = status;
    task.description = description;
    return await this.repository.save(task);
  }
}