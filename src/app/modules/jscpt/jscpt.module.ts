import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JscptRoutingModule } from './jscpt-routing.module';
import { ReqamfrComponent } from './reqamfr/reqamfr.component';

@NgModule({
  declarations: [ReqamfrComponent],
  imports: [
    CommonModule,
    JscptRoutingModule
  ]
})
export class JscptModule { }
