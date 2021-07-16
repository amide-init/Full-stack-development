import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-brand-items',
  templateUrl: './brand-items.component.html',
  styleUrls: ['./brand-items.component.css']
})
export class BrandItemsComponent implements OnInit {

  constructor(
    private itemService:ItemService,
    private actRoute:ActivatedRoute
    ) { }
  items;
  ngOnInit(): void {
    this.getBrandItmes();
  }

  getBrandItmes() {
    const brandId = this.actRoute.snapshot.paramMap.get('brandId')
    this.itemService.getBrandItems(brandId)
        .subscribe(res => {
          if(res['success']) {
            this.items = res['data']
          }
        })

  }
}
