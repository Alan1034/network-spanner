/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2024-02-27 15:56:25
 * @LastEditTime: 2024-02-27 15:56:37
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \network-spanner\src\components\HTTPStatusTrans\5xx.ts
 * 
 */
export const fivexx = {
  500: {
    EN: "Internal Server Error",
    CN: "服务器内部错误"
  },
  501: {
    EN: "Not Implemented",
    CN: "尚未实施"
  },
  502: {
    EN: "Bad Gateway",
    CN: "错误网关"
  },
  503: {
    EN: "Service Unavailable",
    CN: "服务不可用"
  },
  504: {
    EN: "Gateway Time-out",
    CN: "网关超时"
  },
  505: {
    EN: "HTTP Version not supported",
    CN: "HTTP 版本不受支持"
  },
}