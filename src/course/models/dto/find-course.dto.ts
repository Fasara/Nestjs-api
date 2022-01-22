import { IsNotEmpty, IsOptional, } from "class-validator";
export class FindCourseResponseDto {

    id: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsOptional()
    status?: string;
}