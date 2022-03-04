import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Course } from "./course.entity";


@Entity('video')
export class VideoEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    url: 'varchar';
}