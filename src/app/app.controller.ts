import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import UpdateTaskSchema from '../shared/swagger/update.schema';
import CreateTaskSchema from '../shared/swagger/create.schema';
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
  @ApiBody({
    schema: {
      properties: CreateTaskSchema,
    },
  })
  @ApiOperation({summary: "Create task"})
  async createTaskReqeuest(@Body() taskDto: TaskDto) {
    this.loggerService.make(`POST /`, [taskDto]);
    const { title, description } = taskDto;
    return this.taskService.createTask(title, description);
  }

  @Put(":taskId")
  @ApiBody({
    schema: {
      properties: UpdateTaskSchema,
    },
  })
  @ApiOperation({summary: "Update task"})
  async updateTask(@Param("taskId") taskId: string, @Body() body: TaskDto) {
    this.loggerService.make(`PUT /${taskId}`, [body]);
    return this.taskService.updateTask(taskId, body.title, body.description, body.status);
  }

  @Delete("/delete")
  @ApiOperation({summary: "Delete task"})
  async deleteTask(@Query("ids") ids: string[]) {
    this.loggerService.make(`DELETE /${JSON.stringify(ids)}`);
    this.taskService.deleteTask(ids);
    return {message: 'Task was deleted'}
  }
}
