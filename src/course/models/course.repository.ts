import { EntityRepository, Repository } from "typeorm";
import { Course } from "./course.entity";
import { FindCourseResponseDto } from '../models/dto/course.dto';
import { CourseStatus } from '../models/course-status.enum'; 
import { CreateCourseDto } from '../models/dto/course.dto';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {

	// async addNewCourse(createCourseDto: CreateCourseDto): Promise<Course> {
	// 	const { id, name, status } = createCourseDto;
	// 	//create the course and return it. This is how you create a course based on the repository
	// 	//you need to provide an oject with the same properties of the entity 
	// 	const course = this.create({
	// 		id,
	// 		name,
	// 		status: CourseStatus.OPEN
	// 	});
	// 	await this.save(course);
	// 	return course;
	// }

}