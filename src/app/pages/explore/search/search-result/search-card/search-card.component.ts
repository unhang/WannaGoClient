import {Component, Input, OnInit} from '@angular/core';
import {StayDetail} from 'src/swagger';
import {NavController} from '@ionic/angular';


@Component({
    selector: 'app-search-card',
    templateUrl: './search-card.component.html',
    styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent implements OnInit {

    isMobile = window.innerWidth < 767;
    slicePoint = this.isMobile ? 33 : 24;
    @Input() stay: StayDetail;

    topSlideOpts: any = {
        preloadImages: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: false,
            // renderBullet: (index, className) => {
            //     return '<span class="' + className + '">' + (index + 1) + '</span>';
            // }
            bulletClass: 'go-bullet',
            bulletActiveClass: 'go-bullet-activate'
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    };

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }


    goToStayDetail(stayId: number) {
        this.navCtrl.navigateForward(['/pages', 'tabs', 'explore', stayId, 'stay'], {queryParamsHandling: 'preserve'});
    }

}
