import { IsEnum } from "class-validator";
import { CourseStatus } from "../course-status.enum";
export class UpdateCourseDto {

    name: string;

    @IsEnum(CourseStatus)
    status: CourseStatus;
}