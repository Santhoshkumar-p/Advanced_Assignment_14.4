import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers: [ProductService]
})
export class EditProductComponent implements OnInit{

  private router: Router;
  private product: Product;
  private route: ActivatedRoute;
  private prodService: ProductService;

  constructor(route: ActivatedRoute, router: Router, prodService: ProductService) {
    this.router = router;
    this.route = route;
    this.prodService = prodService;
  }
    
  //used params to get the id to be passed along to the service call to get a
  //particular product to edit/save or delete

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.prodService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }

  updateProduct(): void{
    this.prodService.update(this.product)
      .then(() => this.back());
  }

  deleteProduct(): void{
    this.prodService.delete(this.product)
      .then(() => this.back());
  }

  //go back to product list page
  back(): void {
    let link = ['/products'];
    this.router.navigate(link);
  }

}
