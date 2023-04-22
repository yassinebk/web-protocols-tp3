import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import {
  MIN_MAX_ERROR,
  NOT_STRING_ERROR,
  WRONG_TODO_STATUS_STRING,
} from '../../common/errors';
import { TodoStatusEnum } from '../todo.entity';

export class UpdatedTodoDto {
  @IsOptional()
  @MinLength(10, { message: MIN_MAX_ERROR(true) })
  @IsString({ message: NOT_STRING_ERROR('name') })
  name: string;

  @IsOptional()
  @MinLength(10, { message: MIN_MAX_ERROR(true) })
  @IsString({ message: NOT_STRING_ERROR('name') })
  description: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum, { message: WRONG_TODO_STATUS_STRING('status') })
  status: TodoStatusEnum;
}
