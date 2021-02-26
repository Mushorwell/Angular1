import { RegisterComponent } from '../auth/register/register.component';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanDeactivate<RegisterComponent>{
  canDeactivate(component: RegisterComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.registerUserForm.dirty){
      const userName = component.registerUserForm.get('firstName').value || 'New User';
      return confirm(`Navigate away and lose all changes to ${userName}?`);
    }
  }
}
