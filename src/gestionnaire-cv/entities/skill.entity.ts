import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CV } from './cv.entity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  designation: string;

  @ManyToMany((_) => CV, (cv) => cv.skills)
  cvs: CV[];
}
