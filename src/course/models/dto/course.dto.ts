import { IsEnum } from "class-validator";
import { CourseStatus } from "../course-status.enum";
import { IsNotEmpty, IsOptional, } from "class-validator";

export class CreateCourseDto {
    id: string;
    name: string;
    status?: string;
}

export class UpdateCourseDto {

    id?: string;

    @IsEnum(CourseStatus)
    status?: CourseStatus;
}

export class FindCourseResponseDto {

    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsOptional()
    status?: string;
}

