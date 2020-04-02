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
 */

export interface Booking { 
    /**
     * - null khi gọi api/booking/add - booking id phải có giá trị khi gọi api/booking/update 
     */
    bookingId?: number;
    /**
     * id cuả user đặt booking
     */
    userId?: number;
    /**
     * Tên của khách hàng, phải trùng tên CMND
     */
    customerName?: string;
    /**
     * Số đt liên hệ xác minh khi đặt phòng
     */
    phone?: string;
    /**
     * email gửi cho người booking, có thể khác email của tài khoản
     */
    email?: string;
    /**
     * id của stay được booking
     */
    stayId?: number;
    /**
     * lấy tên cuả stay bỏ ở đây
     */
    stayName?: string;
    /**
     * ngày check in
     */
    checkIn?: string;
    /**
     * ngày check out
     */
    checkOut?: string;
    /**
     * Số lượng khách đăng booking
     */
    guestCount?: number;
    /**
     * giá tiền tính theo check-in và check-out
     */
    totalPrice?: number;
    /**
     * - 'Chỉ trả cho client khi đã tạo PaymentIntent phía server' - 'ban đầu Null khi client postt request booking' 
     */
    stripePaymentId?: string;
    /**
     * - 'Chỉ trả cho client khi đã tạo PaymentIntent phía server' - 'ban đầu Null khi client postt request booking' 
     */
    stripePaymentClientSecret?: string;
    /**
     * - 'Succeess | thành công' - 'incomplete | chưa hoàn thành' 
     */
    status?: string;
}
