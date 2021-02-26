import { Subscription } from 'rxjs';
import { EstoreService } from './../../server/services/estore.service';
import { Product } from './../../server/data/classes/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Edit';
  productForm: FormGroup;
  product: Product;
  private subscription: Subscription;
  // categories: ProductCategory[];
  errorMessage: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router, private productService: EstoreService) {  }

  ngOnInit(): void {

    this.subscription = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        console.log(id);
        this.productService.getProduct(id).subscribe({
          next: loadProduct => {
            this.product =loadProduct;
            console.log(JSON.stringify(this.product));
            this.displayProduct();
          },
          error: err => this.errorMessage = err
        });
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  displayProduct(): void {
    if (this.product) {
      // Define the form
      this.productForm = this.fb.group({
        productName: [this.product.productName, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        productPrice: [this.product.productPrice, Validators.required],
        productDescription: this.product.productDescription,
        productQty: [this.product.productQuantity, Validators.required]
      });

      // Set tje appropriate page title
      if (this.product.id === 0) {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${this.product.productName}`;
      }
    } else {
      this.pageTitle = 'Product not found';
    }
  }

  deleteProduct(): void {
    if (this.product.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this.productService.deleteProduct(this.product.id)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
      }
    }
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        const p = { ...this.product, ...this.productForm.value };

        if (p.id === 0) {
          this.productService.createProduct(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        } else {
          this.productService.updateProduct(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.productForm.reset();
    this.router.navigate(['/products']);
  }

}
