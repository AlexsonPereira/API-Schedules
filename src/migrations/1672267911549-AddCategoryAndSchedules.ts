import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCategoryAndSchedules1672267911549 implements MigrationInterface {
    name = 'AddCategoryAndSchedules1672267911549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Schedules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "hour" character varying NOT NULL, CONSTRAINT "PK_364f08c10e5a443bf4a2125e702" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Schedules"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
