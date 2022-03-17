import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvincesListComponent } from './modules/provinces-list/provinces-list.component';
import { ProvincesListModule } from './modules/provinces-list/provinces-list.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProvincesListComponent },
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
