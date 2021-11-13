import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class CourseEntity {

    @PrimaryColumn()
    CourseId: number;

    @Column()
    CourseName: string;

    @Column()
    CourseLogo: string;

    @Column()
    CourseStatus: string;

}