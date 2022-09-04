import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { CourseEntity } from "src/courses/course.entity";

@Entity('articles')
export class ArticleEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    url_id: string;

    @ManyToOne(() => CourseEntity, (course: CourseEntity) => course.articles)
    @JoinColumn({ name: 'course_id' })
    course: CourseEntity;

}
