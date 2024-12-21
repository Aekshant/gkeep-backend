import { Entity, Column } from 'typeorm';
import { BaseModel } from './BaseModel';

@Entity('users')  // Table name: users
export class User extends BaseModel {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;
}
