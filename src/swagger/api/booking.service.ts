/**
 * WannaGo Client API
 * This is a sample Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Booking } from '../model/booking';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

    protected basePath = 'https://virtserver.swaggerhub.com/unhang/WannaGo/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * addBooking()
     * tạo booking stay cho user
     * @param body Booking object thêm vào record
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addBooking(body: Booking, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<Booking>;
    public addBooking(body: Booking, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Booking>>;
    public addBooking(body: Booking, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Booking>>;
    public addBooking(body: Booking, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addBooking.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lang !== undefined && lang !== null) {
            queryParameters = queryParameters.set('lang', <any>lang);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Booking>('post',`${this.basePath}/api/booking/add`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * cancelBookingById()
     * bật delete flag cho booking theo bookingId gửi kèm request
     * @param bookingId 
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cancelBookingById(bookingId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public cancelBookingById(bookingId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public cancelBookingById(bookingId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public cancelBookingById(bookingId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (bookingId === null || bookingId === undefined) {
            throw new Error('Required parameter bookingId was null or undefined when calling cancelBookingById.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lang !== undefined && lang !== null) {
            queryParameters = queryParameters.set('lang', <any>lang);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/api/booking/${encodeURIComponent(String(bookingId))}/cancel-booking`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllBookedList()
     * get danh sách tất cả booking đã tạo, bao gồm cả booking bị cancel với delete flag
     * @param userId 
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllBookedList(userId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Booking>>;
    public getAllBookedList(userId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Booking>>>;
    public getAllBookedList(userId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Booking>>>;
    public getAllBookedList(userId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getAllBookedList.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lang !== undefined && lang !== null) {
            queryParameters = queryParameters.set('lang', <any>lang);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Booking>>('get',`${this.basePath}/api/booking/${encodeURIComponent(String(userId))}/all-booked-list`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBookingById()
     * lấy thông tin booking theo booking_id
     * @param bookingId 
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBookingById(bookingId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<Booking>;
    public getBookingById(bookingId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Booking>>;
    public getBookingById(bookingId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Booking>>;
    public getBookingById(bookingId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (bookingId === null || bookingId === undefined) {
            throw new Error('Required parameter bookingId was null or undefined when calling getBookingById.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lang !== undefined && lang !== null) {
            queryParameters = queryParameters.set('lang', <any>lang);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Booking>('get',`${this.basePath}/api/booking/${encodeURIComponent(String(bookingId))}/get`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBookingHistory()
     * lấy danh sách booking của user
     * @param userId userId dùng để get lịch sử booking
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBookingHistory(userId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Booking>>;
    public getBookingHistory(userId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Booking>>>;
    public getBookingHistory(userId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Booking>>>;
    public getBookingHistory(userId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getBookingHistory.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lang !== undefined && lang !== null) {
            queryParameters = queryParameters.set('lang', <any>lang);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Booking>>('get',`${this.basePath}/api/booking/${encodeURIComponent(String(userId))}/history`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCompletedList()
     * get danh sách booking đã tạo, với status succeeded
     * @param userId 
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCompletedList(userId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Booking>>;
    public getCompletedList(userId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Booking>>>;
    public getCompletedList(userId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Booking>>>;
    public getCompletedList(userId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getCompletedList.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lang !== undefined && lang !== null) {
            queryParameters = queryParameters.set('lang', <any>lang);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Booking>>('get',`${this.basePath}/api/booking/${encodeURIComponent(String(userId))}/completed-list`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPendingList()
     * get danh sách booking đã tạo, với status pending
     * @param userId 
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPendingList(userId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Booking>>;
    public getPendingList(userId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Booking>>>;
    public getPendingList(userId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Booking>>>;
    public getPendingList(userId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getPendingList.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lang !== undefined && lang !== null) {
            queryParameters = queryParameters.set('lang', <any>lang);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Booking>>('get',`${this.basePath}/api/booking/${encodeURIComponent(String(userId))}/pending-list`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateBooking()
     * tạo booking stay cho user, căn bản giống như addBooking, chỉ khác tên
     * @param body Booking object thêm vào record
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateBooking(body: Booking, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<Booking>;
    public updateBooking(body: Booking, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Booking>>;
    public updateBooking(body: Booking, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Booking>>;
    public updateBooking(body: Booking, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateBooking.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lang !== undefined && lang !== null) {
            queryParameters = queryParameters.set('lang', <any>lang);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Booking>('put',`${this.basePath}/api/booking/update`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
