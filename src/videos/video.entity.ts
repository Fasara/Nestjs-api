import { CourseEntity } from "../courses/course.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";



@Entity('video')
export class VideoEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    url_id: string;

    @ManyToOne(() => CourseEntity, (course: CourseEntity) => course.videos)
    @JoinColumn({ name: 'course_id' })
    course: CourseEntity;// this defines the property name
}

