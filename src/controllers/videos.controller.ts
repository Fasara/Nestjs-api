import { Controller, Get, Post} from '@nestjs/common';
import { FilterVideoDto } from '../core/dtos/video.dto';
import { VideosService } from '../services/videos.service';

@Controller('videos')
export class VideosController {
    constructor(private readonly videosService: VideosService){}

}