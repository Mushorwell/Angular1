import { Product } from './classes/product';

export class ProductData {

    static products: Product[] = [
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
        productCategory: 'Computers',
        productQuantity: 3,
        productPrice: 1099.90,
        tags: ''
      },
      {
        id: 3,
        productName: '48" HDTV',
        productDescription: 'Hi-Quality Smart TV / Display',
        productCategory: 'Entertainment',
        productQuantity: 5,
        productPrice: 8500.00,
        tags: ''
      },
      {
        id: 4,
        productName: 'Samsung Dishwasher',
        productDescription: 'Ultra-fresh dishwasher that removes stains, cleans and sanitizes utensils.',
        productCategory: 'Kitchen',
        productQuantity: 3,
        productPrice: 5199.90,
        tags: ''
      },
      {
        id: 5,
        productName: 'Sony Dishwasher',
        productDescription: 'Powerful turbo dishwasher that removes stains, cleans and sanitizes utensils.',
        productCategory: 'Kitchen',
        productQuantity: 3,
        productPrice: 6079.90,
        tags: ''
      }
    ];
  }
