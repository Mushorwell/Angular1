import { User } from './user';
import { Product } from './product';

export class Seller implements User {
  'id' = 0;
  'firstName' = '';
  'lastName' = '';
  'email' = '';
  'password' = '';
  'phoneNumber' = '';
  'userType' = 'Seller';
  'items' = (): Product => ({
    id: 0,
    productName: '',
    productDescription: '',
    productCategory: '',
    productQuantity: 0,
    productPrice: 0,
    tags: ''
  });

  fullName(): string { return this.firstName + ' ' + this.lastName; }
}
