import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): any {
    const generatedProductId = this.productsService.createProduct(
      productTitle,
      productDescription,
      productPrice,
    );

    return { id: generatedProductId };
  }

  //   Get all products
  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  //   Get single products
  @Get(':id')
  getSingleProduct(@Param('id') id: string) {
    return this.productsService.getIndividualProduct(id);
  }
}
