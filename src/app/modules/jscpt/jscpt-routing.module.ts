import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReqamfrComponent } from './reqamfr/reqamfr.component';
import { DivResizeComponent } from './div-resize/div-resize.component';

const routes: Routes = [
  { path: '', redirectTo: 'rqamfr', pathMatch: 'full' },
  { path: 'rqamfr', component: ReqamfrComponent },
  { path: 'resize', component: DivResizeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JscptRoutingModule { }
