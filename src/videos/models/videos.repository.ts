import { AddVideoDto, Videos } from "./dto/video.dto";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { VideoEntity } from "./video.entity";

@EntityRepository(VideoEntity)
export class VideosRepository extends Repository<VideoEntity>{

    // async getAllVideos(getVideos: Videos): Promise<VideoEntity> {
    //     const videos = await getRepository(VideoEntity)
    //         .createQueryBuilder()
    //         .getMany();
    // }





    //I want to add a video to my courses with title and url
    // async addVideo(addVideoDto: AddVideoDto){

    // }

}


