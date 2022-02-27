import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared classes and types/Iproduct';
import { ICategory } from '../shared classes and types/ICategory';
import { DiscountOffers } from '../shared classes and types/DiscountOffersEnum';
@Component({
  selector: 'app-prouduct',
  templateUrl: './prouduct.component.html',
  styleUrls: ['./prouduct.component.scss'],
})
export class ProuductComponent implements OnInit {
  constructor() {
    Discount: 10;
    StoreName: 'shop';
    StoreLogo: 'gg';
    ProductList: {
    }
    CategoryList: {
    }
    ClientName: 'nada';
    IsPurshased: true;
  }
  Discount: DiscountOffers = 10;
  StoreName: string = 'shop';
  StoreLogo: string = 'gg';
  ProductList: IProduct = {
    ID: 1,
    Name: 'p1',
    Quantity: 2,
    Price: 40,
    Img: 'img',
  };
  CategoryList: ICategory = {
    ID: 1,
    Name: 'product1',
  };
  ClientName: string = 'NADA';
  IsPurshased: boolean = true;

  ngOnInit(): void {}
}
