
import { ExpressServer } from './httpServer/config/express.config';

const server = new ExpressServer();
server.start(3000);