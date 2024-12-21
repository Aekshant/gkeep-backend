import { ExpressServer } from "./httpServer/config/express.config";
import { AppDataSource } from "./infra/mysql/config/data-source";
const server = new ExpressServer();
server.start(3000);

async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully");

    const server = new ExpressServer();
    server.start(4000);
  } catch (error) {
    console.error("Error during Data Source initialization:", error);
  }
}

startServer();
