import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand/brand.service';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private barndService:BrandService) { }
  brands;
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.barndService.getBrands()
        .subscribe(res => {
          if(res['success']){
            this.brands = res['data']
          }
          
        })
  }

}
