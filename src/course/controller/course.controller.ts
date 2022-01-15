import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

//Services
import { CourseService } from '../service/course.service';

import { CreateCourseDto, UpdateCourseDto, FindCourseResponseDto } from '../models/dto/course.dto';
import { Course } from '../models/course.entity';

@Controller('courses')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    // async findAllCourses(): Promise<Course[]> {
    //     return await this.courseService.findAllCourses();
    // }
    

    @Get('/:courseId ')
    getCourseById( @Param('courseId') courseId : number
    ) {
        console.log(courseId);
        return `Get course with Id of ${courseId}`
    }

    @Post()
    addCourse(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
        return this.courseService.addCourse(createCourseDto);
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
