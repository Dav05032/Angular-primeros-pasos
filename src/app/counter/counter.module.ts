import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { counterComponents } from './components/counters/counter.component';




@NgModule({
  declarations:[
    counterComponents
  ],
  exports: [
    counterComponents,
  ],
  imports: [
    CommonModule
  ]
})
export class counterModule{}
