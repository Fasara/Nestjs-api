import { Controller, Get, Param, Post } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideoEntity } from './video.entity';

@Controller('videos')
export class VideosController {
    constructor(private readonly videosService: VideosService) { }



}