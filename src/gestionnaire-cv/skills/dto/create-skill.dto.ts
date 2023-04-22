import { IsNotEmpty } from 'class-validator';
import { CV } from '../../entities/cv.entity';

export class CreateSkillDto {
    @IsNotEmpty()
    designation: string;

    cvs: CV[];
}
