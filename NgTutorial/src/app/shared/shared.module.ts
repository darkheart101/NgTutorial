import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarCompoent } from './star.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarCompoent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarCompoent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
