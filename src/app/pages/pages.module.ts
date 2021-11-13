import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgxPaginationModule } from "ngx-pagination";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
  ],
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class PagesModule {}

export function translateFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
