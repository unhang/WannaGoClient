import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NightCountService {

  constructor() { }

  nightCount(checkIn: string, checkOut: string): number {
    const checkInStr = checkIn.split('-');
    const checkOutStr = checkOut.split('-');
    const checkInOutput = new Date(+checkInStr[2], +checkInStr[1], +checkInStr[0]);
    const checkOutOutput = new Date(+checkOutStr[2], +checkOutStr[1], +checkOutStr[0]);
    return (checkOutOutput.getTime() - checkInOutput.getTime());
  }
}
