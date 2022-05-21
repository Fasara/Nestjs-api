import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './modules/course.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //This line will automatically load the .env file from the root of the project
    TypeOrmModule.forRoot(),
    CourseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
