import { EntityRepository, Repository } from "typeorm";
import { CourseEntity } from "./course.entity";
import { CourseStatus } from './course-status.enum';
import { CreateCourseDto } from './dtos/create-course.dto';

@EntityRepository(CourseEntity)
export class CourseRepository extends Repository<CourseEntity> {

	async createNewCourse(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
		const { name, status } = createCourseDto;
		const course = this.create({
			name,
			status: CourseStatus.OPEN
		});

		await this.save(course);
		return course;
	}

}