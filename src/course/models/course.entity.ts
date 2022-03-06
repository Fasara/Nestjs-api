import { ValidationTypes } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { VideoEntity } from "./video.entity";

@Entity('courses')
export class CourseEntity {

	@PrimaryGeneratedColumn()
	id: string;

	@OneToMany(() => VideoEntity, video => video.name)
	videos: VideoEntity[];

	@Column()
	name: string;

	@Column()
	status: string;
		
}