/**
 * @format
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2024-12-25 15:37:41
 * @LastEditTime: 2024-12-25 15:38:09
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 在URL中储存对象
 * @FilePath: \network-spanner\src\components\ObjectStoreInUrl\index.ts
 */

/**
 * @description: 对象值里的对象转化成字符串
 * @param {*} params
 * @return {*}
 */
const paramsToQuery = (params = {}) => {
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      if (Object.prototype.toString.call(element) === "[object Object]") {
        params[key] = JSON.stringify(element);
      }
    }
  }
  return params;
};

/**
 * @description: URL query的值转化成对象
 * @param {*} params
 * @return {*}
 */
const queryToData = (query = {}) => {
  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(query, key)) {
      const element = query[key];
      try {
        query[key] = JSON.parse(element);
      } catch (error) {
        // console.warn(error);
      }
    }
  }
  return query;
};

export default { paramsToQuery, queryToData };
