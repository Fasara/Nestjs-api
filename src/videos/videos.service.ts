import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FilterVideoDto } from './dtos/video.dto';
import { VideosRepository } from './videos.repository';
@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosRepository)
    private readonly videosRepository: VideosRepository,
    ) { }

    findAllVideos() {
        const myApiKey = process.env.YOUTUBE_API_KEY;
        const baseUrl = process.env.BASE_API_URL;
        const response = `${baseUrl}/videos?key=${myApiKey}&type=video&part=q, snippet, thumbnail`;

        console.log(response);
        // const getVideos = get(response);
        // return response.data.items;


        // {
        //     key: myApi,
        //     part: 'snippet',
        //     q: 'Docker'
        // }

    }

    //get videos with query parameters 
    // getVideos(myApi, )
}
