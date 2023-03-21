import { Injectable } from '@angular/core';
import { products } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products;
  constructor() { 
    this.products = products;
  }
  getProducts(){
    return this.products;
  }
}
