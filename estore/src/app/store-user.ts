import { Address } from './address';
import { User } from './user';
import { Product } from './product';

export class StoreUser implements User{
  'id' = 0;
  'firstName' = '';
  'lastName' = '';
  'nickName'?:string|null = '';
  'email' = '';
  'password' = '';
  'phoneNumber' = '';
  'userType' = '';
  'address'?: Address|null = {
    id: 0,
    streetName: '',
    streetNumber: 0,
    area: '',
    postalCode: '',
    city: '',
    province: ''
  };
  'items'?: Product|null = {
    id: 0,
    productName: '',
    productDescription: '',
    productCategory: '',
    productQuantity: 0,
    productPrice: 0,
    tags: ''
  };

  fullName(): string|null { return this.firstName + ' ' + this.lastName; }
}
