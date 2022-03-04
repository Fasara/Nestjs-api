import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Course } from "./course.entity";


@Entity('article')
export class ArticleEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    url: 'varchar';
}