import { Product } from './product';

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
  }
