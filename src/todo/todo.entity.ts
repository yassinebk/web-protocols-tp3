import EntityWithDates from '../common/entity-with-dates.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';
export enum TodoStatusEnum {
  'actif' = 'En cours',
  'waiting' = 'En attente',
  'done' = 'Finalise',
}

@Entity()
export class TodoEntity extends EntityWithDates {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ enum: TodoStatusEnum, default: TodoStatusEnum.waiting })
  public state: TodoStatusEnum;

  @Column({ nullable: true })
  public userId: string;
}

export default TodoEntity;
