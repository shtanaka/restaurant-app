import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { ProductSchema } from 'models/product.model';

const Product = mongoose.model('Product', ProductSchema)

export class ProductController {

  public add(req: Request, res: Response) {
    const newProduct = new Product(req.body);
    newProduct.save((err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    });
  }

}