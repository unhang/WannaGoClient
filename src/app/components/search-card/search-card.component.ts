import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
selector: 'go-search-card',
templateUrl: './search-card.component.html',
styleUrls: ['./search-card.component.scss'],
})
export class GoSearchCard implements OnInit {
lang = localStorage.getItem('lang');
textVn: any = {
  title: 'NHẬN PHÒNG NGAY VỚI WANNAGO !!!',
  address: 'Địa điểm',
  addressPlaceholder: 'Nhập địa điểm bạn muốn đến',
  date: 'Ngày đặt',
  people: 'Số người',
  money: 'Mức giá',
  checkIn: 'Ngày đến',
  checkOut: 'Ngày đi',
  searchBtn: 'TÌM KIẾM'
};
textEn: any = {
  title: 'GET YOUR ROOM RIGHT NOW WITH WANNGO !!!',
  address: 'Address',
  addressPlaceholder: 'Where is your place?',
  date: 'Date',
  people: 'People',
  money: 'Money',
  checkIn: 'Check in',
  checkOut: 'Check out',
  searchBtn: 'SEARCH'
};

text: any = {};

city_id: string;
city_name: string;
check_in: string;
check_out: string;
guest_count: number;
pages: number;

showCityArr: boolean;

public cityArr:Array<Object> = [
    {
      "id": "1",
      "code_place": "99",
      "name_place": "An Giang",
      "lang": "VI"
    },
    {
      "id": "2",
      "code_place": "362",
      "name_place": "Bắc Giang",
      "lang": "VI"
    },
    {
      "id": "3",
      "code_place": "130",
      "name_place": "Bắc Kạn",
      "lang": "VI"
    },
    {
      "id": "4",
      "code_place": "206",
      "name_place": "Bạc Liêu",
      "lang": "VI"
    },
    {
      "id": "5",
      "code_place": "33",
      "name_place": "Bắc Ninh",
      "lang": "VI"
    },
    {
      "id": "6",
      "code_place": "46",
      "name_place": "Bảo Lộc",
      "lang": "VI"
    },
    {
      "id": "7",
      "code_place": "188",
      "name_place": "Bến Tre",
      "lang": "VI"
    },
    {
      "id": "8",
      "code_place": "94",
      "name_place": "Bình Định",
      "lang": "VI"
    },
    {
      "id": "9",
      "code_place": "359",
      "name_place": "Bình Liêu",
      "lang": "VI"
    },
    {
      "id": "10",
      "code_place": "194",
      "name_place": "Bình Thuận",
      "lang": "VI"
    },
    {
      "id": "11",
      "code_place": "47",
      "name_place": "Buôn Ma Thuột",
      "lang": "VI"
    },
    {
      "id": "12",
      "code_place": "137",
      "name_place": "Cà Mau",
      "lang": "VI"
    },
    {
      "id": "13",
      "code_place": "212",
      "name_place": "Cam Ranh",
      "lang": "VI"
    },
    {
      "id": "14",
      "code_place": "344",
      "name_place": "Cần Giờ",
      "lang": "VI"
    },
    {
      "id": "15",
      "code_place": "56",
      "name_place": "Cần Thơ",
      "lang": "VI"
    },
    {
      "id": "16",
      "code_place": "129",
      "name_place": "Cao Bằng",
      "lang": "VI"
    },
    {
      "id": "17",
      "code_place": "192",
      "name_place": "Côn Đảo",
      "lang": "VI"
    },
    {
      "id": "18",
      "code_place": "45",
      "name_place": "Đà Lạt",
      "lang": "VI"
    },
    {
      "id": "19",
      "code_place": "42",
      "name_place": "Đà Nẵng",
      "lang": "VI"
    },
    {
      "id": "20",
      "code_place": "341",
      "name_place": "Đắk Nông",
      "lang": "VI"
    },
    {
      "id": "21",
      "code_place": "187",
      "name_place": "Điện Biên",
      "lang": "VI"
    },
    {
      "id": "22",
      "code_place": "191",
      "name_place": "Đông Bắc",
      "lang": "VI"
    },
    {
      "id": "23",
      "code_place": "52",
      "name_place": "Đồng Nai",
      "lang": "VI"
    },
    {
      "id": "24",
      "code_place": "345",
      "name_place": "Đồng Nai",
      "lang": "VI"
    },
    {
      "id": "25",
      "code_place": "199",
      "name_place": "Đồng Tháp",
      "lang": "VI"
    },
    {
      "id": "26",
      "code_place": "108",
      "name_place": "Nghệ An",
      "lang": "VI"
    },
    {
      "id": "27",
      "code_place": "135",
      "name_place": "Hà Giang",
      "lang": "VI"
    },
    {
      "id": "28",
      "code_place": "32",
      "name_place": "Hạ Long",
      "lang": "VI"
    },
    {
      "id": "29",
      "code_place": "361",
      "name_place": "Hà Nam",
      "lang": "VI"
    },
    {
      "id": "30",
      "code_place": "29",
      "name_place": "Hà Nội",
      "lang": "VI"
    },
    {
      "id": "32",
      "code_place": "59",
      "name_place": "Hà Tiên",
      "lang": "VI"
    },
    {
      "id": "33",
      "code_place": "229",
      "name_place": "Hà Tĩnh",
      "lang": "VI"
    },
    {
      "id": "34",
      "code_place": "30",
      "name_place": "Hải Phòng",
      "lang": "VI"
    },
    {
      "id": "35",
      "code_place": "197",
      "name_place": "Hồ Chí Minh",
      "lang": "VI"
    },
    {
      "id": "36",
      "code_place": "363",
      "name_place": "Hòa Bình",
      "lang": "VI"
    },
    {
      "id": "37",
      "code_place": "39",
      "name_place": "Huế",
      "lang": "VI"
    },
    {
      "id": "38",
      "code_place": "193",
      "name_place": "Kiên Giang",
      "lang": "VI"
    },
    {
      "id": "39",
      "code_place": "48",
      "name_place": "Kon Tum",
      "lang": "VI"
    },
    {
      "id": "40",
      "code_place": "37",
      "name_place": "Lạng Sơn",
      "lang": "VI"
    },
    {
      "id": "41",
      "code_place": "38",
      "name_place": "Lào Cai",
      "lang": "VI"
    },
    {
      "id": "42",
      "code_place": "214",
      "name_place": "Long An",
      "lang": "VI"
    },
    {
      "id": "43",
      "code_place": "360",
      "name_place": "Móng Cái",
      "lang": "VI"
    },
    {
      "id": "44",
      "code_place": "232",
      "name_place": "Nam Định",
      "lang": "VI"
    },
    {
      "id": "45",
      "code_place": "44",
      "name_place": "Nha Trang",
      "lang": "VI"
    },
    {
      "id": "46",
      "code_place": "35",
      "name_place": "Ninh Bình",
      "lang": "VI"
    },
    {
      "id": "47",
      "code_place": "106",
      "name_place": "Ninh Thuận",
      "lang": "VI"
    },
    {
      "id": "48",
      "code_place": "49",
      "name_place": "Pleiku",
      "lang": "VI"
    },
    {
      "id": "49",
      "code_place": "51",
      "name_place": "Phan Thiết",
      "lang": "VI"
    },
    {
      "id": "50",
      "code_place": "54",
      "name_place": "Phú Quốc",
      "lang": "VI"
    },
    {
      "id": "51",
      "code_place": "34",
      "name_place": "Phú Thọ",
      "lang": "VI"
    },
    {
      "id": "52",
      "code_place": "121",
      "name_place": "Phú Yên",
      "lang": "VI"
    },
    {
      "id": "53",
      "code_place": "41",
      "name_place": "Quảng Bình",
      "lang": "VI"
    },
    {
      "id": "54",
      "code_place": "198",
      "name_place": "Quảng Ngãi",
      "lang": "VI"
    },
    {
      "id": "55",
      "code_place": "43",
      "name_place": "Quảng Nam",
      "lang": "VI"
    },
    {
      "id": "56",
      "code_place": "196",
      "name_place": "Quảng Ninh",
      "lang": "VI"
    },
    {
      "id": "57",
      "code_place": "40",
      "name_place": "Quảng Trị",
      "lang": "VI"
    },
    {
      "id": "58",
      "code_place": "141",
      "name_place": "Quy Nhơn",
      "lang": "VI"
    },
    {
      "id": "59",
      "code_place": "58",
      "name_place": "Sóc Trăng",
      "lang": "VI"
    },
    {
      "id": "60",
      "code_place": "134",
      "name_place": "Sơn La",
      "lang": "VI"
    },
    {
      "id": "61",
      "code_place": "189",
      "name_place": "Tây Bắc",
      "lang": "VI"
    },
    {
      "id": "62",
      "code_place": "221",
      "name_place": "Tây Nguyên",
      "lang": "VI"
    },
    {
      "id": "63",
      "code_place": "203",
      "name_place": "Tây Ninh",
      "lang": "VI"
    },
    {
      "id": "64",
      "code_place": "55",
      "name_place": "Tiền Giang",
      "lang": "VI"
    },
    {
      "id": "65",
      "code_place": "213",
      "name_place": "Trà Vinh",
      "lang": "VI"
    },
    {
      "id": "66",
      "code_place": "233",
      "name_place": "Thái Bình",
      "lang": "VI"
    },
    {
      "id": "67",
      "code_place": "243",
      "name_place": "Thái Nguyên",
      "lang": "VI"
    },
    {
      "id": "68",
      "code_place": "133",
      "name_place": "Thanh Hóa",
      "lang": "VI"
    },
    {
      "id": "69",
      "code_place": "132",
      "name_place": "Vinh",
      "lang": "VI"
    },
    {
      "id": "70",
      "code_place": "57",
      "name_place": "Vĩnh Long",
      "lang": "VI"
    },
    {
      "id": "71",
      "code_place": "202",
      "name_place": "Vĩnh Phúc",
      "lang": "VI"
    },
    {
      "id": "72",
      "code_place": "53",
      "name_place": "Vũng Tàu",
      "lang": "VI"
    },
    {
      "id": "73",
      "code_place": "231",
      "name_place": "Yên Bái",
      "lang": "VI"
    }
  ];

constructor(private router: Router) { }

ngOnInit() {
  this.text = this.lang === 'en' ? this.textEn : this.textVn;
}

searchNow() {
  if (this.city_name === '' || this.city_name == null) {
    this.showCityArr = false;
  } else {
    this.showCityArr = true;
  }
}

getSelectedValue(placeCode, placeName) {
    this.city_id = placeCode;
    this.city_name = placeName;
    this.showCityArr = false;
    console.log(this.city_id);
}

search() {
  this.router.navigate(
      ['pages', 'tabs', 'explore', 'search'],
      {
        queryParams : {
          city_id: this.city_id,
          check_in: this.check_in,
          check_out: this.check_out,
          guest_count: this.guest_count,
          pages: this.pages
        }
      }
  );
}
}
