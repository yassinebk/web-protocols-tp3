import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CV } from './entities/cv.entity';
import { Skill } from './entities/skill.entity';
import { User } from './entities/user.entity';

import {
  randEmail,
  randFirstName,
  randJobTitle,
  randJobType,
  randLastName,
  randNumber,
  randPassword,
  randSkill,
  randUserName,
} from '@ngneat/falso';

@Injectable()
export class GestionnaireCVSeeder {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,

    @InjectRepository(CV)
    private cvRepository: Repository<CV>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async seedDatabase(seedNumber: number): Promise<User[]> {
    console.log("heeere")
    const skills = await Promise.all(this.createSkills(200));

    const cvsNumber = randNumber({ min: 0, max: seedNumber });
    const users = [];
    for (let i = 0; i < seedNumber; i++) {
      users.push(
        (async () => {
        const cvs = await Promise.all(this.createCVs(cvsNumber, skills));
        return this.createUser(cvs)
        })()
      )
    }
    return Promise.all(users);
  }

  createSkills(numberToGenerate: number): Array<Promise<Skill>> {
    const skillsArray = [];
    for (let i = 0; i < numberToGenerate; i++)
      skillsArray.push(
        this.skillRepository.create({
          designation: randSkill(),
        }),
      );
    return skillsArray.map((x) => this.skillRepository.save(x));
  }

  createCVs(seedNumber: number, skills: Skill[]): Array<Promise<CV>> {
    const cvSkills = this.randSkills(skills)
    console.log(cvSkills)
    let cvsArray = [];
    for (let i = 0; i < seedNumber; i++) {
      cvsArray.push(
        this.cvRepository.create({
          age: randNumber({ min: 18, max: 60 }),
          cin: this.randCin(),
          firstname: randFirstName(),
          name: randLastName(),
          job: randJobTitle(),
          path: randJobType(),
          skills: cvSkills,
        }),
      );
    }

    return cvsArray.map((c) => this.cvRepository.save(c));
  }

  async createUser(cvs: CV[]): Promise<User> {

    const user = this.userRepository.create({
      email: randEmail(),
      password: randPassword(),
      username: randUserName(),
      cvs,
    });

    return this.userRepository.save(user);
  }

  randCin() {
    let cin = '';
    for (let i = 0; i < 8; i++)
      cin += randNumber({ min: 0, max: 9 }).toString();
    return cin;
  }

  randSkills(skills: Skill[]) {
    let skillsNumber = randNumber({ max: skills.length, min: 0 });
    let skillsToAdd = [];
    let addedSkillsId = [];

    for (let i = 0; i < skillsNumber; i++) {
      const skillId = randNumber({ min: 0, max: skills.length - 1 });
      if (addedSkillsId.includes(skillId)) continue;

      skillsToAdd.push(skills[skillId]);
      addedSkillsId.push(skillId)
    }

    return skillsToAdd;
  }
}
