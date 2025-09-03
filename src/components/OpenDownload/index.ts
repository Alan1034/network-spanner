/**
 * @format
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2025-09-03 09:33:41
 * @LastEditTime: 2025-09-03 09:40:57
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description:
 * @FilePath: \network-spanner\src\components\OpenDownload\index.ts
 */

import VConsole from "vconsole";
const vConsole = new VConsole();
export const is_neizhi = () => {
  var ua = navigator?.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i)) {
    return "weixin";
  } else if (ua.match(/mqqbrowser|qzone|qqbrowser/i)) {
    return "QQ";
  } else if (ua.match(/Alipay/i)) {
    return "alipay";
  }
  return false;
};

export const goExperience = (params: any) => {
  const {
    scheme,
    downloadHref,
    weixinCallback,
    qqCallback,
    alipayCallback,
    appBrowserCallback,

  } = params || {};
  const u = navigator?.userAgent;
  console.info("browser:", u);
  const appBrowser = is_neizhi();

  if (appBrowser) {

    if (appBrowser === "weixin") {
      weixinCallback();
    } else if (appBrowser === "QQ") {
      qqCallback();
    } else if (appBrowser === "alipay") {
      alipayCallback();
    }
    appBrowserCallback();
  }

  const initialTime = new Date();
  let counter = 0;
  let waitTime = 0;
  const checkOpen = setInterval(() => {
    counter++;
    waitTime = Date.now() - initialTime.getTime();
    if (waitTime > 2500) {
      clearInterval(checkOpen);
      goDownload({
        downloadHref,
      });
    }
    if (counter < 100) return;
    const hide = document.hidden || (document as any).webkitHidden;
    if (!hide) {
      clearInterval(checkOpen);
      goDownload({
        downloadHref,
      });
    }
  }, 20);
  // 安卓
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
  // IOS
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  try {
    switch (true) {
      case isAndroid:
        window.location.href = scheme;
        clearInterval(checkOpen);
        break;
      case isiOS:
        break;

      default:
        break;
    }
  } catch (error) {
    console.error(error);
    goDownload({
      downloadHref,
    });
  }
};

export const goDownload = (params: any) => {
  const { downloadHref = "" } = params || {};
  // 跳转到下载链接
  window.location.href = downloadHref;
};

export default { goExperience, goDownload };
