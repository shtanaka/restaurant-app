import { Request, Response, Application } from "express";

export class Routes {

  public routes(app: Application): void {
    this.mainRoute(app);
    this.tableRoute(app);
  }

  public mainRoute(app: Application): void {
    app.route("/")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: "Fine, You are talking to us."
        });
      })
      .post((req: Request, res: Response) => {
        res.status(200).send({
          message: "Great! You posted some data to us. We will handle it."
        })
      });
  }

  public tableRoute(app: Application): void {
    app.route("/products")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: "Fine, You are talking to products."
        });
      })
      .post((req: Request, res: Response) => {
        res.status(200).send({
          message: "Great! You posted some data to products. We will handle it."
        })
      });
    app.route("/products/:id")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: "Oh, looks like you are trying to access some strict data from products. products is preparing it."
        })
      })
      .put((req: Request, res: Response) => {
        res.status(200).send({
          message: "So you are trying to modify something on products, huh? Soon it will be possible."
        })
      })
      .delete((req: Request, res: Response) => {
        res.status(200).send({
          message: "Such a mess you are doing here, trying to delete some products. Not now, but in a moment, ok?"
        })
      });

  }

}
