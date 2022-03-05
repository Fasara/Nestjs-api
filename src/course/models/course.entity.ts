import { ValidationTypes } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { VideoEntity } from "./video.entity";

@Entity()
export class Course {

	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	status: string;

	// @ManyToOne(() => VideoEntity, video => video.video )
	// videos: LearningAsset[];
		
}