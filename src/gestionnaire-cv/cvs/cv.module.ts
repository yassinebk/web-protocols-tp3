import { Module } from '@nestjs/common';
import { CvsService } from './cv.service';
import { CvsController } from './cv.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CV } from '../entities';

@Module({
  controllers: [CvsController],
  providers: [CvsService],
  imports: [
      TypeOrmModule.forFeature([CV]),
  ],
})
export class CvsModule {}