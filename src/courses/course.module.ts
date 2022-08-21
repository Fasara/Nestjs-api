import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseService } from './service/course.service';
import { CourseController } from './controller/course.controller';
import { CourseRepository } from './models/course.repository';
import { VideosModule } from 'src/videos/videos.module';


@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository, VideosModule])],
  controllers: [CourseController,],
  providers: [CourseService,]
})
export class CourseModule { }
