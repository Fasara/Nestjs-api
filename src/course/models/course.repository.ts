import { EntityRepository, Repository } from "typeorm";
import { CourseEntity } from "./course.entity";
import { CourseStatus } from '../models/course-status.enum'; 
import { CreateCourseDto } from './dto/course.dto';

@EntityRepository(CourseEntity)
export class CourseRepository extends Repository<CourseEntity> {}