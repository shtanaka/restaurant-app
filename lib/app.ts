import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Routes } from "routes";

class App {
  
  public app: express.Application;
  public routes: Routes = new Routes();
  public mongoUrl: string = 'mongodb://localhost/restaurant-app-db';

  constructor() {
    this.app = express();
    this.config();
    this.registerRoutes();
    this.mongoSetup();
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private registerRoutes() {
    this.routes.routes(this.app);
  }

  private mongoSetup() {
    mongoose.connect(this.mongoUrl, (err) => {
      console.log(err);
    }); 
  }
  
}

export default new App().app;
