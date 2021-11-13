import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';

import { RequestService } from './service/requests.service';
import { RouteConstants } from './constants/route-counstants';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  BuildingFilterPipe,
  CityFilterPipe,
  RateFilterPipe,
  StateFilterPipe,
} from './service/pipe-filters.service';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityFilterPipe,
    StateFilterPipe,
    RateFilterPipe,
    BuildingFilterPipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PagesModule,
  ],
  providers: [RequestService, RouteConstants],
  bootstrap: [AppComponent],

})
export class AppModule {}

