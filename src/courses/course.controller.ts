import { Controller, Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';

import { CourseService } from './course.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { FindCourseResponseDto } from './dtos/find-course.dto';
import { CourseEntity } from './course.entity';
import { CourseRepository } from './course.repository';

@Controller('courses')
export class CourseController {
    constructor(
        private readonly courseService: CourseService,
        private readonly courseRepository: CourseRepository
    ) { }

    @Get()
    getAllCourses(findCourseResponseDto: FindCourseResponseDto): Promise<CourseEntity[]> {
        return this.courseService.getAllCourses(findCourseResponseDto);
    }


    @Get('/:id')
    getCourseById(
        @Param('id') id: number): Promise<CourseEntity> {
        return this.courseService.getCourseById(id);
    }

    @Post()
    addCourse(@Body() createCourseDto: CreateCourseDto): Promise<CourseEntity> {
        return this.courseRepository.createNewCourse(createCourseDto);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: number): Promise<void> {
        return this.courseService.deleteCourse(id);
    }

    @Patch('/:id/status')
    updateCourse(
        @Param('id') id: number,
        @Body() updateCourseDto: UpdateCourseDto
    ): Promise<CourseEntity> {
        const { status } = updateCourseDto;
        return this.courseService.updateCourse(id, status);
    }
}



