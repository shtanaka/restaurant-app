/** 
 * User of the system. Can be Admin, Operator or Costumer 
 */

enum UserRole {
  ADMIN = 'ADMIN',
  OPERATOR = 'OPERATOR',
  COSTUMER = 'COSTUMER'
}

export class User {
  name: string;
}

export class Admin extends User {
  role = UserRole.ADMIN
}

export class Operator extends User {
  role = UserRole.OPERATOR
}

export class Costumer extends User {
  role = UserRole.COSTUMER;
}

/**
 * Product that will be sold.
 */

export class Product {
  title: string;
  description: string;
  price: number;
}

/**
 * Stock data: An instance of an product with its quantity and a list of all 
 * stock instances. On hold.
 */

export class StockInstance {
  product: Product;
  quantityInStock: number;
}

export class Stock {
  description: string;
  stockInstances: StockInstance[];
}

/**
 * Cart data: An instance of a cart product with the bought quantity and a list
 * of all cart instances for each costumer
 */

export class CartInstance {
  product: Product;
  quantity: number;
  value = this.product.price * this.quantity;
  dateCreated: Date; 
}

export class Cart {
  cartInstances: CartInstance[];
  costumer: Costumer;
  isItClosed: boolean;
  dateCreated: Date;

  get bill() {
    let sum = 0;
    for (let cartInstance of this.cartInstances) {
      sum = sum + cartInstance.value;
    }
    return sum;
  }
  
}


