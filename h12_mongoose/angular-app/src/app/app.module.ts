import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarService } from './services/car.service';
import { CreateCarComponent } from './create-car/create-car.component';
import { RemoveCarComponent } from './remove-car/remove-car.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { BankAccountService } from './services/bank-account.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    CarListComponent,
    CreateCarComponent,
    RemoveCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [CarService, CanActivateGuard, BankAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
