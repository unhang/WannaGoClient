import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpinnerOptService {
    lang = localStorage.getItem('lang');
    text
    constructor() {
        this.text = this.lang === 'en' ? 'please wait...' : 'Xin chờ...';
    }

    createOpts(): any {
        return {
            mode: 'md',
            message: this.text,
            spinner: 'dots'
        };
    }
}
