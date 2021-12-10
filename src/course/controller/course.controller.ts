import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto, FindCourseResponseDto } from '../dto/course.dto';
@Controller('courses')
export class CourseController {
    @Get()
    getCourses(): FindCourseResponseDto[] {
        return "All courses"
        //extract the actual courses
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
