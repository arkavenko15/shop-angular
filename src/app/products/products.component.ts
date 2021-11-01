import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = PRODUCTS;
  
}
