import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Es6RoutingModule } from './es6-routing.module';
import { Es6FunctionsComponent } from './es6-functions/es6-functions.component';
import { Es6ObjectComponent } from './es6-object/es6-object.component';

@NgModule({
  declarations: [Es6FunctionsComponent, Es6ObjectComponent],
  imports: [
    CommonModule,
    Es6RoutingModule
  ]
})
export class Es6Module { }
