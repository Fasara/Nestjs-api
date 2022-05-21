import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideosRepository } from '../services/videos.repository';
import { CourseRepository  } from '../services/course.repository';
//import { VideosRepository } from 'src/videos/models/videos.repository';

import { VideosService } from '../services/videos.service';

import { CourseController } from '../controllers/course.controller';
import { VideosController } from '../controllers/videos.controller';
import { CourseService } from 'src/services/course.service';




@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository, VideosRepository])],
  controllers: [CourseController, VideosController],
  providers: [CourseService, VideosService]
})
export class CourseModule {}
