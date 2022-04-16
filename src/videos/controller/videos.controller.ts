import { Controller, Get, Post} from '@nestjs/common';
import { VideosService } from '../service/videos.service';

@Controller('videos')
export class VideosController {
    constructor(private readonly videosService: VideosService){}

    @Get()
    getVideos(){
        return this.videosService.getAllVideos();
    }
    
}