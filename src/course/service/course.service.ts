import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseRepository } from '../models/course.repository';

@Injectable()
export class CourseService {

    constructor(
        @InjectRepository(CourseRepository) private courseRepository: CourseRepository
    ) {}
}


// the servie fetcth the data and interacts with the controller 