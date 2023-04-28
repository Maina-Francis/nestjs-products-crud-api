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
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  // Update Product
  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    // Array destructuring
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };

    if (title) {
      updatedProduct.title = title;
    }

    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }

  // Private method to find product
  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];

    // throw a NotFoundException incase the product isn't found
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return [product, productIndex];
  }
}
