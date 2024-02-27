/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2024-02-27 15:47:50
 * @LastEditTime: 2024-02-27 15:54:18
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \network-spanner\src\components\HTTPStatusTrans\4xx.ts
 * 
 */
export const fourxx = {
  400: {
    EN: "Bad Request",
    CN: "错误请求"
  },
  401: {
    EN: "Unauthorized",
    CN: "未授权"
  },
  403: {
    EN: "Forbidden",
    CN: "拒绝授权访问"
  },
  404: {
    EN: "Not Found",
    CN: "未找到"
  },
  405: {
    EN: "Method Not Allowed",
    CN: "方法禁用"
  },
  406: {
    EN: "Not Acceptable",
    CN: "不接受"
  },
  407: {
    EN: "Proxy Authentication Required",
    CN: "需要代理授权"
  },
  408: {
    EN: "Request Time-out",
    CN: "请求超时"
  },
  409: {
    EN: "Conflict",
    CN: "冲突"
  },
  410: {
    EN: "Gone",
    CN: "已删除"
  },
  411: {
    EN: "Length Required",
    CN: "需要有效长度"
  },
  412: {
    EN: "Precondition Failed",
    CN: "未满足前提条件"
  },
  413: {
    EN: "Request Entity Too Large",
    CN: "请求实体过大"
  },
  414: {
    EN: "Request-URI Too Large",
    CN: "请求的URI过长"
  },
  415: {
    EN: "Unsupported Media Type",
    CN: "不支持的媒体类型"
  },
  416: {
    EN: "Requested range not satisfiable",
    CN: "请求范围不符合要求"
  },
  417: {
    EN: "Expectation Failed",
    CN: "未满足期望值"
  },
}