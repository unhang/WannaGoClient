import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentDetail, CommentPost, StayService} from '../../../../../../swagger';
import {AuthService} from '../../../../../services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-post-comment',
    templateUrl: './post-comment.component.html',
    styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent implements OnInit {
    lang = localStorage.getItem('lang');
    textVn: any = {
        addCmtBtn: 'Viết bình luận',
        addRate: 'Số điểm bình chọn',
        addComment: 'Xin hãy viết cảm nhận'
    };
    textEn: any = {
        addCmtBtn: 'Add a comment',
        addRate: 'Please rate this stay',
        addComment: 'Comment your review here'
    };
    txt: any = {};
    postComment: CommentPost;

    @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();
    @Output() onPosted: EventEmitter<CommentDetail> = new EventEmitter<CommentDetail>();
    @Input() stayId: number;
    @Input() userId: number;
    inputComment: string;
    inputStar = 5;

    constructor(private stayService: StayService,
                private route: ActivatedRoute,
                private authService: AuthService) {
        this.txt = this.lang === 'en' ? this.textEn : this.textVn;
    }


    ngOnInit() {
    }

    submitComment() {
        this.postComment = {
            stayId: this.stayId,
            userId: this.authService.getUserInfo().userId,
            comment: this.inputComment,
            commentRate: this.inputStar
        };
        this.stayService.postStayComment(this.postComment)
            .subscribe((res) => {
                this.posted();
            });
    }

    cancel() {
        this.onCancel.emit();
    }

    posted() {
        this.onPosted.emit(this.postComment);
    }

}
