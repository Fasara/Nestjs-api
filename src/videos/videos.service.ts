import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FilterVideoDto } from './dtos/video.dto';
import { VideosRepository } from './videos.repository';

@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosRepository)
    private readonly videosRepository: VideosRepository,
    ) { }

    youtubeApiKey: string = process.env.YOUTUBE_API_KEY;
    getVideos() {


        console.log(this.youtubeApiKey)
        // the q parameter specifies the query term to search for 
        // {
        //     key: myApi,
        //     part: 'snippet',
        //     q: 'Docker'
        // }

    }

    //get videos with query parameters 
    // getVideos(myApi, )
}
