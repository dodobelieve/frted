import { Component, OnInit } from '@angular/core';
import { EvmenuService } from 'src/app/core/services/evmenu.service';
import { MENU_CODE, MethodConfig, CommonConfig } from 'src/app/core/modals/frted-model';
import { PayService } from 'src/app/core/services/pay.service';
import { UtilService } from 'src/app/core/services/util.service';
import AlipaySdk from 'alipay-sdk';
import AlipayFormData from 'alipay-sdk/lib/form';


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

  aliPrivateKey: string = "MIIEpAIBAAKCAQEAqGV+7Bcv4BYOcl5fna3QpAHI8MZ067RuDH0TeL964EKho7DQWdIIzOCPF84cEUo+EnDw6Wn+Izskqn7h7EI4c2TaVvjTTAvqo/qjQ7RFFaHWZKdlvaufQGU1VjpE0/YW/nTpY3zFb9OsXhOwvdDeTxETR+P6d6lrHa1c354X8x/Wy1LfFPmsT8wf05IS9NfITl9K7Y9RW29rm7EGws4AKcEenCM0+TLsMkrF34s1ihTwsglBNw0uEBA2tQSSrUVvtt3u7Pf9bdrUmJwFNqFK+hMccQrGl02t3ZkqF8HYVDPvdKWLu/ihx29OlC0g3Ccykq+Ry3CV4hs0scY0i01ZRQIDAQABAoIBAD3NIgubZuKitaKbqBPCWrQWQ5y5+OcYTNsgfCjwfTQYwCHHHnAYeUpXj6x45CwkRyuVb5T6ZV6gshAwiNGga/9NoCQTJdje9ro/nfOXEVOjFX/TP6+gcM29VxnSQLhZtI6mcZEllYA4+yV7rH29ThlOdvkHXkDUWI+HtHINH1UGXepB1O0B9yjJKIkBGW8gYeLybbrAge3n71C6B6rAfnLNCvlV7XmpwQaHXiHnzkypVBQzblpfgCQWVHuXtX1vlI3V1eWOVCqHN07+hdr9p35Tvs2b77tCH5oRTM4zDcnoScII2Z1C5j9KshL+srn12xEJjrGg36HcZW55p/sM6nECgYEA1Dc5ycL/STNd86e6OuLi9Pp7DO7AmMqunydVz1tlG7Ry+iPZAbwYz+2PZbkWDOyYYuC8kCJoWHW7ROAi2RLv0wwBbdzrJWmfQYF4fMm6CWv++b9ydd8ZJMkjvvCHUO7u9GRAipNkY2FlgNT8ci3/OnnuimwL4wk0cxsT/A5NIQ8CgYEAyyPU+RAreUNXCmMAj9GmTrcr+Q4GfHedR1E31TgQtUAtgvW0WdDCH4BKE/iVmSJoaIx2Qn7j0VmMwO+IAlmx70oQcqLt9YLw1j/SCVMbxDdR8QmcFxUVNnvG9eiaaBfY2GI8xoLU1ZmAMEnjsIEFY0SvJoDRohYfg/PxoWJW+GsCgYEAsnVem1Tn6V7Q+z1pVmvF/81D/TQpslN/VUd22dE5zXqJ1eCfdN4A35oepKRo7qVn4H6tE2hb50faG6mApJtQImJOMV0+QU/5JNUDxay+TX4MBWoBjy31rwGWldMfd+f1+n7z55TbLteQzC5PvJUBtOMkvjLuLBZpjQKQY76DDfECgYA9dywb6I6e9IdDt00WN0NxEe+WPm4r/y1xxNt2Aq7biP28YIgfnRD/4xuHC3KIkWayK74kxKw+TjBOuKuYuncihnCPn0kNPn+M9GajN6hxKKP8oQG/4js27yD2i1kdIgoU/zSQhEnOD9I/yjvAzmlI7iFpLxU/TB5hGNEGGfFi3QKBgQDIsU/SjGn9gjfcay+RSYP3y7xFQP+AUKpPspmLBVCuyN+ebTkIEeEfFweOrMpoyAEo95XWgbxakyTEXoyH+faj9RP06sCBsq12U0G4EaZEutkENpGpJJ7mBISpe+Jg1dGsm+BsiOKx01C6FQiB+SGnTlbyg72FZH2VnWaJtcXIiA==";


  aliPublicKey: string = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqGV+7Bcv4BYOcl5fna3QpAHI8MZ067RuDH0TeL964EKho7DQWdIIzOCPF84cEUo+EnDw6Wn+Izskqn7h7EI4c2TaVvjTTAvqo/qjQ7RFFaHWZKdlvaufQGU1VjpE0/YW/nTpY3zFb9OsXhOwvdDeTxETR+P6d6lrHa1c354X8x/Wy1LfFPmsT8wf05IS9NfITl9K7Y9RW29rm7EGws4AKcEenCM0+TLsMkrF34s1ihTwsglBNw0uEBA2tQSSrUVvtt3u7Pf9bdrUmJwFNqFK+hMccQrGl02t3ZkqF8HYVDPvdKWLu/ihx29OlC0g3Ccykq+Ry3CV4hs0scY0i01ZRQIDAQAB";

  alipaySdk: AlipaySdk;

  constructor(
    private menuServie: EvmenuService,
    private payService: PayService,
    private util: UtilService
  ) {
    this.menuServie.setProgress(MENU_CODE.ALI_PAY);
  }

  ngOnInit() {
    // let cfg = {
    //   appId: "2016101600701564",
    //   privateKey: this.aliPrivateKey,
    //   alipayPublicKey: this.aliPublicKey,
    //   gateway: "https://openapi.alipaydev.com/gateway.do"
    // };

    //  this.alipaySdk = new AlipaySdk(cfg);
  }


  pay() {
    this.payService.testPayByAli(this.productName, this.orderTitle, this.orderNum, this.totalAmount, this.productCode).subscribe(d => {
      console.log(d);
    });
  }


  pay3() {


    // this.alipaySdk = new AlipaySdk({
    //   appId: "2016101600701564",
    //   privateKey: this.aliPrivateKey,
    //   alipayPublicKey: this.aliPublicKey,
    //   gateway: "https://openapi.alipaydev.com/gateway.do"
    // });

    // const formData = new AlipayFormData();

    // formData.addField('notifyUrl', 'https://dodobelieve.github.io/frted/#/es/func');
    // formData.addField('bizContent', {
    //   outTradeNo: this.orderNum,
    //   productCode: this.productCode,
    //   totalAmount: this.totalAmount,
    //   subject: this.orderTitle,
    //   body: this.productName,
    // });

    // this.alipaySdk.exec(
    //   'alipay.trade.wap.pay',
    //   {},
    //   { formData: formData },
    // ).then(res => {
    //   console.log(res);
    // });
  }


  pay2() {
    let mc = new MethodConfig();
    mc.body = this.productName;
    mc.subject = this.orderTitle;
    mc.out_trade_no = this.orderNum;
    mc.total_amount = this.totalAmount;
    mc.product_code = this.productCode;
    mc.quit_url = "https://dodobelieve.github.io/frted/#/es/func";

    let cc = new CommonConfig();
    cc.app_id = "2016101600701564";
    cc.method = "alipay.trade.wap.pay";
    cc.sign = this.aliPrivateKey;
    cc.timestamp = this.util.dateFormat(new Date(), "yyyy-MM-dd HH:mm:ss");
    cc.biz_content = JSON.stringify(mc);

    this.httpPost('https://openapi.alipaydev.com/gateway.do', cc)
  }



  httpPost(URL, PARAMS) {
    var temp = document.createElement("form");
    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";

    for (var x in PARAMS) {
      var opt = document.createElement("textarea");
      opt.name = x;
      opt.value = PARAMS[x];
      temp.appendChild(opt);
    }

    document.body.appendChild(temp);
    temp.submit();

    return temp;
  }

  pay4() {
    let sc = `<form id='alipaysubmit' name='alipaysubmit' action='https://openapi.alipaydev.com/gateway.do?charset=UTF-8' method='post'><input type='hidden'  name='app_id' value='2016101600701564'/><input type='hidden'  name='biz_content' value='{"body":"","out_trade_no":"20191120145211671","product_code":"QUICK_WAP_WAY","quit_url":"","subject":"平台服务","total_amount":"200"}'/><input type='hidden'  name='charset' value='UTF-8'/><input type='hidden'  name='format' value='json'/><input type='hidden'  name='method' value='alipay.trade.wap.pay'/><input type='hidden'  name='notify_url' value='http://10.6.250.225/wappay/payok2.aspx'/><input type='hidden'  name='return_url' value='http://10.6.250.225/wappay/payok.aspx'/><input type='hidden'  name='sign_type' value='RSA2'/><input type='hidden'  name='timestamp' value='2019-11-20 15:30:48'/><input type='hidden'  name='version' value='1.0'/><input type='hidden'  name='sign' value='VLZwrrAW/f2umlcmZrp7N+byp0fYoKIy6bH3vRko2TXGaFeXd9v8OURkIsLi+lQKDEeCu5LvfyAnlPfgKZQ/GcO6/AMklc0PzdreMcS6TVlJ0wTsvjPlYwfJlUgJI5wwRPn61EmPWmHUqCXa8tzWJGsZu9wjubwKRF7ANt55ps1xpOZA8xgz6g6ic+QNrHZ7HJd1zMzbp2kcMc7IS9RngaIWMnVGDJTtBW9u5eMLbnURkZW0Fu/yJ+ZpFZZE31jRLoU0/RKv1aY2FpC0HSjJOBB3HI34ggWv/wa0EjO0yWdViTQe1K0EdQ2d40WPBSvuRYB3UO1mdeatuVF0WJBPmg=='/><input type='submit' value='post' style='display:none;'></form><script>document.forms['alipaysubmit'].submit();</script>`;
    document.write(sc);
  }


}
