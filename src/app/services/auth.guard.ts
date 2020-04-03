import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
    constructor(private router: Router,
                private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isAuthenticated) {
            return true;
        }
        this.router.navigate(['/pages', 'tabs', 'profile', 'login'], {
            queryParams: {returnUrl: state.url}
        });
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticated) {
            return true;
        }

    }
}
