import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateBooks1655677227096 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'books',
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
            name: 'author',
            type: 'varchar',
          },
          {
            name: 'year',
            type: 'int',
          },
          {
            name: 'publisher',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'int',
          },
          {
            name: 'user_cpf',
            isNullable: true,
            type: 'varchar',
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
        foreignKeys: [{
          name: 'UserCpfBook',
          referencedTableName: 'users',
          referencedColumnNames: ['cpf'],
          columnNames: ['user_cpf'],
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books');
  }
}
