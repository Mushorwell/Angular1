import { Address } from './address';
import { User } from '../interfaces/user';
import { Product } from './product';

export class StoreUser implements User{
  'id' = 0;
  'firstName' = '';
  'lastName' = '';
  'nickName'?:string|null = '';
  'email' = '';
  'password' = '';
  'phoneNumber':string = '';
  'userType' = '';
  'address'?: Address[]|null = [{
    id: 0,
    addressType: '',
    streetAddress1: '',
    streetAddress2: '',
    streetNumber: 0,
    area: '',
    postalCode: '',
    city: '',
    province: ''
  }];
  'items'?: Product[]|null = [{
    id: 0,
    productName: '',
    productDescription: '',
    productCategory: '',
    productQuantity: 0,
    productPrice: 0,
    tags: ''
  }];

  // fullName(): string|null { return this.firstName + ' ' + this.lastName; }
}
