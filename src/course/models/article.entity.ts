import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { CourseEntity } from "./course.entity";


@Entity('article')
export class ArticleEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    url: 'text';

    @ManyToOne(() => CourseEntity, (course: CourseEntity)=> course.articles)
    @JoinColumn({ name: 'course_id'})
    course: CourseEntity;
}