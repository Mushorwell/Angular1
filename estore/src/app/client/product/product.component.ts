import { EstoreService } from './../../server/services/estore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../server/data/classes/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;
  private subs: Subscription;
  userLoggedIn = localStorage.getItem('userProfile');

  constructor(
    private route: ActivatedRoute,
    private productService: EstoreService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    console.log(+this.route.snapshot.paramMap.get('id'));
    const id = +this.route.snapshot.paramMap.get('id');
    this.subs = this.productService.getProduct(id).subscribe({
      next: product => {
        this.product = product;
      },
      error: err => this.errorMessage = err
    });

    // Display the appropriate page header
    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

}
