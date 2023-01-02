import { MigrationInterface, QueryRunner } from "typeorm";

export class addSizeEntityProperties1672667118319 implements MigrationInterface {
    name = 'addSizeEntityProperties1672667118319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ADD "size" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "size"`);
    }

}
