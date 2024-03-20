/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2024-02-27 15:43:05
 * @LastEditTime: 2024-03-20 16:56:13
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \network-spanner\src\components\MiniprogramErrno\index.ts
 * 
 */
import { zeroxx } from "./0xx";
import { onexx } from "./1xx";
import { fivexx } from "./5xx";
import { sixxx } from "./6xx";
import { sevenxx } from "./7xx";
import { elevenxx } from "./11xx";
import { thirteenxx } from "./13xx";
import { fourteenxx } from "./14xx";
import { fifteenxx } from "./15xx";
import { twentyxx } from "./20xx";
/**
 * @description: 微信小程序errno错误码
 * https://developers.weixin.qq.com/miniprogram/dev/framework/usability/PublicErrno.html#%E8%83%8C%E6%99%AF%E4%BB%8B%E7%BB%8D
 * errno 错误码一般为 7 位数，第 1 - 2 位标识 API 接口的一级类目，第 3 - 4 位标识 API 接口的二级类目，第 5 - 7 位表示具体的错误类型。
 *例如： errno 错误码为 1504003 时，15 表示 API 接口的一级类目为 设备，04 表示 API 接口的二级类目为 NFC，003 表示具体的错误类型。
 *目前已接入 errno 的 API 接口涉及的类目包括：
 *
 *一级类目：00 - 通用错误码
 *一级类目：01 - 基础
 * 二级类目：00 - 通用基础错误
 * 二级类目：03 - 更新
 * 二级类目：09 - 加密
 *一级类目：06 - 网络
 * 二级类目：00 - 通用网络错误
 * 二级类目：02 - 发起请求
 * 二级类目：03 - 下载
 * 二级类目：04 - 上传
 * 二级类目：06 - mDNS
 *一级类目：07 - 支付
 * 二级类目：00 - 通用支付错误
 * 二级类目：01 - 支付默认二级类目
 *一级类目：11 - 媒体
 * 二级类目：07 - 实时音视频
 *一级类目：13 - 文件
 * 二级类目：00 - 通用文件错误
 * 二级类目：01 - 文件默认二级类目
 * 二级类目：02 - fd接口
 *一级类目：14 - 开放接口
 * 二级类目：16 - 视频号
 *一级类目：15 - 设备
 * 二级类目：00 - 通用设备错误
 * 二级类目：04 - NFC
 * 二级类目：05 - Wi-Fi
 * 二级类目：09 - 低功耗蓝牙
 * 二级类目：10 - 蓝牙
 *一级类目：20 - AI
 * 二级类目：02 - 人脸识别
 * 二级类目：03 - vision kit
 * 二级类目：04 - 机器学习
 *一级类目与二级类目名称 和 API 接口文档的类目名称基本保持一致。
 * @return { EN, CN }
 */
export const MiniprogramErrnoStatus = {
  ...zeroxx,
  ...onexx,
  ...fivexx,
  ...sixxx,
  ...sevenxx,
  ...elevenxx,
  ...thirteenxx,
  ...fourteenxx,
  ...fifteenxx,
  ...twentyxx,
}

export const MiniprogramErrnoFunc = (Status: string | number) => {
  const state = Number(Status)
  const stateInfo = MiniprogramErrnoStatus[state]
  if (!stateInfo) {
    return {}
  }
  return stateInfo
}