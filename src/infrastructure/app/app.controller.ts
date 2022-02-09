import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return await this.appService.fetchAll();
  }

  @Post()
  async createTaskReqeuest(@Req() req) {
    console.log(req.body.title, req.body.description);
    const { title, description } = req.body;
    return this.appService.createTask(title, description);
  }

  @Get(":task_id")
  async getTask(@Param("task_id") taskId: string) {
    console.log("GET /", taskId);
    return await this.appService.findOne(taskId);
  }

  @Put(":task_id")
  async updateTask(@Param("task_id") taskId: string, @Body() body) {
    console.log("PUT /", taskId, body);
    return this.appService.updateTask(taskId, body.title, body.description);
  }
}
