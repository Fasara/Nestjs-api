import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { VideosRepository } from './videos.repository';
import { VideoEntity } from './video.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosRepository)
    private readonly videosRepository: VideosRepository,
    ) { }


}

