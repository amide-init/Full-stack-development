import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item/item.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order/order.service';
declare var Razorpay: any;
@Component({
  selector: 'app-brand-items',
  templateUrl: './brand-items.component.html',
  styleUrls: ['./brand-items.component.css']
})
export class BrandItemsComponent implements OnInit {

  constructor(
    private itemService:ItemService,
    private actRoute:ActivatedRoute,
    private orderService: OrderService
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
  buyNow(i) {
    const data = {
      amount : this.items[i]['price'] * 100
    }
    this.orderService.createOrder(data)
        .subscribe(res => {
          if(res['success']) {
            const options = {
              key: 'rzp_test_XeXDZ1bfrkFjXG',
              currency: "INR",
              name : this.items[i]['title'], 
              description: this.items[i]['description'],
              amount : data.amount,
              image: this.items[i]['thumbnail'],
              order_id :res['data']['raz_orderId'],
              handler: (response) => {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
              }
            }
            var rzp1 = new Razorpay(options);
            rzp1.open();
          }
        })
  }
}
