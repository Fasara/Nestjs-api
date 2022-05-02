import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseService } from './service/course.service';
import { CourseController } from './controller/course.controller';
import { CourseRepository  } from './models/course.repository';
import { VideosController } from '../videos/controller/videos.controller';
import { VideosService } from '../videos/service/videos.service';
import { VideosRepository } from 'src/videos/models/videos.repository';
import { CourseEntity } from './models/course.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository, VideosRepository, CourseEntity])],
  controllers: [CourseController, VideosController],
  providers: [CourseService, VideosService]
})
export class CourseModule {}
