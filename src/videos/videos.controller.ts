import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideoEntity } from './video.entity';
import { FilterVideoDto } from './dtos/video.dto';

@Controller('videos')
export class VideosController {
    constructor(private readonly videosService: VideosService) {
    }

    @Get()
    getVideos() {
        return this.videosService.getVideos();
    }

    @Get(':id')
    getVideoById(@Param('id') id: number): Promise<VideoEntity> {
        return this.videosService.getVideoById(id);
    }

    @Post()
    addNewVideo(@Body() filterVideoDto: FilterVideoDto) {
        return this.videosService.addNewVideo(filterVideoDto);
    }

    @Delete(':id')
    deleteVideo(@Param() id: number): Promise<void> {
        return this.videosService.deleteVideo(id)
    }



}