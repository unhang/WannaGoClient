import { Component, OnInit } from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {AuthService} from '../../../services/auth.service';
import {UserInfo, UserService} from '../../../../swagger';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.page.html',
  styleUrls: ['./profile-info.page.scss'],
})
export class ProfileInfoPage implements OnInit {
  headerStyle = HeaderStyle;
  lang = localStorage.getItem('lang');
  textVn: any = {
    header: 'Thông tin tài khoản',
    btn1: 'Cài đặt tài khoản',
    btn2: 'Đặt chỗ của tôi'
  };

  textEn: any = {
    header: 'Account information',
    btn1: 'Profile setting',
    btn2: 'My bookings'
  };

  text: any = {};

  userInfo: UserInfo = this.authService.getUserInfo();
  updateUserInfo: FormGroup = this.fb.group({
    userId: this.fb.control(this.userInfo.userId, Validators.required),
    emailAddress: this.fb.control(this.userInfo.emailAddress, [Validators.required, Validators.email]),
    name: this.fb.control(this.userInfo.name, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    phone: this.fb.control(this.userInfo.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  });

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private userService: UserService,
              public toastController: ToastController) {
    this.text = this.lang === 'ev' ? this.textEn : this.textVn;
  }

  ngOnInit() {
  }

  update() {
    const userForm: UserInfo = {...this.updateUserInfo.value};
    this.userService.update(userForm).subscribe((userInfo: UserInfo) => {
        this.authService.setUserInfo(userInfo);
        this.presentToast();
        }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cập nhập thông tin thành công!',
      duration: 2000
    });
    toast.present();
  }
}
