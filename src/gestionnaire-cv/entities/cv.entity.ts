import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Skill } from './skill.entity';
import { User } from './user.entity';

@Entity()
export class CV {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  firstname: string;

  @Column()
  age: number;

  @Column()
  cin: string;

  @Column()
  job: string;

  @Column()
  path: string;

  @ManyToMany((_) => Skill, skill => skill.cvs, { nullable: true, eager: true })
  @JoinTable()
  skills: Skill[];

  @ManyToOne((_) => User, (user) => user.cvs)
  user: User;
}
