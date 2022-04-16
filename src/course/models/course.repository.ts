import { EntityRepository, Repository } from "typeorm";
import { CourseEntity } from "./course.entity";
import { CourseStatus } from '../models/course-status.enum'; 
import { CreateCourseDto } from '../models/dto/create-course.dto';

@EntityRepository(CourseEntity)
export class CourseRepository extends Repository<CourseEntity> {

	async createNewCourse(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
		const { id, name, status } = createCourseDto;
		//create the course and return it. This is how you create a course based on the repository
		//you need to provide an object with the same properties of the entity 
		const course = this.create({
			id,
			name,
			status: CourseStatus.OPEN
		});
		
		await this.save(course);
		return course;
	}

}