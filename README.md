# network-spanner

提供各种前端网络需要用到的工具

Provide various tools for front-end network


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

安装：npm i network-spanner

install: npm i network-spanner

