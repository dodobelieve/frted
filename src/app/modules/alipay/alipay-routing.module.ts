import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlipayMainComponent } from './alipay-main/alipay-main.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: AlipayMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlipayRoutingModule { }
