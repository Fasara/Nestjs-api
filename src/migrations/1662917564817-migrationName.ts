import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationName1662917564817 implements MigrationInterface {
    name = 'migrationName1662917564817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`articles\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`title\` varchar(255) NOT NULL,
                \`url_id\` varchar(255) NOT NULL,
                \`course_id\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`articles\`
            ADD CONSTRAINT \`FK_45a3b797a552e333d176935dca1\` FOREIGN KEY (\`course_id\`) REFERENCES \`course\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`articles\` DROP FOREIGN KEY \`FK_45a3b797a552e333d176935dca1\`
        `);
        await queryRunner.query(`
            DROP TABLE \`articles\`
        `);
    }

}
