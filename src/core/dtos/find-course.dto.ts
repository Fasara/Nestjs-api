import { IsNotEmpty, IsOptional, } from "class-validator";
export class FindCourseResponseDto {

    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsOptional()
    status?: string;
}