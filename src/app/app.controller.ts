import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { TaskService } from '../domain/task.service';
import LoggerService from '../shared/infrastructure/logger.service';
import { TaskDto } from './dtos/task.dto';

@Controller('api/tasks')
export class AppController {
  constructor(private readonly taskService: TaskService, private readonly loggerService: LoggerService) {}

  @Get()
  @ApiOperation({summary: "Get list of task"})
  async getHello() {
    return await this.taskService.fetchAll();
  }

  @Get(":taskId")
  @ApiOperation({summary: "Get one task"})
  async getTask(@Param("taskId") taskId: string) {
    this.loggerService.make(`GET /${taskId}`);
    return await this.taskService.findOne(taskId);
  }

  @Post()
  @ApiOperation({summary: "Create task"})
  async createTaskReqeuest(@Body() taskDto: TaskDto) {
    this.loggerService.make(`POST /`, [taskDto]);
    const { title, description } = taskDto;
    return this.taskService.createTask(title, description);
  }

  @Put(":taskId")
  @ApiOperation({summary: "Update task"})
  async updateTask(@Param("taskId") taskId: string, @Body() body: TaskDto) {
    this.loggerService.make(`PUT /${taskId}`, [body]);
    return this.taskService.updateTask(taskId, body.title, body.description, body.status);
  }

  @Delete(":taskId")
  @ApiOperation({summary: "Delete task"})
  async deleteTask(@Param("taskId") taskId: string) {
    this.loggerService.make(`DELETE /${taskId}`);
    this.taskService.deleteTask(taskId);
    return {message: 'Task was deleted'}
  }
}
