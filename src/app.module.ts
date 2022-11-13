import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppDataSource } from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/course.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //This line will automatically load the .env file from the root of the project
    TypeOrmModule.forRoot(AppDataSource.options),
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
