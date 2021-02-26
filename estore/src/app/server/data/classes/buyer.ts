import { User } from '../interfaces/user';
import { Address } from './address';

export class Buyer implements User {
  'id' = 0;
  'firstName' = '';
  'nickName' = '';
  'lastName' = '';
  'email' = '';
  'password' = '';
  'phoneNumber' = '';
  'userType' = 'Buyer';
  'address': Address[] = [{
    id: 0,
    streetAddress1: '',
    streetNumber: 0,
    area: '',
    postalCode: '',
    city: '',
    province: ''
  }];

  fullName(): string|null {
    return this.firstName + ' ' + this.lastName;
  }
}
