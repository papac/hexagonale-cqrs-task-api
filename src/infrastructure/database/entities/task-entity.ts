import { TaskStatus } from "src/domain/ports/task-status-enum";
import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}