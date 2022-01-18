import { IsNotEmpty, IsOptional, } from "class-validator";
export class FindCourseResponseDto {

    id: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsOptional()
    status?: string;
}