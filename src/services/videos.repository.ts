import { FilterVideoDto } from "../core/dtos/video.dto";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { VideoEntity } from "../core/entities/video.entity";

@EntityRepository(VideoEntity)
export class VideosRepository extends Repository<VideoEntity> {

    // async getAllVideos(filterAllVideos: FilterVideoDto): Promise<VideoEntity> {
    //     const videos = await this.find(filterAllVideos);
    //     return videos;
    // }

}


