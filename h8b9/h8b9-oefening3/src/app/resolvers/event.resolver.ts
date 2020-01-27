import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Injectable()
export class EventResolve implements Resolve<Event> {

    constructor(private eventService: EventService, private router: Router) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        let event: Event = this.eventService.getEvent(parseInt(route.paramMap.get('id')));
        if (event == null) {
            this.router.navigate(['404']); 
            return null;
        } else {
            return event;
        }
    }
}
