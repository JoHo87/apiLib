import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1655672744747 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'birthday',
            type: 'date',
          },
          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'fine',
            type: 'int',
          },
          {
            name: 'books_rented',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        }),
    );
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }

}
