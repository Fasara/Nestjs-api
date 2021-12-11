import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class CourseEntity {

    @PrimaryColumn({
        type: "int"
    })
    CourseId: number;

    @Column({
        type: "varchar"
    })
    CourseName: string;

    @Column({
        type: "varchar"
    })
    CourseLogo: string;

    @Column({
        type: "varchar"
    })
    CourseStatus: string;

}