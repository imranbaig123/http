import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public postjsonvalue: any;
  productDetails: any;

  constructor(
    private http: HttpClient,
    private productService: ProductService) {

  }
 
  ngOnInit(){
    this.fetchProduct();
  }
  
  private fetchProduct() {
    console.log(this.productDetails)
    this.productService.fetchProductData().subscribe((product => {
      this.productDetails = product;      
      console.log('data....',product)
    }))

  }

  // public postMethod(){
  //   let body = {
  //     id: 101,
  //     title: 'foo',
  //     description: 'an apple'
  //   }
  //   this.http.post('https://dummyjson.com/products/add', body).subscribe((data) => {
  //     console.log(data);
  //     this.postjsonvalue = data;
  //   });
  // }
}
