import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
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

  // Update Individual Product using Patch
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);

    return null;
  }

  // Delete and individual product based on their id
  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    this.productsService.deleteProd(prodId);
    return null;
  }
}
