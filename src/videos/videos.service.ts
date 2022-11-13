import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { VideosRepository } from './videos.repository';
import { VideoEntity } from './video.entity';
import { FilterVideoDto } from './dtos/video.dto';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(VideosRepository)
    private readonly videosRepository: VideosRepository,
  ) {}

  getVideos(): Promise<VideoEntity[]> {
    return this.videosRepository.find();
  }

  getVideoById(id: number): Promise<VideoEntity> {
    return this.videosRepository.findOne({
      where: { id },
    });
  }

  async addNewVideo(filterVideoDto: FilterVideoDto): Promise<VideoEntity> {
    return await this.videosRepository.save(filterVideoDto);
  }

  async deleteVideo(id: number): Promise<void> {
    await this.videosRepository.delete(id);
  }
}
