import "reflect-metadata"
import { DataSource } from "typeorm"

const path = process.cwd()
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: 'root',
    password: 'root@123',
    database: 'test',
    synchronize: true,
    logging: true,
    entities: [path + '/domain/models/*.ts'],
    migrations: [path + '/domain/migration/*.ts'],
    subscribers: [],
})