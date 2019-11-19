import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlipayRoutingModule } from './alipay-routing.module';
import { AlipayMainComponent } from './alipay-main/alipay-main.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AlipayMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlipayRoutingModule,
    NgZorroAntdModule
  ]
})
export class AlipayModule { }
