import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { NumberComponent } from './number/number.component';
import { CanDeactivateGuard } from './services/confirm-deactivate.service';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'info', component: InfoComponent, canDeactivate: [CanDeactivateGuard]},
  { path: 'number/:number', component: NumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
