import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseService } from './service/course.service';
import { CourseController } from './controller/course.controller';
import { CourseRepository  } from './models/course.repository';
import { VideosController } from 'src/videos/controller/videos.controller';
import { VideosService } from 'src/videos/service/videos.service';


@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository])],
  controllers: [CourseController, VideosController],
  providers: [CourseService, VideosService]
})
export class CourseModule {}
