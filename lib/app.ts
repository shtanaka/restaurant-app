import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "routes";

class App {
  // app
  public app: express.Application;

  // routes
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.registerRoutes();
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private registerRoutes() {
    this.routes.routes(this.app);
  }
}

export default new App().app;
