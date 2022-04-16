import { getConnectionManager } from "typeorm";

export default async function connect() {
  const connectionManager = getConnectionManager();

  const connectionObj = {
    type: "sqlite",
    database: "./src/database/database.db",
    entities: [`./src/entities/*{.ts,.js}`],
  }

  const connection = connectionManager.create(connectionObj as any);
  console.log(`Database connected`)
  await connection.connect();

  return connection;
}
