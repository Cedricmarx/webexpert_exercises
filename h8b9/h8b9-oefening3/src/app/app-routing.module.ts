import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventResolve } from './resolvers/event.resolver';
import { CanActivateRouteGuard } from './guards/can-activate-route.guard';
import { RemoveEventComponent } from './remove-event/remove-event.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', component: CreateEventComponent },
  { path: 'list', component: EventListComponent },
  { path: 'list/:id', component: EventDetailComponent, resolve: { event: EventResolve } },
  { path: 'remove/:id', component: RemoveEventComponent, resolve: { event: EventResolve}, canActivate: [CanActivateRouteGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EventResolve, CanActivateRouteGuard]
})
export class AppRoutingModule { }
