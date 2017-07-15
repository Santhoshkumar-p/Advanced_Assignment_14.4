import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      { id: 2356, "productName": "Samsung TV", "productLine": "samsung TV Curve thin screen", "buyPrice": 150000 },
      { id: 2323, "productName": "Nikon Camera", "productLine": "Nikon with body and lens", "buyPrice": 30000 },
      { id: 2334, "productName": "iPad", "productLine": "Apple tablet", "buyPrice": 40000 },
      { id: 2387, "productName": "iPhone 6s", "productLine": "iPhone 6s by Apple", "buyPrice": 100000 }
    ]
    return {products};
  }
}
     