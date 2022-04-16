import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Videos } from '../models/dto/video.dto';
import { VideosRepository } from '../models/videos.repository';
import { VideoEntity } from '../models/video.entity';
@Injectable()
export  class VideosService {
    constructor(@InjectRepository(VideosRepository)
    private videosRepository: VideosRepository,
    ) { }

    getAllVideos(findVideos: Videos): Promise<VideoEntity[]> {
	    return this.videosRepository.find(findVideos);
	}
}
