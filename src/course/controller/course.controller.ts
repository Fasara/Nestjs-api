import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto, FindCourseResponseDto } from '../models/dto/course.dto';
import { CourseService } from '../service/course.service';
import { CourseEntity } from '../models/course.entity';
@Controller('courses')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    async findAllCourses(): Promise<CourseEntity[]> {
        return await this.courseService.findAllCourses();
    }
    

    @Get('/:courseId ')
    getCourseById( @Param('courseId') courseId : number
    ) {
        console.log(courseId);
        return `Get course with Id of ${courseId}`
    }

    @Post()
    addCourse(
        @Body() body: CreateCourseDto 
    ) {
        console.log(body)
        return "Add new course"
    }

    @Put('/:courseId')
    updateCourses(
        @Body() body: UpdateCourseDto
    ){
        return "Update courses by id"
        //add body
    }
}

// TO-DO: get courses funciton => retrieve data from the database
