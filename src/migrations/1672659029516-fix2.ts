import { MigrationInterface, QueryRunner } from "typeorm";

export class fix21672659029516 implements MigrationInterface {
    name = 'fix21672659029516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_d2aaadae4891d84f218b160a914"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "propertiesId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "propertiesId" uuid`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_d2aaadae4891d84f218b160a914" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
