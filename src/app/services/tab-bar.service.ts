import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TabBarService {
    constructor() {
    }
    hideTabBar = new Subject<boolean>();
}
