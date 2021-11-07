import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './course/course.module';
import { CourseEntity } from './course/models/course.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'fabidatabase',
      entities: [CourseEntity],
      synchronize: true, //you shoudn't use in production or you might lose data
    }),
    CourseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
