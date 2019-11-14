import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  exports: [LayoutComponent],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class ShareModule { }
