import { MigrationInterface, QueryRunner } from 'typeorm'

export class createUser1651159688287 implements MigrationInterface {
  name = 'createUser1651159688287'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "family_name" character varying(256) NOT NULL, "given_name" character varying(256) NOT NULL, "family_name_furigana" character varying(256) NOT NULL, "given_name_furigana" character varying(256) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`)
  }
}
