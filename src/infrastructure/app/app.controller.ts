import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import LoggerService from '../tools/logger.service';
import { AppService } from './app.service';

@Controller('api/tasks')
export class AppController {
  constructor(private readonly appService: AppService, private readonly loggerService: LoggerService) {}

  @Get()
  async getHello() {
    return await this.appService.fetchAll();
  }

  @Post()
  async createTaskReqeuest(@Req() req) {
    this.loggerService.make(`POST /`, req.body);
    const { title, description } = req.body;
    return this.appService.createTask(title, description);
  }

  @Get(":task_id")
  async getTask(@Param("task_id") taskId: string) {
    this.loggerService.make(`GET /${taskId}`);
    return await this.appService.findOne(taskId);
  }

  @Put(":task_id")
  async updateTask(@Param("task_id") taskId: string, @Body() body) {
    this.loggerService.make(`PUT /${taskId}`, body);
    return this.appService.updateTask(taskId, body.title, body.description);
  }

  @Delete(":task_id")
  async deleteTask(@Param("task_id") taskId: string) {
    this.loggerService.make(`DELETE /${taskId}`);
    this.appService.deleteTask(taskId);
    return {message: 'Task was deleted'}
  }
}
