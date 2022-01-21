import { IsNotEmpty, IsOptional, } from "class-validator";

export class ArticleTutorial {

    title: string;

    @IsNotEmpty()
    url: string;

    @IsOptional()
    author: string;
}