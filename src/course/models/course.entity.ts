import { ValidationTypes } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { VideoEntity } from "./video.entity";

@Entity('course')
export class CourseEntity {

	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	status: string;

	@OneToMany(() => VideoEntity, video => video.name)
	videos: VideoEntity[];
	//we define the type first (VideoEntity) and what does it map to on the other table
}