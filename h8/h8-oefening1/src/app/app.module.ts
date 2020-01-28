import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { FillPipe } from './pipes/fill.pipe';
import { HeroService } from './services/hero.service';
import { InMemoryApiService } from './services/in-memory-api.service';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SearchComponent,
    FillPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService, {delay: 2000}),
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [HeroService, LoaderService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
