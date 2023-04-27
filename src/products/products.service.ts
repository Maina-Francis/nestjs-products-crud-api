import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  //   createProduct method to handle Post Request
  createProduct(title: string, description: string, price: number) {
    // dummy product id generator
    const productId = Math.floor(Math.random() + Date.now()).toString();

    const newProduct = new Product(productId, title, description, price);
    this.products.push(newProduct);

    return productId;
  }

  //   getProducts method to handle Get Request
  getProducts() {
    // Return a copy of the products instance using a spread operator
    return [...this.products];
  }

  //   getIndividualProduct by id
  getIndividualProduct(productId: string) {
    const product = this.products.find((prod) => prod.id === productId);

    // throw a NotFoundException incase the product isn't found
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return { ...product };
  }
}
