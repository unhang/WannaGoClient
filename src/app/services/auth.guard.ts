import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
    constructor(private segments: UrlSegment,
                private router: Router,
                private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.getAccessToken()) {
            return true;
        }
        this.router.navigate(['/pages', 'tabs', 'profile', 'sign-in'], {
            queryParams: {redirect: state.url}
        });
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.getAccessToken()) {
            return true;
        }

    }
}
