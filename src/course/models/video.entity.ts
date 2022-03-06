import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { CourseEntity } from "./course.entity";


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

    @ManyToOne(() => CourseEntity, course => course.name)
    course: CourseEntity;
}
