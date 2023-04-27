import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  createProduct(title: string, description: string, price: number) {
    // dummy product id generator
    const productId = new Date().toString();

    const newProduct = new Product(productId, title, description, price);
    this.products.push(newProduct);

    return productId;
  }
}
