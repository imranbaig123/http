import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../model/product'


@Injectable({providedIn: "root"})
export class ProductService{
    allProducts: Product[] = [];
    isFetching: boolean = false;
    public getjsonvalue: any;

    constructor(private http:HttpClient){}


  fetchProductData() {
    return this.http.get<{[key: string]: Product}>('https://dummyjson.com/products')
    .pipe(map((res) => {
      const product = [];
      for(const key in res) {
        if(res.hasOwnProperty(key)) {
          product.push(res[key])
        }
      }

      return product  ;

    }))
  }


}