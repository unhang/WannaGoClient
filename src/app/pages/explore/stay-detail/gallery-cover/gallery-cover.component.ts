import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-gallery-cover',
    templateUrl: './gallery-cover.component.html',
    styleUrls: ['./gallery-cover.component.scss'],
})
export class GalleryCoverComponent implements OnInit {
    @Input() imgUrls = [];
    // @ViewChild('galleryThumbs', null) galleryThumbs: ElementRef;
    galleryThumbsOpts: any = {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    };
    topSlideOpts: any = {
        preloadImages: true,
        slidesPerView: 2.5,
        spaceBetween: 0,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        breakpoints: {
            // when window width is < 480px
            767: {
                slidesPerView: 1,
                // spaceBetween: 30
            },
            // when window width is >= 640px
            // 1200: {
            //     slidesPerView: 2.5,
            // }
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },

    };


    constructor() {
    }

    ngOnInit() {
    }

}
