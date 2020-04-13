import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'go-favorite-btn',
    templateUrl: './favorite-btn.component.html',
    styleUrls: ['./favorite-btn.component.scss'],
})
export class GoFavoriteBtn implements OnInit {
    @Input() isFavorite = false;

    // TODO: Inject StayService vào Param của constructor
    constructor() {
    }

    ngOnInit() {
    }

    toggleFav() {
        if (this.isFavorite) {
            this.removeFav();
        } else {
            this.addFav();
        }
    }

    removeFav() {
        // TODO: thực các thao tác trong comment sau
        /**
         *
         * mở alert 2 button: 'OK' và 'Thoát',
         * tham khảo behavior của button 'Hủy đặt phòng' của component:  /components/history-card.component.ts,
         * nếu user chọn OK, gọi API remove favorite, sau khi remove, update this.isFavorite = false;
         */

    }

    addFav() {
        // TODO: thực hiện các thao tác trong commnet sau
        /**
         * gọi API add favorite
         * sau khi remove, update this.isFavorite = true;
         */
    }
}

