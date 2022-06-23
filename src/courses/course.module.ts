import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseService } from './service/course.service';
import { CourseController } from './controller/course.controller';
import { CourseRepository  } from './models/course.repository';
import { VideosController } from '../videos/controller/videos.controller';
import { VideosService } from '../videos/service/videos.service';
import { VideosRepository } from '../videos/models/videos.repository';


@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository, VideosRepository])],
  controllers: [CourseController, VideosController],
  providers: [CourseService, VideosService]
})
export class CourseModule {}
