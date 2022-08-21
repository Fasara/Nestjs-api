import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideosController } from '../videos/controller/videos.controller';
import { VideosService } from '../videos/service/videos.service';
import { VideosRepository } from './models/videos.repository';

@Module({
    controllers: [VideosController],
    providers: [VideosService]
})

export class VideosModule { }