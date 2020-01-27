import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoComponent } from '../info/info.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<InfoComponent> {
    canDeactivate(
        component: InfoComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (component.clicked) {
            return true;
        } 

        return false;
    }
}