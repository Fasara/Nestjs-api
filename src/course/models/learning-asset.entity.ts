import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Course } from "./course.entity";

@Entity()
export class LearningAsset {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    video: string;

    @Column()
    article: string;

    @OneToMany(() => Course, course => course.title) //we define what does it map to on the other table
    title: Course[];

}