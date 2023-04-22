import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { AuthenticatedRequest } from 'src/middlewares/auth.middleware';

import { CountTodosDto } from './dto/count-todo.dto';
import { FilterTodoPaginatedDto } from './dto/filter-todo.dto';
import { NewTodoDTO } from './dto/new-todo.dto';
import { UpdatedTodoDto } from './dto/updated-todo.dto';
import { TodoService } from './todo.service';

@Controller({
  version: '1',
  path: 'todo',
})
export class TodoControllerV1 {
  constructor(private todosService: TodoService) { }

  @Get()
  getTodos(@Query() filterTodoDto: FilterTodoPaginatedDto) {
    return this.todosService.findAll(filterTodoDto);
  }

  @Post()
  addTodo(
    @Body() newTodoBody: NewTodoDTO,
    @Req() request: AuthenticatedRequest,
  ) {
    if (!newTodoBody.name || !newTodoBody.description) {
      throw new HttpException('Bad request', 400);
    }

    return this.todosService.create(newTodoBody, request.userId);
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Delete(':id')
  deleteTodo(
    @Query('soft') soft: string,
    @Param('id') id: string,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.todosService.deleteTodo(id, soft !== undefined, request.userId);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() todoUpdatedData: UpdatedTodoDto,

    @Req() request: AuthenticatedRequest,
  ) {
    return this.todosService.updateTodo(id, todoUpdatedData, request.userId);
  }

  @Patch(':id')
  restoreTodo(@Param('id') id: string) {
    return this.todosService.restoreTodo(id);
  }

  @Get('count/:state')
  countTodos(@Param('state') countTodosDto: CountTodosDto) {
    return this.todosService.countType(countTodosDto.state);
  }
}
