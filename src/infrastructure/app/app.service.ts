import { Injectable } from '@nestjs/common';
import { TaskService } from 'src/domain/services/task.service';

@Injectable()
export class AppService extends TaskService {}