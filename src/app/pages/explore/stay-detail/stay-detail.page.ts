import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {CommentDetail, HostInfo, HostService, StayDetail, StayService} from '../../../../swagger';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MockDataService} from '../../../service/mock-data.service';

@Component({
    selector: 'app-stay-detail',
    templateUrl: './stay-detail.page.html',
    styleUrls: ['./stay-detail.page.scss'],
})
export class StayDetailPage implements OnInit {
    headerStyle = HeaderStyle;
    lang = localStorage.getItem('lang');

    stayId: number;
    stayDetail: StayDetail;
    hostInfo: HostInfo;
    stayComments: CommentDetail[] = [];

    constructor(private stayService: StayService,
                private hostService: HostService,
                private router: Router,
                private route: ActivatedRoute,
                private mockDataService: MockDataService) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            console.log(paramMap.get('id'));
            if (!paramMap.has('id')) {
                this.router.navigate(['/explore']);
            } else {
                this.stayId = (+paramMap.get('id')) as number;
                this.getStayDetail();
            }
        });
    }

    scrollCheck($event) {
         console.log($event);
    }

    getStayDetail() {
        console.log(this.stayId);
        // @ts-ignore
        this.stayService.getStayDetail(this.stayId, this.lang)
            .subscribe(stayDetail => {
                this.stayDetail = stayDetail;
                this.stayDetail.imgUrls = this.mockDataService.multiply<string>(this.stayDetail.imgUrls, 10);
                this.getHostInfo(this.stayDetail.hostId);
                this.getStayComment();
            });
    }

    getHostInfo(hostId: number) {
        this.hostService.getHostInfo(hostId, this.lang)
            .subscribe(hostInfo => this.hostInfo = hostInfo);
    }

    getStayComment() {
        // @ts-ignore
        this.stayService.getStayComments(this.stayId, this.lang)
            .subscribe(comment => this.stayComments = comment);
    }
}
