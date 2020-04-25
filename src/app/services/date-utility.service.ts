import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilityService {

  constructor() { }

  /*
  * @return Date format as 'dd-MM-yyyy'
  * */
  convertDate(inputDate): string {
    return ('0' + inputDate.getDate()).slice(-2) + '-' +
        ('0' + (inputDate.getMonth() + 1)).slice(-2) + '-' +
        inputDate.getFullYear();
  }
}
