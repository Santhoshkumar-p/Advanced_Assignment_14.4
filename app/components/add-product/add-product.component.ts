import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductService]
})
export class AddProductComponent implements OnInit {

  private router: Router;
  private product: Product;
  private products: Product[];
  private route: ActivatedRoute;   
  private prodService: ProductService;

  //initialize variables and create a new product for adding to list of products
  constructor(route: ActivatedRoute, router: Router, prodService: ProductService) {
    this.router = router;
    this.route = route;
    this.prodService = prodService;
    this.product = new Product(0,"","",0);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  //gets sorted array of product objects
  getProducts(): void {
    this.prodService
      .getProducts()
      .then(products => this.products = products);
  }

  //use the sorted array of products to find the id of the last product
  //create a new id by incrementing the highest id by 1
  //then call the create method in the service
  addProduct(): void{
    this.product.id = this.products[this.products.length - 1].id + 1
    this.prodService.create(this.product)
      .then(() => this.back());
  }

  //go back to the product list table and check if new product is at bottom of list
  back(): void {
    let link = ['/products'];
    this.router.navigate(link);
  }

}
