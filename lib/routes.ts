import { Request, Response, Application } from "express";
import { ProductController } from "controllers/product.controller";

export class Routes {

  public productController = new ProductController();

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
      .get(this.productController.all)
      .post(this.productController.add);
    app.route("/products/:id")
      .get(this.productController.get)
      .put(this.productController.update)
      .delete(this.productController.remove);

  }

}
