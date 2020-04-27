import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-language',
    templateUrl: './language.page.html',
    styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
    lang = localStorage.getItem('lang') || 'vn';
    LANG = {
        EN: 'EN',
        VN: 'VN'
    };
    selectedLang = this.lang === 'en' ? this.LANG.EN : this.LANG.VN;
    textEn: any = {
        header: 'Language options',
        title: 'Change language',
        description: 'We always try to make our user experience friendly. Choose the language that suits you best.',
        section: 'Languages',
        languages: {
            EN: 'English',
            VN: 'Vietnamese'
        },
        saveBtn: 'Save'
    };
    textVn: any = {
        header: 'Tùy chọn ngôn ngữ',
        title: 'Thay đổi ngôn ngữ',
        description: 'Chúng tôi luôn luôn cố gắng tạo nên sự thân thiện cho trải nghiệm người dùng. Hãy chọn ngôn ngữ phù hợp với bạn nhất.',
        section: 'Ngôn ngữ',
        languages: {
            EN: 'Tiếng Anh',
            VN: 'Tiếng Việt'
        },
        saveBtn: 'Lưu'
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;


    constructor() {
    }

    ngOnInit() {
    }

    saveDefaultLanguage() {
        localStorage.setItem('lang', this.selectedLang.toLocaleLowerCase());
        location.reload();
    }
}
