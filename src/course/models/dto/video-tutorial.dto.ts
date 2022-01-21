import { IsNotEmpty, IsOptional, } from "class-validator";

export class VideoTutorial {

    title: string;

    @IsNotEmpty()
    url: string;

    @IsOptional()
    tutor: string;

}