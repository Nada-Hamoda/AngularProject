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
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];

  CategoryList: ICategory[];

  ClientName: string;
  IsPurshased: boolean;

  constructor() {
    this.Discount = DiscountOffers['10%'];
    this.StoreName = 'shop';
    this.StoreLogo = '../../assets/photo/logo.png';
    this.ProductList = [
      {
        ID: 1,
        Name: 'p1',
        Quantity: 2,
        Price: 40,
        Img: 'img',
      },
      {
        ID: 2,
        Name: 'p1',
        Quantity: 2,
        Price: 40,
        Img: 'img',
      },
    ];
    this.CategoryList = [
      {
        ID: 1,
        Name: 'product1',
      },
      {
        ID: 2,
        Name: 'product2',
      },
    ];

    this.ClientName = 'nada';
    this.IsPurshased = false;
  }

  ngOnInit(): void {}
  show() {
    this.IsPurshased = !this.IsPurshased;
  }
}
