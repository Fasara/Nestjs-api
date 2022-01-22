import { ValidationTypes } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { LearningAsset } from "./learning-asset.entity";

@Entity()
export class Course {

	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	title: string;

	@Column()
	status: string;

	@ManyToOne(() => LearningAsset, video => video.video )
	videos: LearningAsset[];
		
}