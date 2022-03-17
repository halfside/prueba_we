import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvincesListComponent } from './provinces-list.component';
import { ProvinceCardComponent } from 'src/app/components/province-card/province-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProvinceCardComponent
  ],
  declarations: [
    ProvincesListComponent,
    ProvinceCardComponent
  ]
})
export class ProvincesListModule { }
