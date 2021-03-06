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

export interface CommentPost { 
    /**
     * id user
     */
    userId?: number;
    /**
     * id của stay được comment
     */
    stayId?: number;
    /**
     * Nội dung của comment
     */
    comment?: string;
    /**
     * Điểm cho stay, không quá 5
     */
    commentRate?: number;
}