import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';
import { CourseRepository } from './course.repository';
import { FindCourseResponseDto } from './dtos/find-course.dto';
import { CreateCourseDto } from './dtos/create-course.dto';
import { CourseStatus } from './course-status.enum';


@Injectable()
export class CourseService {

	constructor(
		@InjectRepository(CourseRepository)
		private courseRepository: CourseRepository,
	) { }


	getAllCourses(findCourseResponseDto: FindCourseResponseDto): Promise<CourseEntity[]> {
		return this.courseRepository.find(findCourseResponseDto);
	}

	async getCourseById(id: number): Promise<CourseEntity> {
		const courseId = await this.courseRepository.findOne(id);

		if (!courseId) {
			throw new NotFoundException(`Course with ID "${id}" not found`);
		}

		return courseId;
	}

	// createNewCourse(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
	// 	return this.courseRepository.createNewCourse(createCourseDto);
	// }

	async deleteCourse(id: number): Promise<void> {
		const result = await this.courseRepository.delete(id);
		if (result.affected === 0) {
			throw new NotFoundException(`Task with ID ${id} not found`);
		}
	}

	async updateCourse(id: number, status: CourseStatus): Promise<CourseEntity> {
		const course = await this.getCourseById(id);

		course.status = status;
		await this.courseRepository.save(course);


		return course;

	}

}