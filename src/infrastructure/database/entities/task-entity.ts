import { TaskStatus } from "src/domain/ports/task-status-enum";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class TaskEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}