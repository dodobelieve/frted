import { Component, OnInit } from '@angular/core';
import { EvmenuService } from 'src/app/core/services/evmenu.service';
import { MENU_CODE } from 'src/app/core/modals/frted-model';
import { PayService } from 'src/app/core/services/pay.service';

@Component({
  selector: 'app-alipay-main',
  templateUrl: './alipay-main.component.html',
  styleUrls: ['./alipay-main.component.css']
})
export class AlipayMainComponent implements OnInit {

  productName: string = "宫保鸡丁";

  orderTitle: string = "参夜食堂";

  orderNum: string = "1910291703420036";

  totalAmount: number = 12.00;

  productCode: string = "QUICK_WAP_WAY";

  constructor(
    private menuServie: EvmenuService,
    private payService: PayService
  ) {
    this.menuServie.setProgress(MENU_CODE.ALI_PAY);
  }

  ngOnInit() {
  }

  
  pay() {
    this.payService.testPayByAli(this.productName, this.orderTitle, this.orderNum, this.totalAmount, this.productCode).subscribe(d => {
      console.log(d);
    });
  }

}
