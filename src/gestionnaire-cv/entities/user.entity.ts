import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CV } from './cv.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany((_) => CV, (cv) => cv.user)
  cvs: CV[];
}
