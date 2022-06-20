import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  type: string;

  @Column()
  birthday: Date;

  @Column()
  cpf: string;

  @Column()
  address: string;

  @Column('int')
  fine: number;

  @Column('int')
  books_rented: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
