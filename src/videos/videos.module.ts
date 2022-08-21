import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideosController } from '../videos/controller/videos.controller';
import { VideosService } from '../videos/service/videos.service';

@Module({
    controllers: [VideosController],
    providers: [VideosService]
})

export class VideosModule { }