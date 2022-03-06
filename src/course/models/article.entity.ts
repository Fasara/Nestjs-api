import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
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
}