import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReqamfrComponent } from './reqamfr/reqamfr.component';

const routes: Routes = [
  { path: '', redirectTo: 'rqamfr', pathMatch: 'full' },
  { path: 'rqamfr', component: ReqamfrComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JscptRoutingModule { }
