import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import ITaskRespository from "src/domain/ports/task-respository";
import { TaskStatus } from "src/domain/ports/task-status-enum";
import TaskNotFoundException from "src/domain/exceptions/task-not-found.excepion";
import TaskEntity from "../entities/task-entity";
import { Repository } from 'typeorm';

@Injectable()
export default class TaskRepository extends ITaskRespository {
  constructor(@InjectRepository(TaskEntity) readonly repository: Repository<TaskEntity>) {
    super();
  }

  async findAll(): Promise<TaskEntity[]> {
    return await this.repository.find({order: {createdAt: "DESC"}});
  }

  async findOne(id: string): Promise<TaskEntity> {
    const task = await this.repository.findOne(id);
    if (!task) {
      throw new TaskNotFoundException(`The task ${id} was not found`);
    }
    return task;
  }

  async createTask(title: string, description: string): Promise<TaskEntity> {
    const task = new TaskEntity;
    task.title = title;
    task.description = description;
    task.status = TaskStatus.waiting;
    return await this.repository.save(task);
  }

  async updateTask(id: string, title: string, description: string, status?: TaskStatus): Promise<TaskEntity> {
    const task = await this.repository.findOne(id);
    if (!task) {
      throw new TaskNotFoundException(`Task id ${id} was not found`);
    }
    task.title = title;
    task.description = description;
    if (status) {
      task.status = status;
    }
    return await this.repository.save(task);
  }

  async deleteTask(ids: Array<string>): Promise<string[]> {
    await this.repository.createQueryBuilder('t').whereInIds(ids).delete().execute();
    return ids;
  }
}