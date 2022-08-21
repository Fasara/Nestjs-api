import { Controller, Get, Post } from '@nestjs/common';
import { FilterVideoDto } from './dtos/video.dto';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
    constructor(private readonly videosService: VideosService) { }

}