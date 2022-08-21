import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FilterVideoDto } from './dtos/video.dto';
import { VideosRepository } from './videos.repository';
@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosRepository)
    private readonly videosRepository: VideosRepository,
    ) { }

    findAllVideos(filterVideos: FilterVideoDto) {
        const myApiKey = process.env.YOUTUBE_API_KEY;
        const baseUrl = process.env.BASE_API_URL;
        //const videos = service.videos()
        const response = `${baseUrl}/videos?key=${myApiKey}&type=video&part=q`;
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
