import { IsNotEmpty, IsOptional } from 'class-validator';
export class FindCourseResponseDto {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  status?: string;
}
