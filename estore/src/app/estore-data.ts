import { Product } from './product';
import { Seller } from './seller';
import { Buyer } from './buyer';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Address } from './address';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { isThisTypeNode } from 'typescript';

export class EstoreData implements InMemoryWebApiModule {
  createDb() {
    const addresses: Address[] = [
      {
        id: 1,
        streetName: '1st Street',
        streetNumber: 15,
        area: 'Area1',
        postalCode: '1234',
        city: 'City1',
        province: 'Province1'
      },
      {
        id: 2,
        streetName: '11th Street',
        streetNumber: 23,
        area: 'Area3',
        postalCode: '1324',
        city: 'City2',
        province: 'Province1'
      },
      {
        id: 3,
        streetName: '2nd Street',
        streetNumber: 1,
        area: 'Area1',
        postalCode: '1234',
        city: 'City1',
        province: 'Province1'
      },
      {
        id: 4,
        streetName: '1st Street',
        streetNumber: 1,
        area: 'Area1',
        postalCode: '1234',
        city: 'City1',
        province: 'Province1'
      },
      {
        id: 5,
        streetName: '5th Street',
        streetNumber: 25,
        area: 'Area16',
        postalCode: '2321',
        city: 'City4',
        province: 'Province5'
      },
      {
        id: 6,
        streetName: '14th Street',
        streetNumber: 24,
        area: 'Area17',
        postalCode: '2325',
        city: 'City3',
        province: 'Province3'
      },
      {
        id: 7,
        streetName: '18th Street',
        streetNumber: 22,
        area: 'Area6',
        postalCode: '1234',
        city: 'City1',
        province: 'Province1'
      },
    ];

    const buyers: Buyer[] = [
      {
        id: 1,
        firstName: 'Malcolm',
        nickName: 'Malcolm',
        lastName: 'Gwenyambira',
        email: 'malcolm@mail.com',
        password: 'malcolm123',
        phoneNumber: '0721234567',
        userType: 'Buyer',
        address: addresses[0],
        fullName: () => 'Malcolm Gwenyambira'
      },
      {
        id: 2,
        firstName: 'Gwen',
        nickName: 'Gwen',
        lastName: 'Bosch',
        email: 'gwen@mail.com',
        password: 'gwen123',
        phoneNumber: '0712345678',
        userType: 'Buyer',
        address: addresses[1],
        fullName: () => 'Gwen Bosch'
      },
      {
        id: 3,
        firstName: 'Lusanda',
        nickName: 'Lulu',
        lastName: 'Dube',
        email: 'lulu@mail.com',
        password: 'lu123lu',
        phoneNumber: '0123456789',
        userType: 'Buyer',
        address: addresses[3],
        fullName: () => 'Lusanda Dube'
      },
      {
        id: 4,
        firstName: 'Mandla',
        nickName: 'Manny',
        lastName: 'Zulu',
        email: 'manny@mail.com',
        password: 'manzul123',
        phoneNumber: '0213456789',
        userType: 'Buyer',
        address: addresses[4],
        fullName: () => 'Mandla Zulu'
      },
      {
        id: 5,
        firstName: 'Andile',
        nickName: 'Firsky',
        lastName: 'Zuma',
        email: 'firsky@mail.com',
        password: 'andil123',
        phoneNumber: '0312456789',
        userType: 'Buyer',
        address: addresses[5],
        fullName: () => 'Andile Zuma'
      },
    ];

    const products: Product[] = [
      {
        id: 1,
        productName: 'Acer E1-576',
        productDescription: '13" Laptop, compact for carrying around and working on the move.',
        productCategory: 'Computers',
        productQuantity: 5,
        productPrice: 3500.00,
        tags: ''
      },
      {
        id: 2,
        productName: 'Dell 15" Display',
        productDescription: 'High quality resolution display',
        productCategory: 'Computer Accessory',
        productQuantity: 3,
        productPrice: 1099.90,
        tags: ''
      },
      {
        id: 3,
        productName: '48" HDTV',
        productDescription: 'Hi-Quality Smart TV / Display',
        productCategory: 'Electronics',
        productQuantity: 5,
        productPrice: 8500.00,
        tags: ''
      },
      {
        id: 4,
        productName: 'Samsung Dishwasher',
        productDescription: 'Ultra-fresh dishwasher that removes stains, cleans and sanitizes utensils.',
        productCategory: 'Kitchn',
        productQuantity: 3,
        productPrice: 5199.90,
        tags: ''
      },
    ];

    const sellers: Seller[] = [
      {
        id: 1,
        firstName: 'Mike',
        lastName: 'Smith',
        email: 'mike@smith.com',
        password: '123456',
        phoneNumber: '0654123789',
        userType: 'Seller',
        items: products[1],
        fullName: () => 'Mike Smith'
      },
      {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
        password: '123456',
        phoneNumber: '0654123987',
        userType: 'Seller',
        items: products[2],
        fullName: () => 'John Smith'
      },
      {
        id: 1,
        firstName: 'Dumisane',
        lastName: 'Pukuza',
        email: 'dumi@pukuza.com',
        password: '123456',
        phoneNumber: '0654321789',
        userType: 'Seller',
        items: products[0],
        fullName: () => 'Dumisane Pukuza'
      },
      {
        id: 1,
        firstName: 'Jabu',
        lastName: 'Jameson',
        email: 'jabu@jameson.com',
        password: '123456',
        phoneNumber: '0614523789',
        userType: 'Seller',
        items: products[3],
        fullName: () => 'Jabu Jameson'
      },
    ];
  }
}
