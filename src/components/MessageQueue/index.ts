/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2024-03-28 09:55:15
 * @LastEditTime: 2024-03-28 11:26:01
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 消息队列，用于传入多个数据（如用户多次拖拽）后直接展示最新数据
 * @FilePath: \network-spanner\src\components\MessageQueue\index.ts
 * 
 */
let getMessageList = <any>[]//消息队列
let loading = false
export interface MessageQueueParams {
  value: any // 队列的内容，会作为传入回调函数的参数
  somePromise: Function // 队列排队结束时的回调函数，请传入同步函数或者有回调的异步函数
  delay?: number //当不支持window.requestAnimationFrame时可以自定义setTimeout的延迟时间，默认是1000
}
export const MessageQueueFunc = (params: MessageQueueParams) => {
  const { value, somePromise, delay } = params
  const id = getMessageList.length;
  getMessageList.push({
    value,
    id,
  });
  const requestAnimationFrame = window && window.requestAnimationFrame
  // loading的时候先保存下来，不更新
  const saveEnterInfo = (i: number) => {
    (requestAnimationFrame || setTimeout)(async () => {
      if (loading) {
        saveEnterInfo(i);
      } else {
        if (getMessageList.length === 0) {
          return;
        }
        if (i < getMessageList.length - 1) {
          // 队列前面的定位点都忽略，只取最后一个
          return;
        }
        // 不LOADING了，渲染
        const Info = getMessageList.at(-1);
        // console.log("getMessageList", getMessageList)
        getMessageList = [];
        if (Info?.value) {
          loading = true
          await somePromise(Info.value);
          loading = false
        }
      }
      // @ts-ignore
    }, (delay || 1000));
  };
  saveEnterInfo(id);
}