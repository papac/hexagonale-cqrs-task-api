import { TaskStatus } from "src/domain/ports/task-status-enum";
import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn} from "typeorm";

@Entity()
export default class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({default: "waiting"})
  status: TaskStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}