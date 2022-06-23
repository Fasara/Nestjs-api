import { CourseEntity } from "../../courses/models/course.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm";



@Entity('video')
export class VideoEntity {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    url: 'text';

    @ManyToOne(() => CourseEntity, (course: CourseEntity)=> course.videos)
    @JoinColumn({ name: 'course_id' })
    course: CourseEntity;// this defines the property name
}

