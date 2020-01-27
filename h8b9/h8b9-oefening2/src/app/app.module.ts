import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { NumberComponent } from './number/number.component';
import { routes } from './app-routing.module';
import { CanDeactivateGuard } from './services/confirm-deactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
