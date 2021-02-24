import { User } from './user';
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
  'address' = (): Address => ({
    id: 0,
    streetName: '',
    streetNumber: 0,
    area: '',
    postalCode: '',
    city: '',
    province: ''
  })

  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
