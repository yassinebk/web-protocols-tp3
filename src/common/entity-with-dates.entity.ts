import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

class EntityWithDates {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn({ update: false })
  creationDate: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

export default EntityWithDates;
