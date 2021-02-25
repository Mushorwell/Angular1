import { Buyer } from '../data/classes/buyer';
import { Seller } from '../data/classes/seller';
import { Address } from '../data/classes/address';
import { Product } from '../data/classes/product';
import { StoreUser } from '../data/classes/store-user';

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstoreService {
  // private baseUrl = 'www.myWebService.com/api';
  // private productBaseUrl = `${this.baseUrl}/products`;
  // private addressBaseUrl = `${this.baseUrl}/addresses`;
  // private storeUserBaseUrl = `${this.baseUrl}/storeUsers`;
  private productsUrl = 'api/products';
  private addressesUrl = 'api/suppliers';
  private storeUsersUrl = 'api/storeUsers';

  constructor( private http: HttpClient) { };


  getProduct(id: number): Observable<Product>{
    if (id === 0){
      return of (this.initializeProduct());
    }
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createProduct(product: Product): Observable<Product>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Product>(this.productsUrl, product, {headers})
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateProduct(product: Product): Observable<Product>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    const url = `${this.productsUrl}/${product.id}`;
    return this.http.put<Product>(url, product, {headers})
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAddress(id: number): Observable<Address>{
    if (id === 0){
      return of (this.initializeAddress())
    }
    const url = `${this.addressesUrl}/${id}`;
    return this.http.get<Address>(url)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getAddresses(): Observable<Address[]>{
    return this.http.get<Address[]>(this.addressesUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createAddress(address: Address): Observable<Address>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Address>(this.addressesUrl, address, {headers})
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateAddress(address: Address): Observable<Address>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    const url = `${this.addressesUrl}/${address.id}`;
    return this.http.put<Address>(url, address, {headers})
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getStoreUser(id: number): Observable<StoreUser>{
    if (id === 0){
      return of (this.initializeStoreUser())
    }
    const url = `${this.storeUsersUrl}/${id}`;
    return this.http.get<StoreUser>(url)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getStoreUsers(): Observable<StoreUser[]>{
    return this.http.get<StoreUser[]>(this.storeUsersUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createStoreUser(storeUser: StoreUser): Observable<StoreUser>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<StoreUser>(this.storeUsersUrl, storeUser, {headers})
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateStoreUser(storeUser: StoreUser): Observable<StoreUser>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    const url = `${this.storeUsersUrl}/${storeUser.id}`;
    return this.http.put<StoreUser>(url, storeUser, {headers})
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number): Observable<{}>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, {headers})
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage: string = '';
    if (err.error instanceof ErrorEvent){
      errorMessage = `An error occurred: ${err.error.message}`;
    }else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  }

  private initializeAddress(): Address {
    // Return an initialized object
    return {
      id: 0,
      streetName: null,
      streetNumber: null,
      area: null,
      postalCode: null,
      city: null,
      province: null
      };
  }

  private initializeProduct(): Product {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productDescription: null,
      productQuantity: 0,
      productPrice: null,
      productCategory: null,
      tags: ''
    };
  }

  private initializeStoreUser(): StoreUser {
    // Return an initialized object
    return {
      id: 0,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      phoneNumber: null,
      userType: null,
      address: null,
      items: null,
      fullName: null
    };
  }
}
