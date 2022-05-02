import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from '../models/course.entity';
import { CourseRepository } from '../models/course.repository';
import { CreateCourseDto, UpdateCourseDto, FindCourseResponseDto } from '../models/dto/course.dto';
import { CourseStatus } from '../models/course-status.enum';

@Injectable()
export class CourseService {

	constructor(
		@InjectRepository(CourseRepository)
		private courseRepository: CourseRepository,
	) { }

	getAllCourses() {
	    return this.courseRepository.find();
	}
	
	async getCourseById(id: string): Promise<CourseEntity> {
		const courseId = await this.courseRepository.findOne(id);

		if(!courseId) {
			throw new NotFoundException(`Task with ID "${id}" not found`);
		}
	
		return courseId;
	}


	async createNewCourse(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
		const { id, name, status } = createCourseDto;
		const course = this.courseRepository.create({
			id,
			name,
			status: CourseStatus.OPEN
		});
		
		return await this.courseRepository.save(course);
	
	}

	async deleteCourse(id: string): Promise<void> {
		const result = await this.courseRepository.delete(id);
		if(result.affected === 0) {
			throw new NotFoundException(`Task with ID ${id} not found`);
		}
	}

	// async updateCourse(updateCourseDto: UpdateCourseDto): Promise<CourseEntity> {
	// 	const course = await this.courseRepository.;

	// 	if(!course) {
	// 		throw new NotFoundException(`Course id not found`)
	// 	}

	// 	return this.courseRepository.save(course);
		
	// }

	async updateCourse(updateCourseDto: UpdateCourseDto): Promise<CourseEntity> {
		const course = await this.getCourseById(updateCourseDto.id);
	

		course.status = status;
		await this.courseRepository.save(course);
		
		return course;
		
	}

}