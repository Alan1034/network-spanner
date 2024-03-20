/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2024-02-27 15:43:05
 * @LastEditTime: 2024-03-20 16:50:40
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \network-spanner\src\components\HTTPStatusTrans\index.ts
 * 
 */
import { onexx } from "./1xx";
import { twoxx } from "./2xx";
import { threexx } from "./3xx";
import { fourxx } from "./4xx";
import { fivexx } from "./5xx";
/**
 * @description: HTTPStatusTrans:传入HTTP状态码，传出对应的中英文描述
 * 1XX	信息，服务器收到请求，需要请求者继续执行操作
 * 2XX	成功，操作被成功接收并处理
 * 3XX	重定向，需要进一步的操作以完成请求。通常，这些状态代码用来重定向
 * 4XX	客户端错误，请求包含语法错误或无法完成请求
 * 5XX	服务器错误，服务器在处理请求的过程中发生了错误
 * @return { EN, CN }
 */
export const HTTPStatus = {
  ...onexx,
  ...twoxx,
  ...threexx,
  ...fourxx,
  ...fivexx,
}

export const HTTPStatusTransFunc = (Status: string | number) => {
  const state = Number(Status)
  const stateInfo = HTTPStatus[state]
  if (!stateInfo) {
    return {}
  }
  return stateInfo
}