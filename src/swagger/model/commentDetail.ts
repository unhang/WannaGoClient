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

export interface CommentDetail { 
    /**
     * Id của comment
     */
    commentId?: number;
    /**
     * nội dung comment
     */
    comment?: string;
    /**
     * id của user đã post comment
     */
    userId?: number;
    /**
     * điểm của user cho stay, tối đa 5
     */
    commentRate?: number;
    /**
     * tên của user
     */
    userName?: string;
    /**
     * url đến avatar của user
     */
    userAvatar?: string;
}