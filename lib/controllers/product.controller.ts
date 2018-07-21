import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { ProductSchema } from 'models/product.model';

const Product = mongoose.model('Product', ProductSchema)

export class ProductController {

  public all(req: Request, res: Response) {
    Product.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public add(req: Request, res: Response) {
    const newProduct = new Product(req.body);
    newProduct.save((err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    });
  }

  public get(req: Request, res: Response) {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    });
  }

  public update(req: Request, res: Response) {
    Product.findByIdAndUpdate(req.params.id, (err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    });
  }

  public remove(req: Request, res: Response) {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
      if (err) {
        res.send(err);
      }
      res.json(product);
    });
  }

}