import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Videos } from '../models/dto/video.dto';

@Injectable()
export  class VideosService {
    //constructor(){}
    private readonly videos: Videos[] = [
        {
            id: 1,
            name: 'videoOne'
        },
        {
            id: 2,
            name: 'videoTwo'
        },
        {
            id: 3,
            name: 'videoThree'
        }
    ];

    getAllVideos(): Videos[]{
        return this.videos;
    }
}