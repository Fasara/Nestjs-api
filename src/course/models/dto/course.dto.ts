export class FindCourseResponseDto {
    id: number;
    title: string;
    status: string;
}

export class CreateCourseDto {
    id: number
    title: string;
    status?: string;
}

export class UpdateCourseDto {
    title: string;
    status: string;
}