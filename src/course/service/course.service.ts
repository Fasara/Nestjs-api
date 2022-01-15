import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../models/course.entity';
import { CourseRepository } from '../models/course.repository';
import { FindCourseResponseDto } from '../models/dto/course.dto';
import { CreateCourseDto } from '../models/dto/course.dto';
import { CourseStatus } from '../models/course-status.enum';


@Injectable()
export class CourseService {

	constructor(
		@InjectRepository(CourseRepository) private courseRepository: CourseRepository
	) { }

	// findAllCourses(): Promise<Course[]> {
	//     return this.courseRepository.find(FindCourseResponseDto);
	// }

	addCourse(createCourseDto: CreateCourseDto): Promise<Course> {
		return this.courseRepository.addCourse(createCourseDto);
	}
}


// the service fetch the data and interacts with the controller 