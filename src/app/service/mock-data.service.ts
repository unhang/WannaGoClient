import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  multiply<T>(dataList: T[], multiplyTimes): T[] {
    const data  = dataList[0];
    for (let i = 1; i < multiplyTimes; i++) {
      dataList = [...dataList, data];
    }
    return dataList;
  }
}
