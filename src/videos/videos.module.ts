import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { VideoEntity } from './video.entity';
import { VideosRepository } from './videos.repository';

@Module({
    imports: [TypeOrmModule.forFeature([VideoEntity, VideosRepository])],
    controllers: [VideosController],
    providers: [VideosService],

})

export class VideosModule { }