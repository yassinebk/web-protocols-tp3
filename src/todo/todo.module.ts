import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoControllerV2 } from './todo-v2.controller';
import { TodoControllerV1 } from './todo-v1.controller';
import { TodoService } from './todo.service';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import TodoEntity from './todo.entity';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [TodoControllerV2, TodoControllerV1],
  imports: [TypeOrmModule.forFeature([TodoEntity]), CommonModule, ConfigModule],
  providers: [TodoService],
})
export class TodoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(TodoControllerV2);
  }
}
