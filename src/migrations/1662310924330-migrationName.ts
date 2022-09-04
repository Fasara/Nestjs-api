import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationName1662310924330 implements MigrationInterface {
    name = 'migrationName1662310924330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`articles\` CHANGE \`url\` \`url_id\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`articles\` DROP COLUMN \`url_id\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`articles\`
            ADD \`url_id\` varchar(255) NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`articles\` DROP COLUMN \`url_id\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`articles\`
            ADD \`url_id\` varchar(255) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`articles\` CHANGE \`url_id\` \`url\` varchar(255) NOT NULL
        `);
    }

}
