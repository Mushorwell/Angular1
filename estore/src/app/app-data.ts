import { ProductData } from './product-data';
import { StoreUserData } from './user-data';
import { AddressData } from './address-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {

  createDb() {
    const products = ProductData.products;
    const addresses = AddressData.addresses;
    const storeUsers = StoreUserData.storeUsers;
    return { products, addresses, storeUsers };
  }
}
