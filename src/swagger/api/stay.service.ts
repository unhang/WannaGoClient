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

import { CommentDetail } from '../model/commentDetail';
import { CommentPost } from '../model/commentPost';
import { HighlightPlaces } from '../model/highlightPlaces';
import { StayByTypeArray } from '../model/stayByTypeArray';
import { StayDetail } from '../model/stayDetail';
import { StayFavorite } from '../model/stayFavorite';
import { StaySearch } from '../model/staySearch';
import { UserFavorite } from '../model/userFavorite';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class StayService {

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
     * addFavorite()
     * thêm 1 record vào table t_stay_favorite
     * @param body Thông tin post của comment
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addFavorite(body?: StayFavorite, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<StayFavorite>;
    public addFavorite(body?: StayFavorite, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<StayFavorite>>;
    public addFavorite(body?: StayFavorite, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<StayFavorite>>;
    public addFavorite(body?: StayFavorite, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.request<StayFavorite>('post',`${this.basePath}/api/stay/add-favorite`,
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
     * getFavorite()
     * Lấy danh sách id của các stay đã like bằng user_id đi kem req
     * @param userId 
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFavorite(userId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<UserFavorite>>;
    public getFavorite(userId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UserFavorite>>>;
    public getFavorite(userId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UserFavorite>>>;
    public getFavorite(userId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getFavorite.');
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

        return this.httpClient.request<Array<UserFavorite>>('get',`${this.basePath}/api/stay/${encodeURIComponent(String(userId))}/get-favorite`,
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
     * getSlicesByType()
     * lấy danh sách \&quot;TÌM THEO LOẠI CHỖ NGHỈ\&quot; tìm nơi ở theo địa điểm
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSlicesByType(lang?: string, observe?: 'body', reportProgress?: boolean): Observable<StayByTypeArray>;
    public getSlicesByType(lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<StayByTypeArray>>;
    public getSlicesByType(lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<StayByTypeArray>>;
    public getSlicesByType(lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<StayByTypeArray>('get',`${this.basePath}/api/stay/get-slices-by-type`,
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
     * getStayComments()
     * get comment của stay theo id
     * @param stayId lấy comment của stay thông qua stay_id
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getStayComments(stayId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CommentDetail>>;
    public getStayComments(stayId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CommentDetail>>>;
    public getStayComments(stayId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CommentDetail>>>;
    public getStayComments(stayId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (stayId === null || stayId === undefined) {
            throw new Error('Required parameter stayId was null or undefined when calling getStayComments.');
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

        return this.httpClient.request<Array<CommentDetail>>('get',`${this.basePath}/api/stay/${encodeURIComponent(String(stayId))}/comments`,
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
     * getStayDetail()
     * lấy thông tin chi tiết của stay, trong trang
     * @param stayId id của stay
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getStayDetail(stayId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<StayDetail>;
    public getStayDetail(stayId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<StayDetail>>;
    public getStayDetail(stayId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<StayDetail>>;
    public getStayDetail(stayId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (stayId === null || stayId === undefined) {
            throw new Error('Required parameter stayId was null or undefined when calling getStayDetail.');
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

        return this.httpClient.request<StayDetail>('get',`${this.basePath}/api/stay/${encodeURIComponent(String(stayId))}/detail`,
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
     * postStayComment()
     * post comment
     * @param body Thông tin post của comment
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postStayComment(body?: CommentPost, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<CommentPost>;
    public postStayComment(body?: CommentPost, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommentPost>>;
    public postStayComment(body?: CommentPost, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommentPost>>;
    public postStayComment(body?: CommentPost, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.request<CommentPost>('post',`${this.basePath}/api/stay/comments`,
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
     * removeFavorite()
     * remove 1 stay đã liked
     * @param favoriteId 
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeFavorite(favoriteId: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeFavorite(favoriteId: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeFavorite(favoriteId: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeFavorite(favoriteId: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (favoriteId === null || favoriteId === undefined) {
            throw new Error('Required parameter favoriteId was null or undefined when calling removeFavorite.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/api/stay/${encodeURIComponent(String(favoriteId))}/remove-favorite`,
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
     * search()
     * danh sách tìm kiếm
     * @param checkIn Ngày check in
     * @param checkOut Ngày check out
     * @param cityId Thành phố lựa chọn
     * @param guestCount Số lượng khách
     * @param page trang hiện tại
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public search(checkIn: string, checkOut: string, cityId: number, guestCount: number, page: number, lang?: string, observe?: 'body', reportProgress?: boolean): Observable<StaySearch>;
    public search(checkIn: string, checkOut: string, cityId: number, guestCount: number, page: number, lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<StaySearch>>;
    public search(checkIn: string, checkOut: string, cityId: number, guestCount: number, page: number, lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<StaySearch>>;
    public search(checkIn: string, checkOut: string, cityId: number, guestCount: number, page: number, lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (checkIn === null || checkIn === undefined) {
            throw new Error('Required parameter checkIn was null or undefined when calling search.');
        }

        if (checkOut === null || checkOut === undefined) {
            throw new Error('Required parameter checkOut was null or undefined when calling search.');
        }

        if (cityId === null || cityId === undefined) {
            throw new Error('Required parameter cityId was null or undefined when calling search.');
        }

        if (guestCount === null || guestCount === undefined) {
            throw new Error('Required parameter guestCount was null or undefined when calling search.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling search.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lang !== undefined && lang !== null) {
            queryParameters = queryParameters.set('lang', <any>lang);
        }
        if (checkIn !== undefined && checkIn !== null) {
            queryParameters = queryParameters.set('check_in', <any>checkIn);
        }
        if (checkOut !== undefined && checkOut !== null) {
            queryParameters = queryParameters.set('check_out', <any>checkOut);
        }
        if (cityId !== undefined && cityId !== null) {
            queryParameters = queryParameters.set('city_id', <any>cityId);
        }
        if (guestCount !== undefined && guestCount !== null) {
            queryParameters = queryParameters.set('guest_count', <any>guestCount);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
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

        return this.httpClient.request<StaySearch>('get',`${this.basePath}/api/stay/search`,
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
     * stayGetHighlightPlaces()
     * get danh sách địa điểm nổi bật trên trang chủ
     * @param lang Ngôn ngữ（vn） - vn - en 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public stayGetHighlightPlaces(lang?: string, observe?: 'body', reportProgress?: boolean): Observable<HighlightPlaces>;
    public stayGetHighlightPlaces(lang?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HighlightPlaces>>;
    public stayGetHighlightPlaces(lang?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HighlightPlaces>>;
    public stayGetHighlightPlaces(lang?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<HighlightPlaces>('get',`${this.basePath}/api/stay/get-highlight-places`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
