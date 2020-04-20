import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StayDetailPageRoutingModule} from './stay-detail-routing.module';

import {StayDetailPage} from './stay-detail.page';
import {ComponentModule} from '../../../components/component.module';
import {GalleryCoverComponent} from './gallery-cover/gallery-cover.component';
import {HostCardComponent} from './host-card/host-card.component';
import {DescriptionComponent} from './description/description.component';
import {MapPreviewComponent} from './map-preview/map-preview.component';
import {BookingCardComponent} from './booking-card/booking-card.component';
import {CommentComponent} from './comment/comment.component';
import {NzInputModule, NzRateModule} from 'ng-zorro-antd';
import {CommentDetailComponent} from './comment/comment-detail/comment-detail.component';
import {PostCommentComponent} from './comment/post-comment/post-comment.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StayDetailPageRoutingModule,
        ComponentModule,
        NzInputModule,
        NzRateModule,
        AgmCoreModule
    ],
    declarations: [
        StayDetailPage,
        GalleryCoverComponent,
        HostCardComponent,
        DescriptionComponent,
        MapPreviewComponent,
        BookingCardComponent,
        CommentComponent,
        CommentDetailComponent,
        PostCommentComponent,
    ]
})
export class StayDetailPageModule {
}
