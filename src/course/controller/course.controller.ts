import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

//Services
import { CourseService } from '../service/course.service';

import { CreateCourseDto } from '../models/dto/create-course.dto';
import { UpdateCourseDto } from '../models/dto/update-course.dto';
import { FindCourseResponseDto } from '../models/dto/find-course.dto';
import { Course } from '../models/course.entity';

@Controller('courses')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    // async findAllCourses(): Promise<Course[]> {
    //     return await this.courseService.findAllCourses();
    // }
    

    @Get('/:id')
    getCourseById(@Param('id') id: string): Promise<Course> {
        return this.courseService.getCourseById(id);
    }

    @Post()
    addCourse(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
        return this.courseService.addNewCourse(createCourseDto);
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
