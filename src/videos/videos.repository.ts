import { FilterVideoDto } from "./dtos/video.dto";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { VideoEntity } from "./video.entity";

@EntityRepository(VideoEntity)
export class VideosRepository extends Repository<VideoEntity> {

    // async getAllVideos(filterVideos: FilterVideoDto): Promise<VideoEntity> {

    // }

}


