import { AddressData } from './address-data';
import { ProductData } from './product-data';
import { StoreUser } from './classes/store-user';
import { Product } from './classes/product';

export class StoreUserData {

  // create sellers
  static storeUsers: StoreUser[] = [
    {
      id: 1,
      firstName: 'Mike',
      lastName: 'Smith',
      email: 'mike@smith.com',
      password: '123456',
      phoneNumber: '0654123789',
      userType: 'Seller',
      items: [ProductData.products[0]]
      // fullName():string{
      //   return this.firstName + ' ' + this.lastName;
      // }
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@smith.com',
      password: '123456',
      phoneNumber: '0654123987',
      userType: 'Seller',
      items: [ProductData.products[1]]
      // fullName():string{
      //   return this.firstName + ' ' + this.lastName;
      // }
    },
    {
      id: 3,
      firstName: 'Dumisane',
      lastName: 'Pukuza',
      email: 'dumi@pukuza.com',
      password: '123456',
      phoneNumber: '0654321789',
      userType: 'Seller',
      items: [ProductData.products[2]]
      // fullName():string{
      //   return this.firstName + ' ' + this.lastName;
      // }
    },
    {
      id: 4,
      firstName: 'Jabu',
      lastName: 'Jameson',
      email: 'jabu@jameson.com',
      password: '123456',
      phoneNumber: '0614523789',
      userType: 'Seller',
      items: [ProductData.products[3], ProductData.products[4]]
      // fullName():string{
      //   return this.firstName + ' ' + this.lastName;
      // }
    },
    {
      id: 5,
      firstName: 'Malcolm',
      nickName: 'Malcolm',
      lastName: 'Gwenyambira',
      email: 'malcolm@mail.com',
      password: 'malcolm123',
      phoneNumber: '0721234567',
      userType: 'Buyer',
      address: [AddressData.addresses[0]]
      // fullName():string{
      //   return this.firstName + ' ' + this.lastName;
      // }
    },
    {
      id: 6,
      firstName: 'Gwen',
      nickName: 'Gwen',
      lastName: 'Bosch',
      email: 'gwen@mail.com',
      password: 'gwen123',
      phoneNumber: '0712345678',
      userType: 'Buyer',
      address: [AddressData.addresses[1]]
      // fullName(): string{
      //   return this.firstName + ' ' + this.lastName;
      // }
    },
    {
      id: 7,
      firstName: 'Lusanda',
      nickName: 'Lulu',
      lastName: 'Dube',
      email: 'lulu@mail.com',
      password: 'lu123lu',
      phoneNumber: '0123456789',
      userType: 'Buyer',
      address: [AddressData.addresses[2]]
      // fullName(): string{
      //   return this.firstName + ' ' + this.lastName;
      // }
    },
    {
      id: 8,
      firstName: 'Mandla',
      nickName: 'Manny',
      lastName: 'Zulu',
      email: 'manny@mail.com',
      password: 'manzul123',
      phoneNumber: '0213456789',
      userType: 'Buyer',
      address: [AddressData.addresses[3],AddressData.addresses[4], AddressData.addresses[5]]
      // fullName():string{
      //   return this.firstName + ' ' + this.lastName;
      // }
    },
    {
      id: 9,
      firstName: 'Andile',
      nickName: 'Firsky',
      lastName: 'Zuma',
      email: 'firsky@mail.com',
      password: 'andil123',
      phoneNumber: '0312456789',
      userType: 'Buyer',
      address: [AddressData.addresses[6]]
      // fullName():string{
      //   return this.firstName + ' ' + this.lastName;
      // }
    },
  ];
  }

