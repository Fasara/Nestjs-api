import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FilterVideoDto } from '../core/dtos/video.dto';
import { VideosRepository } from '../services/videos.repository';
import { VideoEntity } from '../core/entities/video.entity';
@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosRepository)
    private readonly videosRepository: VideosRepository,
    ) { }
}
