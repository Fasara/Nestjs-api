import { Controller, Get, Post} from '@nestjs/common';
import { FilterVideoDto } from '../models/dto/video.dto';
import { VideosService } from '../service/videos.service';

@Controller('videos')
export class VideosController {
    constructor(private readonly videosService: VideosService){}

}