import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.db",
  synchronize: true,
  logging: false,
  entities: ['./src/database/entity/*.ts'],
  migrations: ["./src/database/migrations/*.ts"]
})

export const getConnection = () => AppDataSource.initialize()