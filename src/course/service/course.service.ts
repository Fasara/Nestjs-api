import { Injectable, NotFoundException } from '@nestjs/common';
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

	async getCourseById(id: string): Promise<Course> {
		const courseId = await this.courseRepository.findOne(id);

		if(!id) {
			throw new NotFoundException(`Task with ID "${id}" not found`);
		}
	
		return courseId;
	}


	/*
	1. We create the object based on the repository
	2. Then the repositry will hand;e the operation of saving it in the database
	 */
	async addNewCourse(createCourseDto: CreateCourseDto): Promise<Course> {
		const { id, title, status } = createCourseDto;
		const course = this.courseRepository.create({
			id,
			title,
			status: CourseStatus.OPEN,
		});

		await this.courseRepository.save(course);
		return course;
	}
}


// the service fetch the data and interacts with the controller 