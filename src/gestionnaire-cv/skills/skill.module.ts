import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from '../entities/skill.entity';
import { SkillsController } from './skill.controller';
import { SkillsService } from './skill.service';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService],
  imports: [
    TypeOrmModule.forFeature([Skill]),
  ]
})
export class SkillsModule {}
