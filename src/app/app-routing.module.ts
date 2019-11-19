import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/share/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'es', pathMatch: 'full' },

  //es6
  { path: 'es', component: LayoutComponent, loadChildren: './modules/es6/es6.module#Es6Module' },

  //javascript 
  { path: 'js', component: LayoutComponent, loadChildren: './modules/jscpt/jscpt.module#JscptModule' },

  //alipay 
  { path: 'al', component: LayoutComponent, loadChildren: './modules/alipay/alipay.module#AlipayModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
