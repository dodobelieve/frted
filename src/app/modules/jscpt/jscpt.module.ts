import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JscptRoutingModule } from './jscpt-routing.module';
import { ReqamfrComponent } from './reqamfr/reqamfr.component';
import { DivResizeComponent } from './div-resize/div-resize.component';

@NgModule({
  declarations: [ReqamfrComponent, DivResizeComponent],
  imports: [
    CommonModule,
    JscptRoutingModule
  ]
})
export class JscptModule { }
