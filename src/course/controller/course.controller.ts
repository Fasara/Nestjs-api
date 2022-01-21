import { Controller, Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';

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
    getAllCourses(findCourseResponseDto: FindCourseResponseDto): Promise<Course[]> {
        return this.courseService.getAllCourses(findCourseResponseDto);
    }
    

    @Get('/:id')
    getCourseById(@Param('id') id: number): Promise<Course> {
        return this.courseService.getCourseById(id);
    }

    @Post()
    addCourse(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
        return this.courseService.createNewCourse(createCourseDto);
    }

    @Delete('/:id')
    deleteCourse(@Param('id') id: number): Promise<void> {
        return this.courseService.deleteCourse(id);
    }

    // @Patch('/:id/status')
    // updateCourse(
    //     @Param('id') id: number, 
    //     @Body() updateCourseDto: UpdateCourseDto): Promise<Course> {
    //         const { status } = updateCourseDto;
    //         return this.courseService.updateCourse(id, status);
    // }
}

// Get all courses - done
// Delete course - done
// Create course - done
// Get coure by ID - done

