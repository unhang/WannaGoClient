import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommentDetail, StayService} from '../../../../../swagger';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../../services/auth.service';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit, AfterViewInit {
    lang = localStorage.getItem('lang');
    textVn: any = {
        cardTitle: 'Bình luận của khách hàng',
        noComments: 'Chưa có bình luận nào',
        addCmtBtn: 'Viết bình luận',
        addRate: 'Số điểm bình chọn',
        addComment: 'Xin hãy viết cảm nhận'
    };
    textEn: any = {
        cardTitle: 'Customer\'s comments',
        noComments: 'No comments',
        addCmtBtn: 'Add a comment',
        addRate: 'Please rate this stay',
        addComment: 'Comment your review here'
    };
    txt: any = {};

    loading = true;

    comments: CommentDetail[] = [];
    postCommentMode = false;

    stayId: number = +this.route.snapshot.params['id'];
    userId: number = this.authService.getUserInfo()?.userId;

    constructor(private stayService: StayService,
                private route: ActivatedRoute,
                private authService: AuthService) {
        this.txt = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.stayService.getStayComments(this.stayId, this.lang)
            .subscribe((commentDetail: CommentDetail[]) => {
                this.comments = commentDetail;
                this.loading = false;
            });
    }

    postSucceeded($event) {
        this.comments.push($event);
        this.postCommentMode = false;
    }

    onPostComment() {
        // check neu nguoi dung da login, thi cho phep post comment
        if (!this.authService.isAuthenticated) {
            // TODO: mở modal đăng nhâp, đăng nhập thành công thì cho phép tiếp tục tiến trình,
            return;
        }
        this.postCommentMode = true;
    }
}
