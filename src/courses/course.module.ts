import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseRepository } from './course.repository';
import { VideosModule } from '../videos/videos.module';


@Module({
  imports: [VideosModule, TypeOrmModule.forFeature([CourseRepository,])],
  controllers: [CourseController,],
  providers: [CourseService,]
})
export class CourseModule { }
