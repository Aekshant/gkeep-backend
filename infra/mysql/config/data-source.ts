import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../../domain/models/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: 'root',
    password: 'root@123',
    database: 'test',
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
})