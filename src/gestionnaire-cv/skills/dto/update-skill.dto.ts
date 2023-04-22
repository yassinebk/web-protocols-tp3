import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillDto } from './create-skill.dto';
import { CV } from '../../entities/cv.entity';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
    cvs: CV[];
}