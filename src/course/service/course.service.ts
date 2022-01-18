import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../models/course.entity';
import { CourseRepository } from '../models/course.repository';
import { FindCourseResponseDto } from '../models/dto/find-course.dto';
import { CreateCourseDto } from '../models/dto/create-course.dto';
import { CourseStatus } from '../models/course-status.enum';


@Injectable()
export class CourseService {

	constructor(
		@InjectRepository(CourseRepository) private courseRepository: CourseRepository
	) { }


	async getCourseById(id: number): Promise<Course> {
		const courseId = await this.courseRepository.findOne(id);

		if(!courseId) {
			throw new NotFoundException(`Task with ID "${id}" not found`);
		}
	
		return courseId;
	}

	addNewCourse(createCourseDto: CreateCourseDto): Promise<Course> {
		return this.courseRepository.addNewCourse(createCourseDto);
	}

	// findAllCourses(): Promise<Course[]> {
	//     return this.courseRepository.find(FindCourseResponseDto);
	// }

}