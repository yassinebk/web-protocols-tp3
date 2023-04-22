import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import {
  MIN_MAX_ERROR,
  NOT_EMPTY_ERROR,
  NOT_STRING_ERROR,
  WRONG_TODO_STATUS_STRING,
} from '../../common/errors';
import { TodoStatusEnum } from '../todo.entity';

export class NewTodoDTO {
  @MinLength(10)
  @IsNotEmpty({ message: NOT_EMPTY_ERROR('name') })
  @IsString({ message: NOT_STRING_ERROR('name') })
  name: string;

  @MinLength(10, { message: MIN_MAX_ERROR(true) })
  @IsNotEmpty({ message: NOT_EMPTY_ERROR('description') })
  @IsString({ message: NOT_STRING_ERROR('description') })
  description: string;

  @IsEnum(TodoStatusEnum, { message: WRONG_TODO_STATUS_STRING('status') })
  status: TodoStatusEnum;
}
