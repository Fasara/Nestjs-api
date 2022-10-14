import { VideoEntity } from "../videos/video.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { ArticleEntity } from "../articles/article.entity";


@Entity('course')
export class CourseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	status: string;

	@Column({ nullable: true })
	logo_url: 'text';

	@OneToMany(() => VideoEntity, (video: VideoEntity) => video.course)
	videos: Array<VideoEntity>;
	//we define the type first (VideoEntity) and what does it map to on the other table
	@OneToMany(() => ArticleEntity, (article: ArticleEntity) => article.course)
	articles: Array<ArticleEntity>;
}