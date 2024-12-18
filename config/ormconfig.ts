
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root@123',
  database: 'test',
  synchronize: true,  // Automatically sync models to DB (for development)
  logging: true,
  entities: [__dirname + '/../domain/dao/*.ts'], // Assuming DAO models are in this directory
  migrations: [],
  subscribers: [],
});
