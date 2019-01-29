import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as morgan from "morgan";

import { UserController } from "./controllers/user.controller";

const userRouter = new UserController().router;

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  private config() {
    //middleware
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    //cors setup
    this.app.use(cors());
    this.app.use((_, res: express.Response, next: express.NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
      );
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });
  }

  private routes() {
    this.app.use("/user", userRouter);
  }
}

export default new App().app;
