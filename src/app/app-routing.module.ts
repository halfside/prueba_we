import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { ProvinceInfoComponent } from './components/province-info/province-info.component';
import { ProvincesListComponent } from './components/provinces-list/provinces-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProvincesListComponent },
  { path: 'provincia/:id', pathMatch: 'full', component: ProvinceInfoComponent },
  { path: '404', pathMatch: 'full', component: Page404Component },
  { path: '**', pathMatch: 'full', component: Page404Component },
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
