import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service'
import { Product } from '../../product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private router: Router;
  private prodService: ProductService;

  constructor( prodService: ProductService, router: Router){
    this.router = router;
    this.prodService = prodService;
  }

  ngOnInit(): void {
    this.getProducts();   
  }

  getProducts(): void {
    this.prodService
      .getProducts()
      .then(products => this.products = products);
  }

  //called by the Add New button click event to open a page which leads to creating a new product
  addNew(): void{
    this.router.navigate(['/add']);
  }

}
