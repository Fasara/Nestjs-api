import { Controller, Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';

//Services
import { CourseService } from './course.service';

import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { FindCourseResponseDto } from './dtos/find-course.dto';
import { CourseEntity } from './course.entity';

@Controller('courses')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @Get()
    getAllCourses(findCourseResponseDto: FindCourseResponseDto): Promise<CourseEntity[]> {
        return this.courseService.getAllCourses(findCourseResponseDto);
    }


    @Get('/:id')
    getCourseById(@Param('id') id: string): Promise<CourseEntity> {
        return this.courseService.getCourseById(id);
    }

    @Post()
    addCourse(@Body() createCourseDto: CreateCourseDto): Promise<CourseEntity> {
        return this.courseService.createNewCourse(createCourseDto);
    }

    @Delete('/:id')
    deleteCourse(@Param('id') id: string): Promise<void> {
        return this.courseService.deleteCourse(id);
    }

    @Patch('/:id/status')
    updateCourse(
        @Param('id') id: string,
        @Body() updateCourseDto: UpdateCourseDto): Promise<CourseEntity> {
        const { status } = updateCourseDto;
        return this.courseService.updateCourse(id, status);
    }
}

// Update course id and status - not working, it gives me 404
// To-do => if create course has the same title throw an error

