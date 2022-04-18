import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FilterVideoDto } from '../models/dto/video.dto';
import { VideosRepository } from '../models/videos.repository';
import { VideoEntity } from '../models/video.entity';
@Injectable()
export  class VideosService {
    constructor(@InjectRepository(VideosRepository)
    private readonly videosRepository: VideosRepository,
    ) { }
}
