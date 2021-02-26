import { ProductEditComponent } from './product-edit.component';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<ProductEditComponent>{
  canDeactivate(component: ProductEditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.productForm.dirty){
      const productName = component.productForm.get('productName').value || 'New User';
      return confirm(`Navigate away and lose all changes to ${productName}?`);
    }
  }
}
