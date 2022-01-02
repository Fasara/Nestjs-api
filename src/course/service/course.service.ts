import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from '../models/course.entity';
import { CourseRepository } from '../models/course.repository';

@Injectable()
export class CourseService {

    constructor(
        @InjectRepository(CourseRepository) private courseRepository: CourseRepository
    ) {}

    findAllCourses(): Promise<CourseEntity[]>{
        return this.courseRepository.find();
    }
}


// the service fetch the data and interacts with the controller 