/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2024-03-20 09:39:47
 * @LastEditTime: 2024-03-20 16:20:21
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \network-spanner\src\components\MiniprogramErrno\6xx.ts
 * 
 */
export const sixxx = {
  "600000": {
    "EN": "unknown network error",
    "CN": "未知的网络错误"
  },
  "600001": {
    "EN": "cronet component error",
    "CN": "cronet组件错误，详细错误参考返回中的errMsg字段。参考链接"
  },
  "600002": {
    "EN": "url not in domain list",
    "CN": "url域名不在安全域名列表中"
  },
  "600003": {
    "EN": "network interrupted error",
    "CN": "网络被迫中断。以下2种情况会导致该错误：1. 当小程序处于后台时发起网络请求；2. 小程序在前台发起网络请求后，退到后台，同时请求未能在退后台后的 5s 内结束时。"
  },
  "600004": {
    "EN": "network logic error",
    "CN": "网络类目逻辑错误"
  },
  "600005": {
    "EN": "network argv error",
    "CN": "网络类目参数错误"
  },
  "600006": {
    "EN": "network system error",
    "CN": "网络类目系统错误"
  },
  "600007": {
    "EN": "network exceed max task count",
    "CN": "超过最大请求数量"
  },
  "600008": {
    "EN": "network reach the max redirect count",
    "CN": "超过最大重定向次数"
  },
  "600009": {
    "EN": "invalid URL",
    "CN": "URL 格式不合法"
  },
  "600010": {
    "EN": "invalid request data",
    "CN": "请求的 data 序列化失败"
  },
  "600011": {
    "EN": "url validate error",
    "CN": "URL验证错误"
  },
  "602000": {
    "EN": "unknown network request error",
    "CN": "未知的发起请求错误"
  },
  "602001": {
    "EN": "request system error",
    "CN": "request系统错误"
  },
  "602002": {
    "EN": "request server http error",
    "CN": "http请求httpdns服务商错误"
  },
  "602101": {
    "EN": "not buy httpdns service",
    "CN": "小程序未在服务市场购买httpdns服务"
  },
  "602102": {
    "EN": "service expired",
    "CN": "小程序在httpdns服务市场资源包过期"
  },
  "602103": {
    "EN": "no enough httpdns quota",
    "CN": "小程序在httpdns服务市场额度不足"
  },
  "602104": {
    "EN": "empty servicer return",
    "CN": "httpdns服务商返回结果为空"
  },
  "602105": {
    "EN": "time-out when request servicer",
    "CN": "调用httpdns服务商结果超时"
  },
  "602106": {
    "EN": "invalid servicer response",
    "CN": "httpdns服务商返回数据不合法"
  },
  "602107": {
    "EN": "empty domain httpdns result",
    "CN": "httpdns域名解析结果为空"
  },
  "602108": {
    "EN": "not valid service id",
    "CN": "不支持的httpdns服务商id"
  },
  "602300": {
    "EN": "convert native buffer parameter fail. native buffer exceed size limit",
    "CN": "超出native buffer最大限制"
  },
  "602301": {
    "EN": "bind socket dependency is unavailable",
    "CN": "申请移动网络请求失败"
  },
  "602302": {
    "EN": "response data convert to UTF8 fail",
    "CN": "请求数据转换格式失败"
  },
  "603101": {
    "EN": "iOS not supported",
    "CN": "不支持ios平台"
  },
  "603102": {
    "EN": "android not supported",
    "CN": "不支持安卓平台"
  },
  "603103": {
    "EN": "parameter error: require packageName or packageNameArray",
    "CN": "需要包名或包名数组"
  },
  "603104": {
    "EN": "parameter error: require downloadId or downloadIdArray or appIdArray",
    "CN": "需要下载ID或者ID数组或APPID数组"
  },
  "603105": {
    "EN": "abort download task",
    "CN": "中断下载任务"
  },
  "603300": {
    "EN": "download save file error",
    "CN": "保存文件出错"
  },
  "603301": {
    "EN": "exceed max file size",
    "CN": "超出文件最大大小限制"
  },
  "603302": {
    "EN": "file data is empty",
    "CN": "文件数据为空"
  },
  "603303": {
    "EN": "permission denied can not open file filepath",
    "CN": "指定存储路径无权限"
  },
  "605103": {
    "EN": "WebSocket connect is fail",
    "CN": "WebSocket connect失败"
  },
  "606101": {
    "EN": "mdns resolve system error:%d",
    "CN": "解析失败，详细错误参考返回中的errMsg字段。系统错误码参考链接"
  },
}