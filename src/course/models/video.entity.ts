import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { CourseEntity } from "./course.entity";


@Entity('video')
export class VideoEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => CourseEntity, (course: CourseEntity) => course.name)
    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    url: 'text';
}
