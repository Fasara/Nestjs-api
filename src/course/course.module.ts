import { Module } from '@nestjs/common';
import { CourseService } from './service/course.service';
import { CourseController } from './controller/course.controller';

@Module({
  providers: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}
