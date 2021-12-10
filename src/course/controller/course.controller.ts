import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('courses')
export class CourseController {
    @Get()
    getCourses(){
        return "All courses"
        //extract the actual courses
    }

    @Get('/:courseId')
    getCourseById( @Param('courseId') courseId : number
    ) {
        console.log(courseId);
        return `Get course with Id of ${courseId}`
    }

    @Post()
    addCourse(
        @Body() body
    ) {
        console.log(body)
        return "Add new course"
    }

    @Put('/:courseId')
    updateCourses(){
        return "Update courses by id"
        //add body
    }
}

// TO-DO: get courses funciton => retrieve data from the database
