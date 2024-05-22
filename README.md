# 提供各种前端网络需要用到的工具 Provide various tools for front-end network

## 传入HTTP状态码，传出对应的中英文描述

使用usage:

import { HTTPStatusTrans } from "network-spanner"

/**
 * @description: HTTPStatusTrans:传入HTTP状态码，传出对应的中英文描述

 * afferent http status, return corresponding EN CN description

 * @return { EN, CN }
 */

 

 ```
 const { EN = '', CN = "" } = HTTPStatusTrans(status)
 
 console.error(`${EN ? EN + "," : ""}${CN ? CN + "," : ""}${err.error?.message || err.statusText}`)
 ```

 ​    

参考资料references：

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status

https://blog.csdn.net/lghuntfor/article/details/88606444

## 处理微信小程序errno错误码 Handling Miniprogram  errno code


使用usage:

import { MiniprogramErrno } from "network-spanner"

/**

 \* @description: 微信小程序errno错误码

 \* https://developers.weixin.qq.com/miniprogram/dev/framework/usability/PublicErrno.html#%E8%83%8C%E6%99%AF%E4%BB%8B%E7%BB%8D

 \* errno 错误码一般为 7 位数，第 1 - 2 位标识 API 接口的一级类目，第 3 - 4 位标识 API 接口的二级类目，第 5 - 7 位表示具体的错误类型。

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

 \* @return { EN, CN }

 */

```
  fail (err) {
    const { EN, CN } = MiniprogramErrno(err.errno)
    wx.showModal({
      content: `${CN || EN || err.errMsg}`,
      showCancel: false,
    })
  }
```

## 消息队列，用于传入多个数据（如用户多次拖拽）会触发最后一个（直接展示最新数据）

使用usage:

import { MessageQueue } from "network-spanner"

value: any // 队列传入somePromise函数的参数

somePromise: Function // 队列排队结束时的回调函数，请传入同步函数或者有回调的异步函数

delay?: number //当不支持window.requestAnimationFrame时可以自定义setTimeout的延迟时间，默认是1000

```
MessageQueue({ value, somePromise: this.refreshList })
```

安装：npm i network-spanner

install: npm i network-spanner