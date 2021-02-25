import { ProductData } from './server/data/product-data';
import { StoreUserData } from './server/data/user-data';
import { AddressData } from './server/data/address-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {

  createDb() {
    const products = ProductData.products;
    const addresses = AddressData.addresses;
    const storeUsers = StoreUserData.storeUsers;
    return { products, addresses, storeUsers };
  }
}
