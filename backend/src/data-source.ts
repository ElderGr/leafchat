import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "sqlite",
        database: "./src/database/database.db",
        migrations: [ 
            "./src/database/migrations/*.ts" 
        ],
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
})
