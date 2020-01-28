import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { RemoveCarComponent } from './remove-car/remove-car.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CreateCarComponent } from './create-car/create-car.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CarListComponent },
  { path: 'list/:id', component: CarDetailComponent },
  { path: 'remove/:id', component: RemoveCarComponent, canActivate: [CanActivateGuard] },
  { path: 'create', component: CreateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
