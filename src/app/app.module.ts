import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ProvincesListComponent } from './components/provinces-list/provinces-list.component';
import { ProvinceCardComponent } from './components/province-card/province-card.component';
import { FormsModule } from '@angular/forms';
import { ProvinceInfoComponent } from './components/province-info/province-info.component';
import { Page404Component } from './components/page404/page404.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './services/spinner.interceptor';
import { SpinnerModule } from './components/spinner/spinner.module';
import { CityCardComponent } from './components/city-card/city-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    ToolbarComponent,
    FooterComponent,
    ProvincesListComponent,
    ProvinceCardComponent,
    ProvinceInfoComponent,
    Page404Component,
    CityCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SpinnerModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
