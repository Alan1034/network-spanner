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
 * @description: 对象值或数组里的对象转化成字符串
 * @param {*} params
 * @return {*}
 */
const paramsToQuery = (params: Object | Array<any> = {}) => {

  if (Array.isArray(params) && params.length > 0) {
    // 是数组
    return JSON.stringify(params);
  }
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
 * @param {*} query
 * @return {*}
 */
const queryToData = (query = {}) => {
  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(query, key)) {
      const element = query[key];
      try {
        if (/[{]+/g.test(element) && /[}]+/g.test(element)) {
          query[key] = JSON.parse(element);
        }
      } catch (error) {
        // console.warn(error);
      }
    }
  }
  return query;
};

/**
 * @description: 得到URL中的参数(query string)
 * @return {*} urlParams
 */
const getURLParameter = (
  params = {
    decode: false,
  }
) => {
  const { decode } = params;
  const pl = /\+/g;
  const searchReg = /([^&=]+)=?([^&]*)/g;
  const toDecode = (s) => {
    return decodeURIComponent(s.replace(pl, " "));
  };

  const query = window.location.search.substring(1);
  const urlParams = {};
  const exec = () => {
    const match = searchReg.exec(query);
    if (match) {
      decode
        ? (urlParams[toDecode(match[1])] = toDecode(match[2]))
        : (urlParams[match[1]] = match[2]);
      exec();
    }
    return urlParams;
  };
  exec();
  return urlParams;
};

export default { paramsToQuery, queryToData, getURLParameter };
