import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonConfig, MethodConfig } from '../modals/frted-model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private http: HttpClient,
    private util: UtilService
  ) { }

  aliPrivateKey: string = "MIIEpAIBAAKCAQEAqGV+7Bcv4BYOcl5fna3QpAHI8MZ067RuDH0TeL964EKho7DQWdIIzOCPF84cEUo+EnDw6Wn+Izskqn7h7EI4c2TaVvjTTAvqo/qjQ7RFFaHWZKdlvaufQGU1VjpE0/YW/nTpY3zFb9OsXhOwvdDeTxETR+P6d6lrHa1c354X8x/Wy1LfFPmsT8wf05IS9NfITl9K7Y9RW29rm7EGws4AKcEenCM0+TLsMkrF34s1ihTwsglBNw0uEBA2tQSSrUVvtt3u7Pf9bdrUmJwFNqFK+hMccQrGl02t3ZkqF8HYVDPvdKWLu/ihx29OlC0g3Ccykq+Ry3CV4hs0scY0i01ZRQIDAQABAoIBAD3NIgubZuKitaKbqBPCWrQWQ5y5+OcYTNsgfCjwfTQYwCHHHnAYeUpXj6x45CwkRyuVb5T6ZV6gshAwiNGga/9NoCQTJdje9ro/nfOXEVOjFX/TP6+gcM29VxnSQLhZtI6mcZEllYA4+yV7rH29ThlOdvkHXkDUWI+HtHINH1UGXepB1O0B9yjJKIkBGW8gYeLybbrAge3n71C6B6rAfnLNCvlV7XmpwQaHXiHnzkypVBQzblpfgCQWVHuXtX1vlI3V1eWOVCqHN07+hdr9p35Tvs2b77tCH5oRTM4zDcnoScII2Z1C5j9KshL+srn12xEJjrGg36HcZW55p/sM6nECgYEA1Dc5ycL/STNd86e6OuLi9Pp7DO7AmMqunydVz1tlG7Ry+iPZAbwYz+2PZbkWDOyYYuC8kCJoWHW7ROAi2RLv0wwBbdzrJWmfQYF4fMm6CWv++b9ydd8ZJMkjvvCHUO7u9GRAipNkY2FlgNT8ci3/OnnuimwL4wk0cxsT/A5NIQ8CgYEAyyPU+RAreUNXCmMAj9GmTrcr+Q4GfHedR1E31TgQtUAtgvW0WdDCH4BKE/iVmSJoaIx2Qn7j0VmMwO+IAlmx70oQcqLt9YLw1j/SCVMbxDdR8QmcFxUVNnvG9eiaaBfY2GI8xoLU1ZmAMEnjsIEFY0SvJoDRohYfg/PxoWJW+GsCgYEAsnVem1Tn6V7Q+z1pVmvF/81D/TQpslN/VUd22dE5zXqJ1eCfdN4A35oepKRo7qVn4H6tE2hb50faG6mApJtQImJOMV0+QU/5JNUDxay+TX4MBWoBjy31rwGWldMfd+f1+n7z55TbLteQzC5PvJUBtOMkvjLuLBZpjQKQY76DDfECgYA9dywb6I6e9IdDt00WN0NxEe+WPm4r/y1xxNt2Aq7biP28YIgfnRD/4xuHC3KIkWayK74kxKw+TjBOuKuYuncihnCPn0kNPn+M9GajN6hxKKP8oQG/4js27yD2i1kdIgoU/zSQhEnOD9I/yjvAzmlI7iFpLxU/TB5hGNEGGfFi3QKBgQDIsU/SjGn9gjfcay+RSYP3y7xFQP+AUKpPspmLBVCuyN+ebTkIEeEfFweOrMpoyAEo95XWgbxakyTEXoyH+faj9RP06sCBsq12U0G4EaZEutkENpGpJJ7mBISpe+Jg1dGsm+BsiOKx01C6FQiB+SGnTlbyg72FZH2VnWaJtcXIiA==";


  aliPublicKey: string = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqGV+7Bcv4BYOcl5fna3QpAHI8MZ067RuDH0TeL964EKho7DQWdIIzOCPF84cEUo+EnDw6Wn+Izskqn7h7EI4c2TaVvjTTAvqo/qjQ7RFFaHWZKdlvaufQGU1VjpE0/YW/nTpY3zFb9OsXhOwvdDeTxETR+P6d6lrHa1c354X8x/Wy1LfFPmsT8wf05IS9NfITl9K7Y9RW29rm7EGws4AKcEenCM0+TLsMkrF34s1ihTwsglBNw0uEBA2tQSSrUVvtt3u7Pf9bdrUmJwFNqFK+hMccQrGl02t3ZkqF8HYVDPvdKWLu/ihx29OlC0g3Ccykq+Ry3CV4hs0scY0i01ZRQIDAQAB";




  testPayByAli(productName: string, orderTitle: string, orderNum: string, totalAmount: number, productCode: string) {

    let mc = new MethodConfig();
    mc.body = productName;
    mc.subject = orderTitle;
    mc.out_trade_no = orderNum;
    mc.total_amount = totalAmount;
    mc.product_code = productCode;
    mc.quit_url = "https://dodobelieve.github.io/frted/#/es/func";

    let cc = new CommonConfig();
    cc.app_id = "2019111869268104";
    cc.method = "alipay.trade.wap.pay";
    cc.sign = this.aliPrivateKey;
    cc.timestamp = this.util.dateFormat(new Date(), "yyyy-MM-dd HH:mm:ss");
    cc.biz_content = JSON.stringify(mc);

    let url = "https://openapi.alipay.com/gateway.do";
    return this.http.post(url, cc);
  }


}

