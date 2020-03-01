import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class GoFormLoginComponent implements OnInit {
  lang = localStorage.getItem('lang');
  textVn: any = {
    step1Text: 'Thông tin đặt chỗ',
    step12Text: 'THÔNG TIN CÁ NHÂN',
    step13Text: '2 đêm tại S. CAMELLIA 2 _ Managed by SONG CAT HOME',
    numCustomers: 'Số khách',
    customerName: 'Tên khách hàng',
    customerPhone: 'Số điện thoại',
    customerEmail: 'Email',
    startDateBookinng: 'Ngày nhận phòng',
    endDateBookinng: 'Ngày trả phòng',
    step1TextDescription: 'Kiểm tra lại thông đặt phòng của quý khách hàng',
    bookingInfoBtn: 'Xác nhận thông tin thanh toán'
  };
  textEn: any = {
    step1Text: 'Booking information',
    step12Text: 'Customer information',
    step13Text: '2 đêm tại S. CAMELLIA 2 _ Managed by SONG CAT HOME',
    numCustomers: 'Amout members',
    customerName: 'Customer name',
    customerPhone: 'Customer Phone Number',
    customerEmail: 'Email',
    startDateBookinng: 'Start day booking',
    endDateBookinng: 'End day booking',
    step1TextDescription: 'Check information of your booking',
    bookingInfoBtn: 'Booking info confirm'
  };
  text: any = {};

  constructor() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

  ngOnInit() {}

}
