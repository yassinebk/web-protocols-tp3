import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TodoEntity from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { GestionnaireCvModule } from './gestionnaire-cv/gestionnaire-cv.module';
import { CV, Skill, User } from './gestionnaire-cv/entities';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [TodoEntity,User,Skill,CV],
      synchronize: true,
      logging: true,
    }),
    TodoModule,
    GestionnaireCvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
