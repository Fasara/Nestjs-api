import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseService } from './service/course.service';
import { CourseController } from './controller/course.controller';
import { CourseRepository  } from './models/course.repository';


@Module({
  providers: [CourseService],
  imports: [TypeOrmModule.forFeature([CourseRepository])],
  controllers: [CourseController]
})
export class CourseModule {}
