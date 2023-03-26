import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private productService:ProductService) {}
  dataLoaded = false

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true
    })
  }
}
