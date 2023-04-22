import { Module } from '@nestjs/common';
import { GestionnaireCvService } from './gestionnaire-cv.service';
import { GestionnaireCvController } from './gestionnaire-cv.controller';
import { GestionnaireCVSeeder } from './gestionnaire-cv-seeder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Skill,
  CV,
  User
} from "./entities"
import { CvsModule } from './cvs/cv.module';
import { SkillsModule } from './skills/skill.module';

@Module({
  controllers: [GestionnaireCvController],
  providers: [GestionnaireCvService, GestionnaireCVSeeder],
  imports: [
    TypeOrmModule.forFeature([Skill, User, CV]),
    CvsModule,
    SkillsModule
  ]
})
export class GestionnaireCvModule {}
