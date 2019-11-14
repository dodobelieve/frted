import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Es6FunctionsComponent } from './es6-functions/es6-functions.component';
import { Es6ObjectComponent } from './es6-object/es6-object.component';

const routes: Routes = [
  { path: '', redirectTo: 'func', pathMatch: 'full' },
  { path: 'func', component: Es6FunctionsComponent },
  { path: 'obj', component: Es6ObjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es6RoutingModule { }
